import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
            See yourself living here.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 6) * 0.06}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                {img.category}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
