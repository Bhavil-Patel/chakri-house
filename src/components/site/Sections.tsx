import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ARTICLES, FESTIVALS } from "@/lib/site";
import { CallButton, WhatsAppButton } from "./Buttons";

type FooterLinkProps = {
  to?: string;
  hash?: string;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("text-xs font-semibold uppercase tracking-[0.22em] text-terracotta", className)}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  headingTag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  /** "h1" on pages whose heading is the page's primary heading. */ headingTag?: "h1" | "h2";
}) {
  const Tag = headingTag;
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="text-section mt-3 font-semibold text-primary">{title}</Tag>
      {intro && <p className="mt-4 text-[17px] text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function FestivalCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {FESTIVALS.map((f, i) => (
        <article
          key={f.id}
          id={f.id}
          className={cn(
            "reveal relative flex min-h-60 flex-col justify-end overflow-hidden rounded-3xl p-6",
            f.tone,
            f.tone === "bg-beige" || f.tone === "bg-saffron"
              ? "text-primary-deep"
              : "text-primary-foreground",
          )}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <svg
            viewBox="0 0 100 100"
            className="spin-slow absolute -right-8 -top-8 size-40 opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {Array.from({ length: 12 }).map((_, k) => (
              <ellipse
                key={k}
                cx="50"
                cy="50"
                rx="10"
                ry="40"
                transform={`rotate(${k * 15} 50 50)`}
              />
            ))}
          </svg>
          <h3 className="relative text-3xl font-semibold">{f.title}</h3>
          <p className="relative mt-2 text-[15px] opacity-90">{f.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ArticleCards({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {ARTICLES.slice(0, limit).map((a) => (
        <Link key={a.slug} to="/journal/$slug" params={{ slug: a.slug }} className="group block">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={a.image}
              alt={`Cover image for the article: ${a.title}`}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <span className="mt-4 inline-block rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Draft
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-primary group-hover:underline">
            {a.title}
          </h3>
          <p className="mt-2 text-muted-foreground">{a.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function OrderCTA() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
        <div className="float-slow absolute -left-16 -top-16 size-56 rounded-full bg-primary-soft/60" />
        <div
          className="float-slow absolute -bottom-20 -right-10 size-64 rounded-full bg-saffron/20"
          style={{ animationDelay: "2s" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-section font-semibold">
            Your Favourite Snacks Are Just a <span className="text-saffron">Message</span> Away.
          </h2>
          <p className="mt-4 text-[17px] text-primary-foreground/80">
            Tell us what you'd like, and contact us directly to place your order.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton />
            <CallButton variant="ghostLight" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterLink({ to, hash, href, target, rel, children }: FooterLinkProps) {
  const inner = (
    <span className="group relative inline-block text-foreground/80 transition-colors duration-200 hover:text-primary">
      <span>{children}</span>
      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#174C3C] transition-transform duration-300 group-hover:scale-x-100" />
    </span>
  );

  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={rel}>
      {inner}
    </a>
  );
}

export { ArrowRight };
export { WhyChakriHouse } from "./WhyChakriHouse";
