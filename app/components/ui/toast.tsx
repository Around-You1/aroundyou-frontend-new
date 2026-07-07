

/**
 * Permissive Toast types to match usage across the codebase.
 * - Toast: permissive object type (allows variant and arbitrary keys)
 * - ToastProps: props for the Toast component (includes HTML attributes)
 */
export interface Toast {
  variant?: string;
  [key: string]: any;
}

export type ToastProps = Toast & React.HTMLAttributes<any>;

/* Value component exported below will match ToastProps */
import React from "react";


export const ToastActionElement = (props: any) => {
  return <div {...props} />;
};
ToastActionElement.displayName = "ToastActionElement";

export type ToastActionElementType = typeof ToastActionElement;

export const Toast = (props: any) => <div {...props} />;
export function ToastTitle(props: any) { return <div {...props} />; }
export function ToastDescription(props: any) { return <div {...props} />; }
export function ToastClose(props: any) { return <button {...props} />; }
export function ToastViewport(props: any) { return <div {...props} />; }
export function ToastProvider({ children, ...props }: any) { return <div {...props}>{children}</div>; }

export default Toast;