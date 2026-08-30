import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ShieldCheck } from "lucide-react";
import { images, brand } from "@/lib/site-data";
import { formatINR } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src={images.heroBuilding}
          alt="Sri Matha PG for Girls building exterior"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" />
          Yelahanka &nbsp;•&nbsp; PG for Girls
        </div>

        <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          A Safe, Comfortable
          <br />
          Home Away From Home.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
          {brand.tagline}. Opposite BMSIT College, Yelahanka — starting at{" "}
          <span className="font-semibold text-gold">{formatINR(brand.startingPrice)}</span>/month.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/#enquiry"
            className="group inline-flex items-center gap-1.5 rounded-full bg-magenta px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
          >
            Check Availability
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/50 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
