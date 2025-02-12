import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        "p-2 bg-neutral-600 rounded-2xl",
        "disabled:bg-neutral-400 disabled:cursor-not-allowed",
        props.className
      )}
    />
  );
};
