import React from "react";
export function Select({ value, onValueChange, children, ...props }: any) {
  return <select value={value} onChange={(e) => { onValueChange && onValueChange(e.target.value); if (props.onChange) props.onChange(e); }} {...props}>{children}</select>;
}
export function SelectTrigger(props: any) { return <div {...props} />; }
export function SelectContent(props: any) { return <div {...props} />; }
export function SelectItem(props: any) { return <option {...props} />; }
export function SelectValue(props: any) { return <span {...props} />; }
export default Select;
