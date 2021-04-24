export default function mkGuard<T>() {
  return (key: keyof T) => key;
}
