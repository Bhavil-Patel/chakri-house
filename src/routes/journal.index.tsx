import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleCards, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Chakri House" },
      { name: "description", content: "Stories from our kitchen: serving ideas, snack traditions and keeping snacks crisp at home." },
      { property: "og:title", content: "Journal — Chakri House" },
      { property: "og:description", content: "Stories from our kitchen: serving ideas, snack traditions and more." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Journal", item: "/journal" },
          ],
        }),
      },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <section className="container-site pb-24 pt-8 md:pt-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Journal</span></nav>
      <div className="mt-8"><SectionHeading headingTag="h1" eyebrow="Journal" title="Stories from Our Kitchen" intro="Serving ideas, little traditions and notes from where our snacks are made." /></div>
      <div className="mt-12"><ArticleCards /></div>
    </section>
  );
}
