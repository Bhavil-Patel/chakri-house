import butterChakari from "@/assets/butter-chakari.png";
import masalaPuri from "@/assets/masala-puri.png";
import methiPuri from "@/assets/methi-puri.png";
import farsiMendaPuri from "@/assets/farsi-menda-puri.png";
import tikhaGathiya from "@/assets/tikha-gathiya.png";
import makaiPauvaChevdo from "@/assets/makai-pauva-chevdo.png";
import mamraPauvaChevdo from "@/assets/mamra-pauva-chevdo.png";
import naylonPauvaChevdo from "@/assets/naylon-pauva-chevdo.png";
import jiniSev from "@/assets/jini-sev.png";
import nylonBananaWafers from "@/assets/nylon-banana-wafers.png";
import nylonMasalaBananaWafers from "@/assets/nylon-masala-banana-wafers.png";
import livePotatoChips from "@/assets/live-potato-chips.png";
import chips from "@/assets/chips.jpg";
import kitchen from "@/assets/kitchen.jpg";
import hero from "@/assets/hero.jpg";

/* ---------- Contact settings: single source of truth for every Call / WhatsApp button ---------- */
// International format, digits only (country code + number, no "+").
export const WHATSAPP_NUMBER = "919979961576";
export const PHONE_NUMBER = "919979961576";

export const isConfigured = (n: string) => /^\d{8,15}$/.test(n);

export const DEFAULT_WHATSAPP_MESSAGE = "Hi Chakri House, I would like to know more about your snacks.";
export function waLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const num = isConfigured(WHATSAPP_NUMBER) ? WHATSAPP_NUMBER : "";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
export const telLink = () => `tel:+${isConfigured(PHONE_NUMBER) ? PHONE_NUMBER : ""}`;

export const FLAVOURS = ["Plain", "Salted", "Mari + Salt", "Red Chilli"] as const;
export type Flavour = (typeof FLAVOURS)[number];

export type Product = {
  id: string;
  name: string;
  price: number;
  pack: string;
  description: string;
  image: string;
  /** Only list flavours the owner has confirmed for this product. Empty = no selector. */
  flavours: Flavour[];
};

export const PRODUCTS: Product[] = [
  { id: "butter-chakari", name: "P/M Butter Chakari", price: 100, pack: "250g", image: butterChakari, flavours: [], description: "Golden spirals with a rich, buttery crunch." },
  { id: "masala-puri", name: "Masala Puri", price: 120, pack: "250g", image: masalaPuri, flavours: [], description: "Crisp puris seasoned with warm masala." },
  { id: "methi-puri", name: "Methi Puri", price: 120, pack: "250g", image: methiPuri, flavours: [], description: "Crisp puris with the gentle bitterness of methi." },
  { id: "farsi-menda-puri", name: "Farsi Menda Puri", price: 140, pack: "250g", image: farsiMendaPuri, flavours: [], description: "Flaky, layered puris made for teatime." },
  { id: "tikha-gathiya", name: "Tikha Gathiya", price: 120, pack: "250g", image: tikhaGathiya, flavours: [], description: "Spiced gathiya with a bold, peppery bite." },
  { id: "makai-pauva-chevdo", name: "Makai Pauva Chevdo", price: 140, pack: "250g", image: makaiPauvaChevdo, flavours: [], description: "A crunchy mix built on corn flakes and pauva." },
  { id: "mamra-pauva-chevdo", name: "Mamra Pauva Chevdo", price: 100, pack: "250g", image: mamraPauvaChevdo, flavours: [], description: "Light puffed rice and pauva, lightly tempered." },
  { id: "naylon-pauva-chevdo", name: "Naylon Pauva Chevdo", price: 110, pack: "250g", image: naylonPauvaChevdo, flavours: [], description: "Thin, feather-light pauva chevdo." },
  { id: "jini-sev", name: "Jini Sev", price: 120, pack: "250g", image: jiniSev, flavours: [], description: "Fine, delicate sev with a melt-away crunch." },
  { id: "nylon-banana-wafers", name: "Nylon Banana Wafers", price: 100, pack: "200g", image: nylonBananaWafers, flavours: [], description: "Paper-thin banana wafers, crisp and golden." },
  { id: "nylon-masala-banana-wafers", name: "Nylon Masala Banana Wafers", price: 100, pack: "200g", image: nylonMasalaBananaWafers, flavours: [], description: "Crispy banana wafers tossed in a flavorful blend of aromatic spices." },
  { id: "live-potato-chips", name: "Live Potato Chips", price: 100, pack: "200g", image: livePotatoChips, flavours: [], description: "Thin potato chips with a clean, simple crunch." },
];

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function orderMessage(p: Product, qty = 1, flavour?: string) {
  return [
    "Hello Chakri House! I would like to order:",
    `Product: ${p.name}`,
    `Pack size: ${p.pack}`,
    `Price: ${formatINR(p.price)}`,
    flavour ? `Flavour: ${flavour}` : null,
    `Quantity: ${qty} pack${qty > 1 ? "s" : ""}`,
    `Total Amount: ${formatINR(p.price * qty)}`,
    `Address: `,
    "Please confirm availability and delivery or pickup details.",
  ].filter(Boolean).join("\n");
}

