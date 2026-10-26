import { cn } from "@/lib/utils";
import {
  WHY_CHAKARI_HOUSE_EYEBROW,
  WHY_CHAKARI_HOUSE_FEATURES,
  WHY_CHAKARI_HOUSE_SUBTITLE,
  WHY_CHAKARI_HOUSE_TITLE,
} from "@/lib/site";
import leafDivider from "@/assets/leaf-divider.svg";
import { Droplets, Soup, Sparkles } from "lucide-react";

function MortarPestleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 13.5 L19.2 7.2 C19.9 6.3 21.2 6.1 22.1 6.8 C22.9 7.6 23 8.9 22.2 9.7 L17.5 14" />
      <path d="M11 13.5 C9 8 5.8 5 7.5 3.5 C10.8 3.5 13.5 8 12.2 13.5" />
      <path d="M9.5 9.5 C10.2 7 9.5 5 7.5 3.5" />
      <path d="M12 13.5 C13.5 11 15.8 9.5 16.8 10 C16.8 11.8 14.8 13.2 12 13.5" />
      <path d="M4.5 14.5 C4.5 13.7 23.5 13.7 23.5 14.5 C23.5 15.3 4.5 15.3 4.5 14.5 Z" />
      <path d="M5 15 C5 20.8 9.2 23.2 11.8 23.8 L11 25.5 H17 L16.2 23.8 C18.8 23.2 23 20.8 23 15" />
    </svg>
  );
}

const ICON_MAP = {
  droplets: Droplets,
  mortar: MortarPestleIcon,
  soup: Soup,
  sparkles: Sparkles,
} as const;

export function WhyChakriHouse() {
  return (
    <section
      aria-labelledby="why-chakari-house-heading"
      className="reveal w-full py-16 md:py-24"
      style={{ backgroundColor: "color-mix(in oklab, var(--color-sage) 60%, transparent)" }}
    >
      <div className="container-site">
        {/* Centered Header */}
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#133F2B]">
            {WHY_CHAKARI_HOUSE_EYEBROW}
          </p>

          {/* Botanical leaf motif divider */}
          <div className="my-3.5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-[1px] w-12 sm:w-16 bg-[#133F2B]/35" />
            <img src={leafDivider} alt="" className="h-4.5 w-auto" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#133F2B]/35" />
          </div>

          <h2
            id="why-chakari-house-heading"
            className="font-display text-3xl font-semibold tracking-tight text-[#133F2B] sm:text-4xl md:text-[46px] lg:text-[50px]"
          >
            {WHY_CHAKARI_HOUSE_TITLE}
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#133F2B]/80">
            {WHY_CHAKARI_HOUSE_SUBTITLE}
          </p>
        </div>

        {/* 4 Crisp White Feature Cards */}
        <div className="relative mt-12 grid grid-cols-1 gap-4 min-[361px]:grid-cols-2 min-[361px]:gap-3 sm:gap-6 lg:grid-cols-4 md:mt-14">
          {WHY_CHAKARI_HOUSE_FEATURES.map((item, index) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <article
                key={item.id}
                className="group relative flex flex-col items-center justify-between rounded-[2rem] bg-white p-6 px-4 min-[361px]:p-5 min-[361px]:px-1.5 sm:p-8 sm:px-6 md:py-11 md:px-7 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-8px_rgba(19,63,43,0.18)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col items-center">
                  {/* Circular badge */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        "grid size-18 min-[361px]:size-15 sm:size-20 place-items-center rounded-full transition-transform duration-300 group-hover:scale-105",
                        item.tone === "sage"
                          ? "bg-[#dcefe4] text-[#133F2B]"
                          : "bg-[#fae7db] text-[#c06847]",
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="size-6.5" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg min-[361px]:text-base sm:text-[22px] font-semibold leading-snug text-[#133F2B]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#455c50] max-w-[260px] min-[361px]:max-w-[210px] sm:max-w-none">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent indicator bar */}
                <span
                  className={cn(
                    "mt-8 inline-block h-1 w-9 rounded-full transition-all duration-300 group-hover:w-12",
                    item.tone === "sage" ? "bg-[#133F2B]" : "bg-[#c06847]",
                  )}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
