import React from "react";
export function Collapsible({ children, open, onOpenChange, ...props }: any) { return <div data-open={open} {...props}>{children}</div>; }
export function CollapsibleTrigger(props: any) { return <button {...props} />; }
export function CollapsibleContent(props: any) { return <div {...props} />; }
export default Collapsible;
