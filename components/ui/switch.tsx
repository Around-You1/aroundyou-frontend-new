import * as React from "react";

export function Switch({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={`h-5 w-5 rounded border-gray-300 text-black focus:ring-black ${className}`}
      {...props}
    />
  );
}
