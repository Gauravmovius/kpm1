"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { brand } from "@/lib/site-data";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-navy text-white lg:hidden">
      <a
        href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wide"
      >
        <Phone className="h-4 w-4 text-gold" />
        Call
      </a>
      <a
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-white/10 bg-magenta py-3 text-[11px] font-semibold uppercase tracking-wide"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href={brand.mapDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wide"
      >
        <MapPin className="h-4 w-4 text-gold" />
        Directions
      </a>
    </div>
  );
}
