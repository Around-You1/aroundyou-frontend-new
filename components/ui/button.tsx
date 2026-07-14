import * as React from "react";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 ${className}`}
      {...props}
    />
  );
}