/* ---------- Why Chakari House? (Brand Promises / Quality Pillars) ---------- */
export type QualityFeature = {
  id: string;
  title: string;
  description: string;
  iconName: "droplets" | "mortar" | "soup" | "sparkles";
  tone: "sage" | "peach";
};

export const WHY_CHAKARI_HOUSE_EYEBROW = "MADE FRESH, MADE WITH CARE";
export const WHY_CHAKARI_HOUSE_TITLE = "Why Chakari House?";
export const WHY_CHAKARI_HOUSE_SUBTITLE = "Homemade goodness, prepared fresh with ingredients you can trust.";

export const WHY_CHAKARI_HOUSE_FEATURES: QualityFeature[] = [
  {
    id: "pure-oil",
    iconName: "droplets",
    tone: "sage",
    title: "Pure Oil",
    description: "100% pure groundnut oil. No palm oil, dalda, or reused oil.",
  },
  {
    id: "fresh-and-hygienic",
    iconName: "mortar",
    tone: "peach",
    title: "Fresh & Hygienic",
    description: "Fresh ingredients, pure spices, and hygienic preparation.",
  },
  {
    id: "made-fresh-to-order",
    iconName: "soup",
    tone: "sage",
    title: "Freshly Made",
    description: "Prepared to order for fresh, crispy, homemade nasta.",
  },
  {
    id: "nothing-artificial",
    iconName: "sparkles",
    tone: "peach",
    title: "Nothing Artificial",
    description: "No preservatives, artificial colors, or synthetic flavors.",
  },
];

/* ---------- Festivals (editable editorial content) ---------- */
export const FESTIVALS = [
  { id: "diwali", title: "Diwali", tone: "bg-saffron", text: "Lamps, sweets and full snack plates for every guest who visits." },
  { id: "navratri", title: "Navratri", tone: "bg-terracotta", text: "Nine nights of garba, and something crunchy waiting at home." },
  { id: "holi", title: "Holi", tone: "bg-primary-soft", text: "Colours outside, a shared bowl of chevdo inside." },
  { id: "rakshabandhan", title: "Raksha Bandhan", tone: "bg-beige", text: "A small homemade treat to share between siblings." },
];

/* ---------- Journal (DRAFTS — awaiting owner approval) ---------- */
export type Article = { slug: string; title: string; summary: string; image: string; body: string[] };
export const ARTICLES: Article[] = [
  {
    slug: "the-teatime-plate",
    title: "Building the Perfect Teatime Plate",
    summary: "A few simple ideas for pairing crunchy snacks with your evening chai.",
    image: hero,
    body: [
      "Evening chai feels complete with something crisp on the side. A small plate with two or three textures — a spiral of chakari, a few puris and a spoon of chevdo — keeps things interesting.",
      "Serve snacks in small bowls rather than one large plate, so everyone can reach their favourite. Keep the plate small and refill often; it stays crisp and feels more generous.",
    ],
  },
  {
    slug: "snacks-for-guests",
    title: "Simple Snack Ideas for Festival Guests",
    summary: "Easy ways to set out homemade snacks when family drops in.",
    image: kitchen,
    body: [
      "Festival visits often come unannounced. Keeping a couple of sealed packs ready means you always have something to offer.",
      "Pair one mild snack, such as Mamra Pauva Chevdo, with one spicier option like Thikha Gathiya, so there is something for every taste.",
    ],
  },
  {
    slug: "keeping-snacks-crisp",
    title: "Keeping Your Snacks Crisp at Home",
    summary: "Small storage habits that help your snacks stay crunchy.",
    image: chips,
    body: [
      "Moisture is the enemy of crunch. Once opened, move snacks into an airtight container and keep them away from the stove.",
      "Use a dry spoon when serving, and close the lid soon after. These small habits go a long way.",
    ],
  },
];

export { hero, kitchen };
