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

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Chakri House, I would like to know more about your snacks.";
export function waLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const num = isConfigured(WHATSAPP_NUMBER) ? WHATSAPP_NUMBER : "";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
export const telLink = () => `tel:+${isConfigured(PHONE_NUMBER) ? PHONE_NUMBER : ""}`;

/* ---------- Site URL configuration for canonical URLs and SEO ---------- */
export const SITE_URL = (
  typeof import.meta !== "undefined" && import.meta.env?.["VITE_SITE_URL"]
    ? String(import.meta.env["VITE_SITE_URL"])
    : "https://chakrihouse.com"
).replace(/\/+$/, "");

export function canonicalUrl(path: string = ""): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export const FLAVOURS = ["Plain", "Salted", "Mari + Salt", "Red Chilli"] as const;
export type Flavour = (typeof FLAVOURS)[number];

export type Product = {
  id: string;
  name: string;
  price: number;
  pack: string;
  description: string;
  image: string;
  category: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  servingSuggestion: string;
  highlights: string[];
  /** Only list flavours the owner has confirmed for this product. Empty = no selector. */
  flavours: Flavour[];
};

export const PRODUCTS: Product[] = [
  {
    id: "butter-chakari",
    name: "P/M Butter Chakari",
    price: 100,
    pack: "200g",
    image: butterChakari,
    category: "Chakri & Spirals",
    flavours: [],
    description: "Golden spirals with a rich, buttery crunch and warm traditional Gujarati spices.",
    ingredients:
      "Rice flour, roasted gram flour, pure butter, sesame seeds (til), cumin, ajwain, salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Store in an airtight container in a cool, dry place away from direct sunlight.",
    servingSuggestion: "Serve with hot Gujarati masala chai or as a festive teatime snack.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Prepared with Pure Butter",
      "Zero Preservatives",
      "Freshly Made to Order",
    ],
  },
  {
    id: "masala-puri",
    name: "Masala Puri",
    price: 120,
    pack: "200g",
    image: masalaPuri,
    category: "Puris & Crisps",
    flavours: [],
    description: "Crisp, golden puris seasoned with warm aromatic masala and traditional spices.",
    ingredients:
      "Whole wheat flour, semolina, roasted cumin, red chili, turmeric, ajwain, salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Store in a dry airtight steel dabba or glass jar after opening.",
    servingSuggestion:
      "Pair with morning or evening tea, or enjoy with sweet mango chunda / pickle.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Aromatic Spices",
      "No Palm Oil or Reused Oil",
      "Crispy & Flaky",
    ],
  },
  {
    id: "methi-puri",
    name: "Methi Puri",
    price: 120,
    pack: "200g",
    image: methiPuri,
    category: "Puris & Crisps",
    flavours: [],
    description:
      "Crisp wheat puris delicately seasoned with the subtle herbal bitterness of fresh methi.",
    ingredients:
      "Whole wheat flour, dried fenugreek leaves (kasuri methi), turmeric, red chili, sesame, salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Keep tightly sealed in an airtight container away from moisture.",
    servingSuggestion: "Classic companion for spiced ginger tea or breakfast nasta.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Natural Methi Leaves",
      "Zero Preservatives",
      "Handmade Tradition",
    ],
  },
  {
    id: "farsi-menda-puri",
    name: "Farsi Menda Puri",
    price: 140,
    pack: "200g",
    image: farsiMendaPuri,
    category: "Puris & Crisps",
    flavours: [],
    description:
      "Flaky, melt-in-the-mouth layered puris spiced with cracked black pepper and cumin.",
    ingredients:
      "Refined wheat flour, cracked black pepper (mari), cumin seeds, pure oil for layering, salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Store in an airtight tin to protect its delicate flaky layers.",
    servingSuggestion: "An essential festival favorite for Diwali and family teatimes.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Cracked Black Pepper",
      "Ultra-Flaky Texture",
      "Traditional Gujarati Farsan",
    ],
  },
  {
    id: "tikha-gathiya",
    name: "Tikha Gathiya",
    price: 120,
    pack: "200g",
    image: tikhaGathiya,
    category: "Gathiya & Sev",
    flavours: [],
    description: "Spiced, crunchy gathiya with a bold peppery bite and authentic Gujarati flavor.",
    ingredients:
      "Premium gram flour (besan), freshly ground black pepper, red chili, ajwain, asafoetida (hing), salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Keep sealed in an airtight container to preserve crispness.",
    servingSuggestion: "Enjoy with fresh fried green chilies, papaya sambharo, and hot tea.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Bold Peppery Kick",
      "Pure Besan",
      "Made Fresh to Order",
    ],
  },
  {
    id: "makai-pauva-chevdo",
    name: "Makai Pauva Chevdo",
    price: 140,
    pack: "200g",
    image: makaiPauvaChevdo,
    category: "Chevdo & Poha",
    flavours: [],
    description:
      "A delightfully crunchy snack mix built on golden corn flakes, flattened rice, and peanuts.",
    ingredients:
      "Corn flakes (makai pauva), thin flattened rice (pauva), peanuts, curry leaves, turmeric, mustard seeds, mild spices, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Keep in a sealed container in a cool, dry place.",
    servingSuggestion: "Perfect crunchy munching mix for work desks, travel, and evening snacks.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Crunchy Corn & Poha",
      "Lightly Tempered",
      "Zero Artificial Colors",
    ],
  },
  {
    id: "mamra-pauva-chevdo",
    name: "Mamra Pauva Chevdo",
    price: 100,
    pack: "200g",
    image: mamraPauvaChevdo,
    category: "Chevdo & Poha",
    flavours: [],
    description:
      "Light puffed rice and flattened pauva, delicately tempered with turmeric and peanuts.",
    ingredients:
      "Puffed rice (mamra), flattened rice (pauva), roasted peanuts, curry leaves, green chili, turmeric, mustard seeds, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Seal immediately after use; moisture softens puffed rice.",
    servingSuggestion: "Great light snack for kids and elders alike, guilt-free with tea.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Ultra Light & Digestible",
      "Mildly Spiced",
      "Freshly Tempered",
    ],
  },
  {
    id: "naylon-pauva-chevdo",
    name: "Naylon Pauva Chevdo",
    price: 110,
    pack: "200g",
    image: naylonPauvaChevdo,
    category: "Chevdo & Poha",
    flavours: [],
    description:
      "Thin, feather-light roasted nylon pauva chevdo seasoned with traditional aromatic spices.",
    ingredients:
      "Nylon flattened rice (pauva), peanuts, roasted chana dal, curry leaves, turmeric, sesame seeds, mild seasoning, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Store in a dry airtight container.",
    servingSuggestion: "Wonderful accompaniment with afternoon tea or casual snacking.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Feather-Light Texture",
      "Subtle Gujarati Seasoning",
      "No Palm Oil",
    ],
  },
  {
    id: "jini-sev",
    name: "Jini Sev",
    price: 120,
    pack: "200g",
    image: jiniSev,
    category: "Gathiya & Sev",
    flavours: [],
    description:
      "Fine, delicate golden sev with a melt-away crunch, ideal for garnishing or enjoying solo.",
    ingredients:
      "Fine gram flour (besan), turmeric, hint of black pepper, salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Store in an airtight jar to retain ultra-fine crispness.",
    servingSuggestion: "Sprinkle over sev usal, poha, dahi vada, chaat, or enjoy on its own.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Melt-in-Mouth Texture",
      "Zero Added Colors",
      "Chaat & Teatime Essential",
    ],
  },
  {
    id: "nylon-banana-wafers",
    name: "Nylon Banana Wafers",
    price: 100,
    pack: "200g",
    image: nylonBananaWafers,
    category: "Banana Wafers",
    flavours: [],
    description: "Paper-thin, ultra-crisp golden raw banana wafers lightly salted to perfection.",
    ingredients: "Raw green bananas, rock salt, turmeric, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Seal tightly in an airtight pack or container away from air exposure.",
    servingSuggestion:
      "Enjoy during fasts (farali friendly), movie nights, or alongside evening chai.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Paper-Thin Crunch",
      "Fresh Raw Bananas",
      "Pure Groundnut Oil Fry",
    ],
  },
  {
    id: "nylon-masala-banana-wafers",
    name: "Nylon Masala Banana Wafers",
    price: 100,
    pack: "200g",
    image: nylonMasalaBananaWafers,
    category: "Banana Wafers",
    flavours: [],
    description:
      "Crispy paper-thin banana wafers generously tossed in a flavorful blend of aromatic Gujarati spices.",
    ingredients:
      "Raw green bananas, dry mango powder (amchur), red chili powder, chaat spices, black salt, 100% pure groundnut oil.",
    shelfLife: "45 days from preparation",
    storage: "Keep in an airtight container to keep the spicy coating fresh and wafer crisp.",
    servingSuggestion:
      "The ultimate savory munch for spice lovers; pairs brilliantly with cold drinks or tea.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Tangy Masala Blend",
      "Paper-Thin Crunch",
      "Authentic Recipe",
    ],
  },
  {
    id: "live-potato-chips",
    name: "Live Potato Chips",
    price: 100,
    pack: "200g",
    image: livePotatoChips,
    category: "Potato Chips",
    flavours: [],
    description:
      "Thin, freshly fried potato chips with a clean, satisfying crunch and simple seasoning.",
    ingredients: "Farm-fresh selected potatoes, rock salt, 100% pure groundnut oil.",
    shelfLife: "30 days from preparation",
    storage: "Store in a sealed airtight tin or bag in a cool place.",
    servingSuggestion: "Crisp snack for teatime, travel, or entertaining guests.",
    highlights: [
      "100% Pure Groundnut Oil",
      "Farm-Fresh Potatoes",
      "Clean & Simple Crunch",
      "No Artificial Flavors",
    ],
  },
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
  ]
    .filter(Boolean)
    .join("\n");
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
export const WHY_CHAKARI_HOUSE_SUBTITLE =
  "Homemade goodness, prepared fresh with ingredients you can trust.";

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
  {
    id: "diwali",
    title: "Diwali",
    tone: "bg-saffron",
    text: "Lamps, sweets and full snack plates for every guest who visits.",
  },
  {
    id: "navratri",
    title: "Navratri",
    tone: "bg-terracotta",
    text: "Nine nights of garba, and something crunchy waiting at home.",
  },
  {
    id: "holi",
    title: "Holi",
    tone: "bg-primary-soft",
    text: "Colours outside, a shared bowl of chevdo inside.",
  },
  {
    id: "rakshabandhan",
    title: "Raksha Bandhan",
    tone: "bg-beige",
    text: "A small homemade treat to share between siblings.",
  },
];

/* ---------- Journal (DRAFTS — awaiting owner approval) ---------- */
export type Article = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  body: string[];
};
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
