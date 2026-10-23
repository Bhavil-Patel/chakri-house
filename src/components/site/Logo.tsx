import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

/* Owner-supplied Chakri House logo (transparent PNG). Used everywhere via this single component. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Chakri House home" className={cn("inline-flex shrink-0 items-center", className)}>
      <img
        src={logo}
        alt="Chakri House — Homemade with Love"
        width={720}
        height={507}
        className="h-12 w-auto md:h-16"
      />
    </Link>
  );
}
