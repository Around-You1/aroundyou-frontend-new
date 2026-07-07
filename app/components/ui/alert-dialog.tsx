import React from "react";
export function AlertDialog({ children, open, onOpenChange, ...props }: any) { return <div data-open={open} {...props}>{children}</div>; }
export function AlertDialogContent(props: any) { return <div {...props} />; }
export function AlertDialogAction(props: any) { return <button {...props} />; }
export function AlertDialogCancel(props: any) { return <button {...props} />; }
export function AlertDialogDescription(props: any) { return <div {...props} />; }
export function AlertDialogFooter(props: any) { return <div {...props} />; }
export function AlertDialogHeader(props: any) { return <div {...props} />; }
export function AlertDialogTitle(props: any) { return <h3 {...props} />; }
export default AlertDialog;
