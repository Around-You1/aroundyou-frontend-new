import React from "react";
import clsx from "clsx";
export function Badge({ children, className, ...props }: any) {
  return <span className={clsx("inline-flex items-center px-2 py-0.5 rounded text-xs", className)} {...props}>{children}</span>;
}
export default Badge;
