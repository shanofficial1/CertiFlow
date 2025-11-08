export function Textarea({ className = "", ...props }) {
  return <textarea className={`block w-full border rounded-lg p-2 ${className}`} {...props} />;
}
