import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cookie, Sparkles, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CallButton, WhatsAppButton } from "./Buttons";

export const NAV = [
  { label: "Our Specialties", to: "/", hash: "products", icon: Cookie },
  { label: "Festivals", to: "/festivals", icon: Sparkles },
  { label: "Journal", to: "/journal", icon: BookOpen },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 border-b transition-colors duration-300", scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background/70 backdrop-blur-sm")}>
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...("hash" in n ? { hash: n.hash } : {})}
              activeOptions={{ exact: true, includeHash: false }}
              className="group relative py-2 text-[15px] font-medium text-foreground/80 hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-saffron transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CallButton className="px-3 sm:px-5 inline-flex" />
          <WhatsAppButton variant="primary" className="hidden sm:inline-flex">Order</WhatsAppButton>
          <WhatsAppButton variant="primary" className="px-3 sm:hidden" children="Order" />
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  return (
    <nav aria-label="Mobile" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        {NAV.map((n) => (
          <Link
            key={n.label}
            to={n.to}
            {...("hash" in n ? { hash: n.hash } : {})}
            activeOptions={{ exact: true, includeHash: false }}
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground data-[status=active]:text-primary"
          >
            <n.icon className="size-5" />
            {n.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
