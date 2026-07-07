import React from "react";
export function Dialog({ children, open, onOpenChange, ...props }: any) { return <div data-open={open} {...props}>{children}</div>; }
export function DialogContent(props: any) { return <div {...props} />; }
export function DialogHeader(props: any) { return <div {...props} />; }
export function DialogTitle(props: any) { return <h3 {...props} />; }
export function DialogDescription(props: any) { return <p {...props} />; }
export function DialogFooter(props: any) { return <div {...props} />; }
export default Dialog;
