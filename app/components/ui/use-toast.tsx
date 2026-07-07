import React, { createContext, useContext, useState } from "react";
import { ToastProvider as _ToastProvider, ToastViewport } from "./toast";

const ToastContext = createContext<any>(undefined);

export function ToastProvider({ children }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const toast = (opts: any) => setMessages((m) => [...m, { id: Date.now(), ...opts }]);
  return (
    <ToastContext.Provider value={{ toast }}>
      <_ToastProvider>
        {children}
        <ToastViewport>
          {messages.map((t) => (
            <div key={t.id} className="bg-black text-white px-3 py-2 rounded">
              {t.title && <div className="font-medium">{t.title}</div>}
              {t.description && <div className="text-sm">{t.description}</div>}
            </div>
          ))}
        </ToastViewport>
      </_ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
export default useToast;
