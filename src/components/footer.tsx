import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                {brand.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              {brand.tagline} — a safe, well-run home base in Yelahanka.
            </p>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-magenta px-4 py-2 text-xs font-semibold text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {brand.phones.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-teal" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Location</h4>
            <ul className="mt-5 space-y-1.5 text-sm text-white/60">
              {brand.addressLines.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  {line === brand.addressLines[0] && (
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  )}
                  <span className={line === brand.addressLines[0] ? "" : "pl-6"}>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={brand.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-gold hover:text-white"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {brand.fullName}. All rights reserved.</span>
          <Link href="/admin/login" className="hover:text-gold">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
}
