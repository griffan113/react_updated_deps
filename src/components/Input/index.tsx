import { InputHTMLAttributes } from "react";

import { clsx } from "clsx";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
  optional?: boolean;
  className?: string;
}

export function Input({
  label,
  name,
  placeholder,
  defaultValue,
  error,
  optional = false,
  className,
  ...rest
}: IInputProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 w-full">
      <label
        htmlFor={name}
        className={clsx(
          "flex items-baseline gap-3 w-full text-sm font-bold whitespace-nowrap rounded ring-2 ring-teal-700 bg-gray-800 p-3",
          "focus-within:ring-blue-200",
          error ? "ring-2 ring-red-400" : undefined,
          className
        )}
      >
        {label}
        <input
          name={name}
          className={clsx(
            "w-full h-full outline-none bg-gray-800 font-normal text-gray-600 text-base pl-1 pr-2 py-1",
            "placeholder:text-gray-500"
          )}
          placeholder={`${placeholder}${optional ? " (opcional)" : ""}`}
          defaultValue={defaultValue}
          {...rest}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
