import React from "react";

export const Radio = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input type="radio" ref={ref} {...props} />;
});
Radio.displayName = "Radio";
export default Radio;
