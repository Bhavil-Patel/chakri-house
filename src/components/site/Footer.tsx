import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { PHONE_NUMBER, telLink, waLink } from "@/lib/site";
import { FooterLink } from "./Sections";

export function Footer() {
  return (
    <footer className="bg-sage pb-24 pt-16 md:pb-10">
      <div className="container-site grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs font-display text-xl text-primary">Traditional Taste. Homemade with Love.</p>
          <p className="mt-2 text-sm text-muted-foreground">Freshly Made. Full of Flavour.</p>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Explore</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><FooterLink to="/" hash="products">Our Dessert</FooterLink></li>
            <li><FooterLink to="/festivals">Festivals</FooterLink></li>
            <li><FooterLink to="/journal">Journal</FooterLink></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Order</h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><FooterLink href={waLink()} target="_blank" rel="noopener noreferrer">Order on WhatsApp</FooterLink></li>
            <li><FooterLink href={telLink()}>Call Now: +{PHONE_NUMBER}</FooterLink></li>
          </ul>
        </div>
      </div>
      <div className="container-site mt-12 flex flex-col gap-2 border-t border-primary/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Chakri House. All rights reserved.</p>
        <p>Orders are placed directly via WhatsApp or phone. We don't collect personal data on this site.</p>
      </div>
    </footer>
  );
}
