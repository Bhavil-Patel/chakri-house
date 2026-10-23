import * as Dialog from "@radix-ui/react-dialog";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatINR, orderMessage, PRODUCTS, type Product } from "@/lib/site";
import { WhatsAppButton, btn } from "./Buttons";

export function ProductGrid() {
  const [active, setActive] = useState<Product | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <article
            key={p.id}
            className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/25"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <button onClick={() => setActive(p)} className="block overflow-hidden text-left" aria-label={`View ${p.name}`}>
              <img src={p.image} alt={`Representative image of ${p.name}`} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <h3 className="font-sans text-base font-semibold leading-snug sm:text-lg">{p.name}</h3>
              <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{p.description}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">{formatINR(p.price)}</span>
                <span className="text-sm text-muted-foreground">/ {p.pack}</span>
              </div>
              <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
                <button onClick={() => setActive(p)} className={cn(btn.base, btn.outline, "flex-1 px-3 text-sm")}>View Details</button>
                <WhatsAppButton message={orderMessage(p)} variant="primary" className="flex-1 px-3 text-sm">Order</WhatsAppButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      <ProductDialog product={active} onClose={() => setActive(null)} />
    </>
  );
}

function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [flavour, setFlavour] = useState<string>();
  return (
    <Dialog.Root open={!!product} onOpenChange={(o) => { if (!o) { onClose(); setQty(1); setFlavour(undefined); } }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-primary-deep/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        {product && (
          <Dialog.Content className="fixed inset-x-3 bottom-3 top-auto z-50 max-h-[90dvh] overflow-y-auto rounded-3xl bg-card shadow-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-6 md:inset-auto md:left-1/2 md:top-1/2 md:w-[min(860px,92vw)] md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="grid md:grid-cols-2">
              <img src={product.image} alt={`Representative image of ${product.name}`} className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full" />
              <div className="p-6 md:p-8">
                <Dialog.Title className="font-display text-3xl font-semibold text-primary">{product.name}</Dialog.Title>
                <Dialog.Description className="mt-2 text-muted-foreground">{product.description}</Dialog.Description>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{formatINR(product.price)}</span>
                  <span className="text-muted-foreground">/ {product.pack}</span>
                </div>
                {product.flavours.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold">Flavour</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.flavours.map((f) => (
                        <button key={f} onClick={() => setFlavour(f)} className={cn("min-h-11 rounded-full border px-4 text-sm", flavour === f ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary")}>{f}</button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-6">
                  <p className="text-sm font-semibold">Quantity</p>
                  <div className="mt-2 inline-flex items-center rounded-xl border border-border">
                    <button aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid size-11 place-items-center"><Minus className="size-4" /></button>
                    <span className="w-10 text-center font-semibold">{qty}</span>
                    <button aria-label="Increase" onClick={() => setQty((q) => q + 1)} className="grid size-11 place-items-center"><Plus className="size-4" /></button>
                  </div>
                </div>
                <WhatsAppButton message={orderMessage(product, qty, flavour)} className="mt-8 w-full" />
                <p className="mt-3 text-xs text-muted-foreground">Image is representative. We'll confirm availability on WhatsApp.</p>
              </div>
            </div>
            <Dialog.Close aria-label="Close" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-card/90 text-foreground hover:bg-sage"><X className="size-5" /></Dialog.Close>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
