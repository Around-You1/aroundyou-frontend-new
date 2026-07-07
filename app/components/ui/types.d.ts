/* app/components/ui/types.d.ts - helper ambient types */
import type React from "react";
declare global { type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>; }
declare module "app/lib/icons" { const _default: any; export = _default; }
