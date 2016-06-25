## Still have boilerplate comments:
# -*- mode: ruby -*-
# vi: set ft=ruby :


# For examples on parameterizing see:
# http://stackoverflow.com/questions/13065576/override-vagrant-configuration-settings-locally-per-dev


Vagrant.configure(2) do |config|
  # Ubuntu Server 14.04 LTS
  config.vm.box = 'box-cutter/ubuntu1404-desktop'
  # config.vm.box = 'box-cutter/ubuntu1604-desktop'

  config.vm.provider 'virtualbox' do |vb|
  end


  # Install the latest version of Chef.
  # For more information see https://github.com/chef/vagrant-omnibus
  #
  config.omnibus.chef_version = :latest

  # Enabling the Berkshelf plugin.
  config.berkshelf.enabled = true

  # Provision with Chef Zero
  config.vm.provision :chef_zero do |chef|
    # Specify the local paths where Chef data is stored
    chef.cookbooks_path = ['cookbooks', 'site-cookbooks']
    chef.data_bags_path = 'data_bags'
    chef.nodes_path = 'nodes'
    chef.roles_path = 'roles'

    # Add a recipe
    chef.add_recipe 'main::default'
  end


  # See: http://stackoverflow.com/a/20431791
  # Seealso: http://friendsofvagrant.github.io/v1/docs/config/vm/define.html
  config.vm.define 'jali' do |jali|
    jali.vm.synced_folder 'C:\git', '/git'

    jali.vm.provider 'virtualbox' do |vb|
      # For a complete reference, please see the online documentation at
      # https://docs.vagrantup.com/v2/virtualbox/configuration.html

      vb.name = 'jali'

      # Display the VirtualBox GUI when booting the machine
      vb.gui = true

      # Customize the amount of memory on the VM (in MB):
      # vb.memory = '2048'

      # Customize the amount of video memory on the VM (in MB):
      # vb.customize ['modifyvm', :id, '--vram', '128'']

      # See: https://forums.virtualbox.org/viewtopic.php?f=6&t=77731
      vb.customize ['setextradata', :id, 'GUI/ScaleFactor', '1.25']
    end
  end
end
