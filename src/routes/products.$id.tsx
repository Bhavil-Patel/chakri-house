import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Phone,
  Minus,
  Plus,
} from "lucide-react";
import {
  PRODUCTS,
  formatINR,
  orderMessage,
  canonicalUrl,
  SITE_URL,
  type Flavour,
} from "@/lib/site";
import { btn, CallButton } from "@/components/site/Buttons";
import { OrderCTA } from "@/components/site/Sections";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return {};
    const pageUrl = canonicalUrl(`/products/${product.id}`);
    const metaTitle = `${product.name} (${product.pack}) — Buy Online | Chakri House`;
    const metaDescription = `Buy fresh ${product.name} (${product.pack}) online for ₹${product.price}. ${product.description} Handcrafted in 100% pure groundnut oil with zero preservatives. Order on WhatsApp.`;

    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: pageUrl },
        {
          property: "og:image",
          content: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaTitle },
        { name: "twitter:description", content: metaDescription },
        {
          name: "twitter:image",
          content: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
        },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${pageUrl}#product`,
            name: product.name,
            description: product.description,
            image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
            sku: `CH-${product.id.toUpperCase()}`,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "Chakri House",
            },
            offers: {
              "@type": "Offer",
              price: product.price.toString(),
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: pageUrl,
              itemCondition: "https://schema.org/NewCondition",
              seller: {
                "@type": "FoodEstablishment",
                name: "Chakri House",
                telephone: "+919979961576",
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Our Specialties",
                item: canonicalUrl("/#products"),
              },
              { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
            ],
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [flavour, setFlavour] = useState<Flavour | undefined>(product.flavours[0]);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <article className="container-site pb-16 pt-8 md:pt-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/" hash="products" className="hover:text-primary">
            Our Specialties
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-4">
          <Link
            to="/"
            hash="products"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" /> Back to Specialties
          </Link>
        </div>

        {/* Product Details Grid */}
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          {/* Product Media */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/30">
              <img
                src={product.image}
                alt={`${product.name} (${product.pack}) — Authentic homemade Gujarati snack by Chakri House`}
                width={816}
                height={816}
                fetchPriority="high"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-xl bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                100% Pure Groundnut Oil
              </span>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prepared fresh to order in small batches. Images are representative of packaging and
              texture.
            </p>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sage px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5 text-saffron" /> {product.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

            {/* Price & Pack */}
            <div className="mt-6 flex items-baseline gap-3 border-y border-border py-4">
              <span className="text-3xl font-extrabold text-primary">
                {formatINR(product.price)}
              </span>
              <span className="text-base font-medium text-muted-foreground">
                / {product.pack} pack
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary-soft">
                <CheckCircle2 className="size-4 text-primary" /> Made Fresh to Order
              </span>
            </div>

            {/* Flavours Selector */}
            {product.flavours.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">Select Flavour:</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.flavours.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFlavour(f)}
                      className={cn(
                        "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
                        flavour === f
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary",
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Quantity:</p>
                <div className="mt-2 inline-flex items-center rounded-xl border border-border bg-card">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid size-11 place-items-center text-foreground hover:bg-sage rounded-l-xl transition-colors"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-foreground">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="grid size-11 place-items-center text-foreground hover:bg-sage rounded-r-xl transition-colors"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <span className="text-xs text-muted-foreground">Total: </span>
                <span className="text-xl font-bold text-primary">
                  {formatINR(product.price * qty)}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/919979961576?text=${encodeURIComponent(orderMessage(product, qty, flavour))}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btn.base, btn.whatsapp, "flex-1 text-base shadow-sm")}
              >
                <MessageCircle className="size-5" /> Order on WhatsApp
              </a>
              <CallButton variant="outline" className="px-5">
                <Phone className="size-4" /> Call to Order
              </CallButton>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-sage/50 p-4 sm:p-5">
              {product.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <ShieldCheck className="size-4 shrink-0 text-primary" />
                  <span className="text-xs font-semibold text-primary">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Product Specifications */}
        <section className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            Product Specifications & Details
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Ingredients
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {product.ingredients}
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Cooking Medium
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                100% Pure Groundnut Oil (Singtel). Strictly no palm oil, dalda, or reused oil.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pack Size & Weight
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {product.pack} net weight per pack. Sealed for freshness.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Shelf Life
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {product.shelfLife}. Made fresh for every dispatch.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Storage Instructions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {product.storage}
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/50 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Serving Suggestion
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                {product.servingSuggestion}
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                More From Our Kitchen
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">
                Explore More Traditional Farsan
              </h2>
            </div>
            <Link
              to="/"
              hash="products"
              className={cn(btn.base, btn.outline, "self-start sm:self-auto text-sm")}
            >
              View All Snacks
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {relatedProducts.map((rel) => (
              <article
                key={rel.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              >
                <Link to="/products/$id" params={{ id: rel.id }} className="block overflow-hidden">
                  <img
                    src={rel.image}
                    alt={`${rel.name} — Authentic Gujarati snack`}
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-sans text-base font-semibold leading-snug">
                    <Link to="/products/$id" params={{ id: rel.id }} className="hover:text-primary">
                      {rel.name}
                    </Link>
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-base font-bold text-primary">{formatINR(rel.price)}</span>
                    <span className="text-xs text-muted-foreground">/ {rel.pack}</span>
                  </div>
                  <Link
                    to="/products/$id"
                    params={{ id: rel.id }}
                    className={cn(btn.base, btn.outline, "mt-4 w-full py-2 text-xs")}
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>

      <OrderCTA />
    </>
  );
}
