export function Input({ className = "", ...props }) {
  return <input className={`block w-full border rounded-lg p-2 ${className}`} {...props} />;
}
