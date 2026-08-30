import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { brand, images } from "@/lib/site-data";

export function Cta() {
  return (
    <section id="enquiry" className="relative flex min-h-[560px] items-center justify-center overflow-hidden py-24">
      <Image src={images.exteriorDay} alt="Sri Matha PG for Girls" fill className="object-cover" />
      <div className="absolute inset-0 bg-navy/80" />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center text-white">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
          Ready to move in?
        </h2>
        <p className="mt-4 text-lg text-white/80">Get in touch and check availability today.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-magenta px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
          >
            WhatsApp Us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white"
          >
            <Phone className="h-4 w-4" />
            {brand.phones[0]}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
