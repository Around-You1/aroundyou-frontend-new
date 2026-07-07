import React from "react";

export function Sheet({ children }: { children?: React.ReactNode }) {
  return <div className="fixed inset-0">{children}</div>;
}
export default Sheet;
