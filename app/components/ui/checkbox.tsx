import React from "react";
export const Checkbox = React.forwardRef<HTMLInputElement, any>(({ checked, onCheckedChange, ...props }, ref) => <input type="checkbox" ref={ref} checked={checked} onChange={(e) => { onCheckedChange && onCheckedChange(e.target.checked); if (props.onChange) props.onChange(e); }} {...props} />);
Checkbox.displayName = "Checkbox";
export default Checkbox;
