import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleCards, SectionHeading } from "@/components/site/Sections";
import { canonicalUrl, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal & Snack Stories — Chakri House Gujarati Farsan" },
      {
        name: "description",
        content:
          "Stories and traditions from our kitchen: Gujarati farsan traditions, teatime pairing ideas, and tips to keep homemade snacks crisp at home.",
      },
      { property: "og:title", content: "Journal & Snack Stories — Chakri House Gujarati Farsan" },
      {
        property: "og:description",
        content:
          "Stories from our kitchen: serving ideas, Gujarati snack traditions, and keeping snacks crisp at home.",
      },
      { property: "og:url", content: canonicalUrl("/journal") },
      { property: "og:image", content: `${SITE_URL}/favicon.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/journal") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: "Journal", item: canonicalUrl("/journal") },
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
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>{" "}
        / <span className="text-foreground">Journal</span>
      </nav>
      <div className="mt-8">
        <SectionHeading
          headingTag="h1"
          eyebrow="Journal"
          title="Stories from Our Kitchen"
          intro="Serving ideas, little traditions and notes from where our snacks are made."
        />
      </div>
      <div className="mt-12">
        <ArticleCards />
      </div>
    </section>
  );
}
