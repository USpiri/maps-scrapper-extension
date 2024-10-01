import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  icon,
  variant,
  className,
  ...props
}: ButtonProps) => {
  const iconClass = icon ? "p-1" : "px-2 py-0.5";
  const variantClass =
    variant === "primary"
      ? "bg-stone-800 text-stone-100 hover:bg-stone-800/90"
      : "hover:bg-stone-700/5";
  return (
    <button
      {...props}
      className={`${iconClass} ${variantClass} ${className} border-gray-300 border rounded-md transition active:scale-95`}
    >
      {children}
    </button>
  );
};
