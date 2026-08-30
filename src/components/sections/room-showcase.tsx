import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { roomTypes, brand } from "@/lib/site-data";
import { formatINR } from "@/lib/utils";

export function RoomShowcase() {
  return (
    <section id="rooms" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple">
            Room Types
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
            Choose the space that fits your life
          </h2>
          <p className="mt-4 text-ink-soft">
            Starting from{" "}
            <span className="font-semibold text-navy">{formatINR(brand.startingPrice)}</span>/month
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {roomTypes.map((room, i) => (
            <Reveal key={room.slug} delay={i * 0.08}>
              <div
                className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div>
                  <span className="font-display text-sm tracking-[0.2em] text-teal">
                    {room.occupancy}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-navy sm:text-4xl">
                    {room.name}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                    {room.description}
                  </p>
                  <p className="mt-4 max-w-md text-sm text-ink-soft">
                    {room.features.join(" · ")}
                  </p>
                  <a
                    href="/#enquiry"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline decoration-magenta underline-offset-4"
                  >
                    Enquire now
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
