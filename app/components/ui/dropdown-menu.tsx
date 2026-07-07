import React from "react";
export function DropdownMenu({ children, asChild = false, ...props }: any) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { ...props });
  }
  return <div {...props}>{children}</div>;
}
export default DropdownMenu;
