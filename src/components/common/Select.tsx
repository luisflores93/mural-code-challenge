import clsx from "clsx";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select
      {...props}
      className={clsx(
        "p-2 bg-neutral-600 rounded-2xl",
        "disabled:bg-neutral-400 disabled:text-white disabled:cursor-not-allowed",
        props.className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
