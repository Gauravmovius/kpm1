"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  BedDouble,
  DoorClosed,
  Sparkles,
  Images,
  Users,
  CalendarClock,
  ReceiptText,
  Star,
  BarChart3,
  Settings,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/property", label: "Property", icon: Building2 },
  { href: "/admin/rooms", label: "Rooms", icon: DoorClosed },
  { href: "/admin/beds", label: "Beds", icon: BedDouble },
  { href: "/admin/amenities", label: "Amenities", icon: Sparkles },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/visits", label: "Visits", icon: CalendarClock },
  { href: "/admin/bookings", label: "Bookings", icon: ReceiptText },
  { href: "/admin/reviews", label: "Reviews", icon: Star },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-black/5 bg-white lg:flex lg:flex-col">
      <div className="flex h-16 items-center px-6">
        <span className="font-display text-lg font-semibold tracking-tight text-[#1C1C1C]">
          URBANNEST
        </span>
      </div>
      <nav className="flex-1 space-y-0.5 px-3 py-2">
        {NAV.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active
                  ? "bg-[#1C1C1C] text-white"
                  : "text-[#777777] hover:bg-black/5 hover:text-[#1C1C1C]"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
