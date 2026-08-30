import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("admin123", 10);
  await prisma.user.upsert({
    where: { email: "admin@urbannest.in" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@urbannest.in",
      passwordHash,
      role: "ADMIN",
    },
  });

  const property = await prisma.property.upsert({
    where: { id: "urbannest-koramangala" },
    update: {},
    create: {
      id: "urbannest-koramangala",
      name: "UrbanNest Premium PG",
      description:
        "Premium co-living in the heart of Koramangala, Bangalore, with fully furnished rooms, high-speed WiFi, housekeeping and everything you need for comfortable living.",
      address: "80 Feet Road, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560034",
      latitude: 12.9352,
      longitude: 77.6146,
      phone: "+91 98450 12345",
      whatsapp: "919845012345",
      email: "hello@urbannest.in",
      checkInPolicy: "2:00 PM",
      checkOutPolicy: "11:00 AM",
      minimumStay: "3 months",
      noticePeriod: "30 days",
      securityDeposit: "1 month rent",
      foodAvailable: true,
      houseRules: "No smoking indoors. Quiet hours after 11 PM.",
      rating: 4.8,
    },
  });

  const roomTypesData = [
    { slug: "single-room", name: "Single Room", occupancy: 1, monthlyRent: 18000, securityDeposit: 18000, roomSize: "140 sq. ft.", ac: true },
    { slug: "double-sharing", name: "2 Sharing", occupancy: 2, monthlyRent: 12000, securityDeposit: 12000, roomSize: "180 sq. ft.", ac: true },
    { slug: "triple-sharing", name: "3 Sharing", occupancy: 3, monthlyRent: 9000, securityDeposit: 9000, roomSize: "220 sq. ft.", ac: false },
  ];

  for (const [i, rt] of roomTypesData.entries()) {
    const roomType = await prisma.roomType.upsert({
      where: { slug: rt.slug },
      update: {},
      create: {
        propertyId: property.id,
        slug: rt.slug,
        name: rt.name,
        occupancy: rt.occupancy,
        monthlyRent: rt.monthlyRent,
        securityDeposit: rt.securityDeposit,
        maintenance: 500,
        roomSize: rt.roomSize,
        ac: rt.ac,
        attachedBathroom: true,
        balcony: i === 0,
        description: `Comfortable ${rt.name.toLowerCase()} designed for modern living.`,
        featured: i === 1,
        displayOrder: i,
      },
    });

    for (let r = 1; r <= 3; r++) {
      const room = await prisma.room.upsert({
        where: { roomTypeId_number: { roomTypeId: roomType.id, number: `${100 + i * 10 + r}` } },
        update: {},
        create: {
          roomTypeId: roomType.id,
          number: `${100 + i * 10 + r}`,
          floor: `${i + 1}`,
          status: "AVAILABLE",
        },
      });

      const bedLabels = "ABCD".slice(0, rt.occupancy).split("");
      for (const [idx, label] of bedLabels.entries()) {
        await prisma.bed.upsert({
          where: { roomId_label: { roomId: room.id, label } },
          update: {},
          create: {
            roomId: room.id,
            label,
            status: r === 1 && idx === 0 ? "OCCUPIED" : "AVAILABLE",
          },
        });
      }
    }
  }

  const amenities = [
    "Wi-Fi", "CCTV", "Power Backup", "Housekeeping", "Laundry",
    "Food", "Parking", "Hot Water", "TV", "Refrigerator", "Gym",
  ];
  for (const [i, label] of amenities.entries()) {
    await prisma.amenity.create({
      data: { propertyId: property.id, icon: label.toLowerCase().replace(/\s/g, "-"), label, displayOrder: i },
    });
  }

  await prisma.review.createMany({
    data: [
      { propertyId: property.id, name: "Ananya Rao", role: "Product Designer", rating: 5, quote: "UrbanNest changed how I think about PGs.", published: true, featured: true },
      { propertyId: property.id, name: "Karthik Iyer", role: "Software Engineer", rating: 5, quote: "Fast WiFi, spotless rooms, great food.", published: true },
      { propertyId: property.id, name: "Meera Nair", role: "MBA Student", rating: 4, quote: "Great value for a triple-sharing room near campus.", published: true },
    ],
    skipDuplicates: true,
  });

  await prisma.settings.upsert({
    where: { propertyId: property.id },
    update: {},
    create: { propertyId: property.id, whatsappNumber: "919845012345", metaTitle: "UrbanNest Premium PG | Koramangala, Bangalore" },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
