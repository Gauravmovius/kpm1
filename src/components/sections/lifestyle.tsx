import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { images, foodMenu } from "@/lib/site-data";

export function Lifestyle() {
  return (
    <section id="food" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image src={images.foodSouth} alt="South Indian meal" fill className="object-cover" />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-lg">
            <Image src={images.foodNorth} alt="North Indian meal" fill className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple">
            Food
          </span>
          <h2 className="mt-4 max-w-md font-display text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
            Home-style meals, every day.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
            Fresh, hygienically prepared South and North Indian meals served
            daily — because good food matters when you&apos;re far from home.
          </p>
          <dl className="mt-8 space-y-4">
            {foodMenu.map((m) => (
              <div key={m.meal} className="flex flex-col gap-0.5 border-b border-navy/10 pb-4">
                <dt className="text-sm font-semibold text-navy">{m.meal}</dt>
                <dd className="text-sm text-ink-soft">{m.items}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
