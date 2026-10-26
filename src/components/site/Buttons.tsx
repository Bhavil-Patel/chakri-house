import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { telLink, waLink } from "@/lib/site";
import type { ReactNode } from "react";

export const btn = {
  base: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.97]",
  primary: "bg-primary text-primary-foreground hover:bg-primary-deep",
  outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-95",
  light: "bg-background text-primary hover:bg-saffron",
  ghostLight:
    "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
};

export function WhatsAppButton({
  message,
  className,
  children = "Order on WhatsApp",
  variant = "whatsapp",
}: {
  message?: string;
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof btn;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(btn.base, btn[variant], className)}
    >
      <MessageCircle className="size-4" /> {children}
    </a>
  );
}

export function CallButton({
  className,
  variant = "outline",
  children = "Call Now",
}: {
  className?: string;
  variant?: keyof typeof btn;
  children?: ReactNode;
}) {
  return (
    <a href={telLink()} className={cn(btn.base, btn[variant], className)}>
      <Phone className="size-4" /> {children}
    </a>
  );
}
