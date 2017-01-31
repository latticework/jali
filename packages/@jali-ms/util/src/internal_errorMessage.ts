export default function errorMessage<T>(value: T, message?: string | ((value: T) => string)) {
  return (typeof message === 'function') ? message(value) : message;
}
