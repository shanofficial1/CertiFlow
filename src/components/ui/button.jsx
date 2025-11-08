export function Button({ children, variant = "default", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg border text-sm px-3 py-2 transition";
  const styles = variant === "outline"
    ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
    : "bg-slate-900 border-slate-900 text-white hover:opacity-90";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
