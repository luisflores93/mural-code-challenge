import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-[#6366F1] hover:bg-[#5558DD] flex items-center gap-3 text-white w-fit p-4 rounded-2xl cursor-pointer",
        "disabled:bg-neutral-400 disabled:text-white disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};
