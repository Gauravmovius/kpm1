import { Bell } from "lucide-react";
import type { SessionPayload } from "@/lib/auth";

export function AdminHeader({ session }: { session: SessionPayload }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-black/5 bg-white px-6">
      <div className="text-sm text-[#777777]">
        Welcome back, <span className="font-medium text-[#1C1C1C]">{session.name}</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full p-2 text-[#777777] transition hover:bg-black/5 hover:text-[#1C1C1C]"
        >
          <Bell className="h-4.5 w-4.5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C89B5A]/15 text-xs font-semibold text-[#C89B5A]">
            {session.name.charAt(0).toUpperCase()}
          </div>
          <form action="/admin/logout" method="POST">
            <button type="submit" className="text-xs font-medium text-[#777777] hover:text-[#1C1C1C]">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
