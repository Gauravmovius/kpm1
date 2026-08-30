import { prisma } from "@/lib/db";

async function getStats() {
  const [totalRooms, beds, leads, bookings] = await Promise.all([
    prisma.room.count(),
    prisma.bed.groupBy({ by: ["status"], _count: true }),
    prisma.lead.count({ where: { status: "NEW" } }),
    prisma.booking.count({ where: { status: "PENDING" } }),
  ]);

  const totalBeds = beds.reduce((sum, b) => sum + b._count, 0);
  const occupied = beds.find((b) => b.status === "OCCUPIED")?._count ?? 0;
  const available = beds.find((b) => b.status === "AVAILABLE")?._count ?? 0;
  const occupancyRate = totalBeds > 0 ? Math.round((occupied / totalBeds) * 100) : 0;

  return { totalRooms, totalBeds, occupied, available, occupancyRate, newLeads: leads, pendingBookings: bookings };
}

const CARD_STYLE =
  "rounded-2xl border border-black/5 bg-white p-5 shadow-sm";

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const cards = [
    { label: "Total Rooms", value: stats.totalRooms },
    { label: "Total Beds", value: stats.totalBeds },
    { label: "Occupied Beds", value: stats.occupied },
    { label: "Available Beds", value: stats.available },
    { label: "Occupancy Rate", value: `${stats.occupancyRate}%` },
    { label: "New Leads", value: stats.newLeads },
    { label: "Pending Bookings", value: stats.pendingBookings },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#1C1C1C]">Dashboard</h1>
      <p className="mt-1 text-sm text-[#777777]">Overview of your property performance.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className={CARD_STYLE}>
            <div className="text-xs font-medium uppercase tracking-wide text-[#777777]">
              {c.label}
            </div>
            <div className="mt-2 text-2xl font-semibold text-[#1C1C1C]">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
