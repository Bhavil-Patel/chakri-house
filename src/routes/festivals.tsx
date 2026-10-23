import { createFileRoute, Link } from "@tanstack/react-router";
import { kitchen } from "@/lib/site";
import { FestivalCards, OrderCTA, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Festivals — Chakri House" },
      { name: "description", content: "Homemade snacks for Diwali, Navratri, Holi and every family gathering." },
      { property: "og:title", content: "Festivals — Chakri House" },
      { property: "og:description", content: "Good food brings everyone together." },
      { property: "og:url", content: "/festivals" },
    ],
    links: [{ rel: "canonical", href: "/festivals" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Festivals", item: "/festivals" },
          ],
        }),
      },
    ],
  }),
  component: Festivals,
});

function Festivals() {
  return (
    <>
      <section className="container-site pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Festivals</span></nav>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading headingTag="h1" eyebrow="Festivals" title="Good Food Brings Everyone Together" intro="Every festival in our homes begins in the kitchen. These are the moments our snacks are made for — shared plates, visiting family and long evenings together." />
          <img src={kitchen} alt="Festive home kitchen with diyas and fresh chakri" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        </div>
      </section>
      <section className="container-site py-16 md:py-24"><FestivalCards /></section>
      <OrderCTA />
    </>
  );
}
