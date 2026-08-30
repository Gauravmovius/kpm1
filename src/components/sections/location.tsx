import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { brand, images, nearbyPlaces } from "@/lib/site-data";

export function Location() {
  return (
    <section id="location" className="bg-teal-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple">
            Location
          </span>
          <h2 className="mt-4 max-w-md font-display text-3xl tracking-tight text-navy sm:text-4xl">
            Right opposite BMSIT College, Yelahanka
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
            {brand.address}
          </p>

          <div className="mt-8 space-y-2 text-sm text-ink-soft">
            {nearbyPlaces.map((n) => (
              <div key={n.label} className="flex items-baseline justify-between">
                <span className="text-navy">{n.label}</span>
                <span>{n.distance}</span>
              </div>
            ))}
          </div>

          <a
            href={brand.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-purple"
          >
            Get Directions
          </a>
        </Reveal>

        <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={images.exteriorDay} alt="Sri Matha PG for Girls, Yelahanka" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
