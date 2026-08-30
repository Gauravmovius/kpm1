import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { reviews } from "@/lib/site-data";

export function Reviews() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple">
          Reviews
        </span>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-navy sm:text-4xl">
          Loved by our residents
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1} className="text-center">
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-full">
              <Image src={r.avatar} alt={r.name} fill className="object-cover" />
            </div>
            <p className="mt-5 font-display text-lg leading-snug text-navy">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="mt-4 text-xs uppercase tracking-[0.15em] text-ink-soft">
              {r.name} — {r.role}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
