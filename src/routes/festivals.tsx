import { createFileRoute, Link } from "@tanstack/react-router";
import { kitchen, canonicalUrl, SITE_URL } from "@/lib/site";
import { FestivalCards, OrderCTA, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Traditional Gujarati Festival Snacks & Farsan — Chakri House" },
      {
        name: "description",
        content:
          "Celebrate Diwali, Navratri, Holi, and family gatherings with authentic homemade Gujarati farsan and snacks. Handcrafted in 100% pure groundnut oil. Order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Traditional Gujarati Festival Snacks & Farsan — Chakri House",
      },
      {
        property: "og:description",
        content:
          "Good food brings everyone together. Homemade festive farsan, butter chakari, puris, and chevdo for your family gatherings.",
      },
      { property: "og:url", content: canonicalUrl("/festivals") },
      { property: "og:image", content: `${SITE_URL}/favicon.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/festivals") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Festivals",
              item: canonicalUrl("/festivals"),
            },
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
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          / <span className="text-foreground">Festivals</span>
        </nav>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            headingTag="h1"
            eyebrow="Festivals"
            title="Good Food Brings Everyone Together"
            intro="Every festival in our homes begins in the kitchen. These are the moments our snacks are made for — shared plates, visiting family and long evenings together."
          />
          <img
            src={kitchen}
            alt="Traditional Gujarati festive kitchen with diyas and freshly fried farsan for Diwali and celebrations"
            loading="lazy"
            width={1200}
            height={912}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>
      <section className="container-site py-16 md:py-24">
        <FestivalCards />
      </section>
      <OrderCTA />
    </>
  );
}
