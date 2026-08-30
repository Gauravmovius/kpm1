import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { amenities, images } from "@/lib/site-data";

export function Amenities() {
  return (
    <section id="amenities" className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg lg:order-1">
          <Image src={images.commonArea} alt="Sri Matha PG common area" fill className="object-cover" />
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amenities
          </span>
          <h2 className="mt-4 max-w-md font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {amenities.map((a) => (
              <li key={a.label} className="flex items-center gap-2 text-sm text-white/75">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {a.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
