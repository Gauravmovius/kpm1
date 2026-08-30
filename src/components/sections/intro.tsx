import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { images, trustPoints } from "@/lib/site-data";

export function Intro() {
  return (
    <section id="safety" className="grid grid-cols-1 lg:grid-cols-2">
      <Reveal className="relative aspect-[4/3] lg:aspect-auto">
        <Image
          src={images.safety}
          alt="Secure, well-lit corridor at Sri Matha PG for Girls"
          fill
          className="object-cover"
        />
      </Reveal>

      <div className="flex flex-col justify-center bg-cream px-6 py-24 lg:px-20 lg:py-0">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple">
          Safety First
        </span>
        <h2 className="mt-6 max-w-md font-display text-3xl leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
          Your safety and comfort, our top priority.
        </h2>
        <p className="mt-7 max-w-sm leading-relaxed text-ink-soft">
          We know parents worry about safety and residents want comfort. Sri
          Matha PG for Girls is built around both — a monitored, secure
          environment with a front desk team on duty round the clock.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
          {trustPoints.map((t) => (
            <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
