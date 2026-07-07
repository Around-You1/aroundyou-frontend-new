import React from "react";
export const Switch = React.forwardRef<HTMLInputElement, any>(({ checked, onCheckedChange, ...props }, ref) => <input type="checkbox" role="switch" ref={ref} checked={checked} onChange={(e) => { onCheckedChange && onCheckedChange(e.target.checked); if (props.onChange) props.onChange(e); }} {...props} />);
Switch.displayName = "Switch";
export default Switch;
