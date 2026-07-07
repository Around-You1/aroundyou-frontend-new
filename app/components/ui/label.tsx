import React from "react";
import clsx from "clsx";
export function Label({ children, htmlFor, className, ...props }: any) {
  return <label htmlFor={htmlFor} className={clsx("block text-sm font-medium text-gray-700", className)} {...props}>{children}</label>;
}
export default Label;
