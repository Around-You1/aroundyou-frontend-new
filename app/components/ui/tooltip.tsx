import React from "react";

export function Tooltip({ children, text }: { children?: React.ReactNode; text?: string }) {
  return <span title={text}>{children}</span>;
}
export default Tooltip;
