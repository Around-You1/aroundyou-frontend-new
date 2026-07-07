import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef<any, any>(({ children, className, asChild, ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";
  const classNames = clsx(base, className);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { ref, className: clsx((children as any).props?.className, classNames), ...props });
  }
  return <button ref={ref} className={classNames} {...props}>{children}</button>;
});
Button.displayName = "Button";
export default Button;
