/* app/components/ui/icons.tsx — canonical icon barrel (real icons, no placeholders) */
import React from "react";
import * as Lucide from "lucide-react";

/* fallback icon, used only if a name isn't found in the icon library */
const Fallback = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l2 2" />
  </svg>
);

function get(name: string) {
  // @ts-ignore
  return Lucide[name] ?? Fallback;
}

export const ChevronDown = get("ChevronDown");
export const ChevronUp = get("ChevronUp");
export const ChevronLeft = get("ChevronLeft");
export const ChevronRight = get("ChevronRight");
export const ArrowUp = get("ArrowUp");
export const ArrowDown = get("ArrowDown");
export const Loader2 = get("Loader2");
export const Copy = get("Copy");
export const FileText = get("FileText");
export const Upload = get("Upload");
export const Check = get("Check");
export const RefreshCw = get("RefreshCw");
export const Search = get("Search");
export const Plus = get("Plus");
export const X = get("X");
export const Download = get("Download");
export const Printer = get("Printer");
export const MapPin = get("MapPin");
export const Globe = get("Globe");
export const ExternalLink = get("ExternalLink");
export const Mail = get("Mail");
export const Phone = get("Phone");
export const Tag = get("Tag");
export const Eye = get("Eye");
export const EyeOff = get("EyeOff");
export const Compass = get("Compass");
export const Store = get("Store");
export const Building2 = get("Building2");
export const LogOut = get("LogOut");
export const Baby = get("Baby");
export const Navigation = get("Navigation");
export const Music = get("Music");
export const Edit = get("Edit");
export const Trash2 = get("Trash2");

/* brand/social icons drawn manually (not reliably in the icon library) */
export const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-1.8 1.07-3.6 1.5A4.48 4.48 0 0 0 12 6.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
export const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M22 10.5s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.7 7 12 7 12 7s-4.7 0-6.3.6c-.4.1-1.2.1-1.9.9C3.2 9.1 3 10.5 3 10.5S3 12 3 13.5s.2 1.4.8 2c.7.8 1.6.8 2 .9C7.3 17 12 17 12 17s4.7 0 6.3-.6c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2S23 12 23 10.5z" />
    <polygon points="10 14 15 12 10 10 10 14" />
  </svg>
);
export const Shield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M12 2l7 4v6c0 5-3.6 9.7-7 10-3.4-.3-7-5-7-10V6l7-4z" />
  </svg>
);
export const ImageIcon = FileText;

export default {
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Loader2, Copy, FileText, Upload,
  Check, RefreshCw, Search, Plus, X, Download, Printer, MapPin, Globe, ExternalLink, Mail, Phone,
  Tag, Eye, EyeOff, Compass, Store, Building2, LogOut, Baby, Navigation, Music, Edit, Trash2,
  Instagram, Twitter, Youtube, ImageIcon, Shield
};