import React from "react";

export function NavigationMenu({ children }: { children?: React.ReactNode }) {
  return <nav className="flex gap-2">{children}</nav>;
}
export default NavigationMenu;
