import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/header";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-[#F8F7F4]">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader session={session} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
