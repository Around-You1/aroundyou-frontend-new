import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
}

export type ToastActionElement = React.ReactElement;

export function Toast({ title, description, action }: ToastProps) {
  return (
    <div className={cn("rounded-md border bg-white p-4 shadow-md")}>
      {title && <div className="font-medium">{title}</div>}
      {description && <div className="text-sm text-gray-600">{description}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
