import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ARTICLES, canonicalUrl, SITE_URL } from "@/lib/site";
import { OrderCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const article = loaderData?.article;
    const pageUrl = canonicalUrl(`/journal/${params.slug}`);
    const imageUrl = article?.image?.startsWith("http")
      ? article.image
      : `${SITE_URL}${article?.image ?? "/favicon.png"}`;

    return {
      meta: [
        { title: `${article?.title ?? "Journal"} — Chakri House` },
        { name: "description", content: article?.summary ?? "" },
        { property: "og:title", content: `${article?.title ?? "Journal"} — Chakri House` },
        { property: "og:description", content: article?.summary ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: pageUrl },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${article?.title ?? "Journal"} — Chakri House` },
        { name: "twitter:description", content: article?.summary ?? "" },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            mainEntityOfPage: pageUrl,
            headline: article?.title,
            description: article?.summary,
            image: imageUrl,
            author: { "@type": "Organization", name: "Chakri House", url: SITE_URL },
            publisher: {
              "@type": "Organization",
              name: "Chakri House",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/favicon.png`,
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Journal", item: canonicalUrl("/journal") },
              { "@type": "ListItem", position: 3, name: article?.title, item: pageUrl },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <article className="container-site max-w-3xl pb-8 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/journal" className="hover:text-primary">
            Journal
          </Link>{" "}
          / <span className="text-foreground">{article.title}</span>
        </nav>
        <Link
          to="/journal"
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to Journal
        </Link>
        <span className="mt-6 block w-fit rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Draft — awaiting approval
        </span>
        <h1 className="text-section mt-4 font-semibold text-primary">{article.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{article.summary}</p>
        <img
          src={article.image}
          alt={`${article.title} — Chakri House authentic snack stories`}
          width={1200}
          height={750}
          className="mt-8 aspect-[16/10] w-full rounded-[2rem] object-cover"
        />
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <OrderCTA />
    </>
  );
}
