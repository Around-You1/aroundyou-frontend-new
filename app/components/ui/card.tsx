import React from "react";
export function Card({ children, className, ...props }: any) {
  return <div className={className} {...props}>{children}</div>;
}
export function CardHeader(props: any) { return <div {...props} />; }
export function CardTitle(props: any) { return <h3 {...props} />; }
export function CardContent(props: any) { return <div {...props} />; }
export default Card;
