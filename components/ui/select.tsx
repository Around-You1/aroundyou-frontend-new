import * as React from "react";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`border rounded-md px-3 py-2 w-full ${className}`}
      {...props}
    />
  );
}

export function SelectTrigger({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`border rounded-md px-3 py-2 ${className}`} {...props} />;
}

export function SelectContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`mt-1 border rounded-md bg-white shadow ${className}`} {...props} />;
}

export function SelectItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${className}`} {...props} />;
}

export function SelectValue({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={className} {...props} />;
}
