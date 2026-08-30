import { cn } from "@/lib/utils";

// Deterministic tasteful gradient "photography" placeholder.
// Generates a unique duotone gradient + subtle grid pattern per seed string,
// so each room/gallery card feels distinct without external image assets.

const PALETTES: [string, string][] = [
  ["#1f4d3d", "#c8a24d"],
  ["#2f6b54", "#e4c884"],
  ["#14231f", "#c1613f"],
  ["#3c4a45", "#c8a24d"],
  ["#1f4d3d", "#e4c884"],
  ["#c1613f", "#14231f"],
];

function hashSeed(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function PlaceholderArt({
  seed,
  className,
  label,
}: {
  seed: string;
  className?: string;
  label?: string;
}) {
  const idx = hashSeed(seed) % PALETTES.length;
  const [from, to] = PALETTES[idx];
  const angle = hashSeed(seed + "a") % 360;

  return (
    <div
      className={cn("relative overflow-hidden isolate flex items-end", className)}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from} 0%, ${to} 130%)`,
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20 mix-blend-overlay" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${seed}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      {label && (
        <span className="relative z-10 p-4 font-display text-sm tracking-wide text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
