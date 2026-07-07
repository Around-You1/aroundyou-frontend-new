import React from "react";
export function Popover({ children, open, onOpenChange, ...props }: any) { return <div data-open={open} {...props}>{children}</div>; }
export default Popover;
