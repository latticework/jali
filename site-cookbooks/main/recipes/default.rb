# Cookbook Name:: main
# Recipe:: default


# Run apt-update
include_recipe 'apt::default'


# Install gksudo
apt_package 'gksu' do
  action :install
end


# Install Docker
docker_service 'default' do
  action [:create, :start]
end

# Install Hack font
# Font: https://github.com/chrissimpkins/Hack/issues/189#issuecomment-198649485
# Source: http://stackoverflow.com/a/9898849
# See also https://github.com/mikemackintosh/masterbaker-fonts/blob/master/recipes/ubuntu.rb
# See also http://stackoverflow.com/a/15757093
# See also https://docs.chef.io/dsl_recipe.html
if node[:platform_version].to_f >= 16.04
  apt_package 'fonts-hack-ttf' do
    action :install
  end
elsif ::Dir.exist?('/usr/share/fonts/truetype/hack/')
  Chef::Log.info('(up to date)')
else
  remote_file "#{Chef::Config[:file_cache_path]}/fonts-hack-ttf_2.019-1_all.deb" do
    source 'http://mirrors.kernel.org/ubuntu/pool/universe/f/fonts-hack/fonts-hack-ttf_2.019-1_all.deb'
    mode 0644
    checksum 'bb10200b4f5a941380a5e844f8e5783ea49a71f5b5462e33223007acc99a1607'
  end

  dpkg_package 'fonts-hack-ttf' do
    source "#{Chef::Config[:file_cache_path]}/fonts-hack-ttf_2.019-1_all.deb"
    action :install
  end
end

# Install git
package 'git' do
  action :install
end

# Install Node
if ::Dir.exist?('/usr/bin/node')
  Chef::Log.info('(up to date)')
else
  bash 'prep_for_node_6_x' do
    code <<-EOH
      curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    EOH
  end

  package 'nodejs' do
    action :install
  end
end


# Install Sphinx documentation generator
# http://stackoverflow.com/a/23922391
apt_package 'python3-sphinx' do
  action :install
end

# Install VSCode
# Update instructions:
# Download:
# - Go to https://code.visualstudio.com/Docs/?dv=linux64_deb
# - Node downloaded file.
# - Copy link address of "direct download link" and paste as value of "source"
#   below.
# - Download http://www.labtestproject.com/files/win/sha256sum/sha256sum.exe
# - Follow instructions,
#   http://www.labtestproject.com/using_windows/step_by_step_using_sha256sum_on_windows_xp.html
#   to obtain checksum of downloaded file and paste below.
if ::Dir.exist?('/usr/share/code/')
  Chef::Log.info('(up to date)')
else
  remote_file "#{Chef::Config[:file_cache_path]}/visual-studio-code.deb" do
    # or http://code.visualstudio.com/docs/?dv=linux64_deb ?
    source 'https://go.microsoft.com/fwlink/?LinkID=760868'
    mode 0644
  end

  dpkg_package 'visual-studio-code' do
    source "#{Chef::Config[:file_cache_path]}/visual-studio-code.deb"
    action :install
  end

  # TODO: Attempt to install Visual Studio Code Settings Sync and download sync.

  # TODO: Include --disable-gpu at least for Ubuntu 14.04
  #  * Edit /usr/share/applications/code.desktop
  #    - [Desktop Entry]Exec
  #    - [Desktop Action new-window]Exec
end

# Set shell functions and aliases
file '/home/vagrant/.bash_aliases' do
end

# Set up project
if ::Dir.exist?('/vagrant/node_modules')
  Chef::Log.info('(up to date)')
else
  execute 'npm install' do
    cwd '/vagrant'
    user 'vagrant'
    environment ({ 'HOME' => '/home/vagrant', 'USER' => 'vagrant' })
    command 'npm install'
    action :run
  end
end
