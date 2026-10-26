import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, PartyPopper, MessageCircle } from "lucide-react";
import { hero, kitchen, canonicalUrl, SITE_URL, PRODUCTS } from "@/lib/site";
import { btn, WhatsAppButton } from "@/components/site/Buttons";
import { ProductGrid } from "@/components/site/Products";
import {
  ArticleCards,
  Eyebrow,
  FestivalCards,
  OrderCTA,
  SectionHeading,
  ArrowRight,
  WhyChakriHouse,
} from "@/components/site/Sections";
import { cn } from "@/lib/utils";
import heroUnderline from "@/assets/hero-underline.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chakri House — Authentic Gujarati Farsan & Homemade Snacks Online" },
      {
        name: "description",
        content:
          "Buy authentic Gujarati farsan, fresh namkeen, butter chakari, and nylon masala banana wafers online. Handcrafted in 100% pure groundnut oil. Order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Chakri House — Authentic Gujarati Farsan & Homemade Snacks Online",
      },
      {
        property: "og:description",
        content:
          "Traditional taste, homemade with love. Pure groundnut oil, zero preservatives, made fresh to order. Discover our snacks.",
      },
      { property: "og:url", content: canonicalUrl("/") },
      { property: "og:image", content: `${SITE_URL}/favicon.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Chakri House Specialties — Authentic Gujarati Farsan",
          description:
            "Freshly made traditional Gujarati farsan, namkeen, wafers, and snack specialties.",
          itemListElement: PRODUCTS.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: p.name,
            url: canonicalUrl(`/products/${p.id}`),
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What cooking oil is used in Chakri House snacks?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "All Chakri House snacks are prepared strictly in 100% pure groundnut oil. We never use palm oil, dalda, or reused oil.",
              },
            },
            {
              "@type": "Question",
              name: "How do I order authentic Gujarati farsan from Chakri House?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Orders can be placed directly through WhatsApp (+91 99799 61576) or by calling us. Choose your preferred snacks and pack sizes, and we confirm availability and delivery details.",
              },
            },
            {
              "@type": "Question",
              name: "Do your farsan and namkeen contain artificial preservatives or colors?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. All our farsan, puris, gathiya, and wafers are made without artificial preservatives, synthetic food colors, or artificial flavorings.",
              },
            },
            {
              "@type": "Question",
              name: "Where does Chakri House deliver?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Chakri House caters to Gujarat as our primary service hub and accepts direct orders for shipment across India.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { icon: Heart, label: "Homemade with Love" },
  { icon: Leaf, label: "Traditional Indian Flavours" },
  { icon: PartyPopper, label: "Snacks for Every Occasion" },
  { icon: MessageCircle, label: "Easy Direct Ordering" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="container-site grid items-center gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-saffron" /> Made with love
          </span>
          <h1 className="text-hero mt-6 font-semibold text-primary">
            A Little Crunch. A Lot of{" "}
            <span className="relative whitespace-nowrap italic text-primary-soft">
              Homemade
              <img
                src={heroUnderline}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 left-0 w-full select-none"
              />
            </span>{" "}
            Love.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] text-muted-foreground">
            Discover the comforting taste of authentic Gujarati farsan and traditional Indian
            snacks, handcrafted in pure groundnut oil and made to be shared with family and friends.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className={cn(btn.base, btn.primary)}>
              Explore Our Snacks <ArrowRight className="size-4" />
            </a>
            <WhatsAppButton variant="outline" />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-[-6%] rounded-full bg-sage" />
          <div className="float-slow absolute -left-2 top-6 size-16 rounded-full bg-saffron md:size-20" />
          <div
            className="float-slow absolute -right-1 bottom-10 size-10 rounded-full bg-terracotta"
            style={{ animationDelay: "3s" }}
          />
          <span className="absolute top-4 -right-6 rotate-[-6deg] rounded-2xl bg-card px-4 py-2 font-hand text-2xl text-primary shadow-sm md:text-3xl z-1">
            Pure ground nut oil!
          </span>
          <img
            src={hero}
            alt="Authentic homemade Gujarati farsan and snacks assortment including butter chakari, puri, and sev"
            width={1200}
            height={1200}
            fetchPriority="high"
            className="relative aspect-square w-full rounded-full object-cover"
          />
          <span className="absolute bottom-4 left-0 rotate-[-6deg] rounded-2xl bg-card px-4 py-2 font-hand text-2xl text-primary shadow-sm md:text-3xl">
            freshly made!
          </span>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-card">
        <div className="container-site grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sage text-primary">
                <h.icon className="size-5" />
              </span>
              <span className="text-sm font-semibold sm:text-[15px]">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="container-site scroll-mt-24 py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Specialties"
          title="Made for Every Munching Moment"
          intro="Explore our range of familiar favourites and irresistible crunch."
        />
        <div className="mt-10">
          <ProductGrid />
        </div>
      </section>

      {/* Why Chakari House? Full width */}
      <WhyChakriHouse />

      {/* Philosophy */}
      <section className="bg-beige/60 py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={kitchen}
              alt="Hands pressing chakri dough in a festive home kitchen"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-primary px-6 py-4 text-primary-foreground md:block">
              <p className="font-display text-lg italic">Traditional Taste.</p>
            </div>
          </div>
          <div>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="text-section mt-3 font-semibold text-primary">
              Simple Ingredients. Familiar Flavours.
            </h2>
            <p className="mt-5 text-[17px] text-muted-foreground">
              Chakri House grew from the snacks we've always loved at home — the ones that fill
              steel dabbas before festivals, travel in bags to relatives and appear beside every cup
              of evening chai.
            </p>
            <p className="mt-4 text-[17px] text-muted-foreground">
              We make them in small batches, the way they were taught to us, so every pack feels
              like something shared from our kitchen to yours.
            </p>
            <a href="#products" className={cn(btn.base, btn.primary, "mt-8")}>
              Discover Our Snacks
            </a>
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="container-site py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Festivals" title="Good Food Brings Everyone Together" />
          <Link to="/festivals" className={cn(btn.base, btn.outline, "self-start")}>
            See Festivals
          </Link>
        </div>
        <div className="mt-10">
          <FestivalCards />
        </div>
      </section>

      {/* Journal */}
      <section className="bg-sage/60 py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Journal" title="Stories Worth Sharing" />
            <Link to="/journal" className={cn(btn.base, btn.outline, "self-start")}>
              Read Journal
            </Link>
          </div>
          <div className="mt-10">
            <ArticleCards />
          </div>
        </div>
      </section>

      <OrderCTA />
    </>
  );
}
