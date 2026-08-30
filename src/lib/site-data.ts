// Content for Sri Matha PG for Girls — structured so it can later be
// swapped 1:1 for Prisma query results once the admin/database layer is
// connected.

export const brand = {
  name: "SRI MATHA PG",
  fullName: "Sri Matha PG for Girls",
  tagline: "Thoughtfully designed accommodation for students and working women",
  city: "Yelahanka, Bengaluru",
  phones: ["95355 75990", "88674 36869", "78925 75424"],
  whatsapp: "919535575990",
  addressLines: [
    "Opposite BMSIT College",
    "Behind Shell Petrol Bunk, 3rd Cross",
    "Suryavamshi Layout, Doddaballapura Main Road",
    "Yelahanka - 64, Bengaluru",
  ],
  address:
    "Opposite BMSIT College, Behind Shell Petrol Bunk, 3rd Cross, Suryavamshi Layout, Doddaballapura Main Road, Yelahanka - 64, Bengaluru",
  startingPrice: 7000,
  mapEmbedUrl:
    "https://www.google.com/maps?q=BMSIT+College+Yelahanka+Bengaluru&output=embed",
  mapDirectionsUrl: "https://maps.google.com/?q=BMSIT+College,+Yelahanka,+Bengaluru",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Food", href: "/#food" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#enquiry" },
];

// Neutral, PG-appropriate stock photography — standing in for authentic
// property photography until real photos are supplied.
export const images = {
  heroBuilding:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2400&auto=format&fit=crop",
  safety:
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
  singleRoom:
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&auto=format&fit=crop",
  doubleRoom:
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
  tripleRoom:
    "https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=1600&auto=format&fit=crop",
  foodSouth:
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop",
  foodNorth:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop",
  studySpace:
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600&auto=format&fit=crop",
  commonArea:
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
  corridor:
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
  exteriorDay:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
};

export type RoomType = {
  slug: string;
  name: string;
  occupancy: string;
  image: string;
  description: string;
  features: string[];
};

export const roomTypes: RoomType[] = [
  {
    slug: "single-sharing",
    name: "Single Sharing",
    occupancy: "1 resident",
    image: images.singleRoom,
    description: "A private room for residents who want their own space at the end of the day.",
    features: ["Personal storage", "Study table", "Well ventilated", "Locker facility"],
  },
  {
    slug: "double-sharing",
    name: "Double Sharing",
    occupancy: "2 residents",
    image: images.doubleRoom,
    description: "A shared room with individual storage — private enough, social when you want it.",
    features: ["Individual storage", "Study table", "Well ventilated", "Locker facility"],
  },
  {
    slug: "triple-sharing",
    name: "Triple Sharing",
    occupancy: "3 residents",
    image: images.tripleRoom,
    description: "Our most requested option for students — spacious rooms shared with company.",
    features: ["Individual storage", "Well ventilated", "Locker facility", "Housekeeping support"],
  },
];

export const trustPoints = [
  { icon: "clock", label: "24/7 Front Desk" },
  { icon: "shield", label: "CCTV Surveillance" },
  { icon: "zap", label: "Power Backup" },
  { icon: "wifi", label: "High-Speed Wi-Fi" },
];

export const amenities = [
  { icon: "clock", label: "24 Hours Front Desk" },
  { icon: "wifi", label: "High-Speed Wi-Fi" },
  { icon: "zap", label: "Generator / Power Backup" },
  { icon: "cross", label: "Medical Service / Assistance" },
  { icon: "shield", label: "CCTV Surveillance" },
  { icon: "utensils", label: "Hot Food" },
  { icon: "droplet", label: "Hot Water" },
  { icon: "lock", label: "Locker Facility" },
  { icon: "user-check", label: "Security Guards" },
  { icon: "shirt", label: "Housekeeping & Laundry Support" },
];

export const forStudents = [
  "Near BMSIT College",
  "Comfortable study environment",
  "High-speed Wi-Fi",
  "Flexible sharing options",
  "South & North Indian food available",
];

export const forWorkingWomen = [
  "Secure, monitored environment",
  "Comfortable, well-ventilated rooms",
  "High-speed Wi-Fi",
  "Convenient daily living",
  "Housekeeping & laundry support",
];

export const galleryImages = [
  { src: images.heroBuilding, alt: "Sri Matha PG building exterior", category: "Building" },
  { src: images.singleRoom, alt: "Single sharing room", category: "Rooms" },
  { src: images.doubleRoom, alt: "Double sharing room", category: "Rooms" },
  { src: images.studySpace, alt: "Study corner", category: "Study Area" },
  { src: images.commonArea, alt: "Common living area", category: "Common Area" },
  { src: images.foodSouth, alt: "South Indian meal", category: "Food" },
  { src: images.foodNorth, alt: "North Indian meal", category: "Food" },
  { src: images.corridor, alt: "Well-lit corridor", category: "Building" },
  { src: images.tripleRoom, alt: "Triple sharing room", category: "Rooms" },
];

export const nearbyPlaces = [
  { label: "BMSIT College", distance: "Opposite" },
  { label: "Shell Petrol Bunk", distance: "Adjacent" },
  { label: "Doddaballapura Main Road", distance: "On Road" },
  { label: "Yelahanka", distance: "5 min" },
];

export const foodMenu = [
  { meal: "Breakfast", items: "Idli, Dosa, Poha, Upma, Bread & Eggs" },
  { meal: "Lunch", items: "Rice, Sambar, Rasam, Curd, Seasonal Sabzi" },
  { meal: "Snacks", items: "Tea/Coffee with evening snacks" },
  { meal: "Dinner", items: "Chapati, Curry, Rice, Dal" },
];

export const reviews = [
  {
    name: "Priya S.",
    role: "Student, BMSIT",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote:
      "Sri Matha PG feels genuinely safe. The front desk is staffed round the clock and my parents are far more at ease now that I live here.",
  },
  {
    name: "Divya R.",
    role: "Working Professional",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote:
      "Clean rooms, good food, and the Wi-Fi is fast enough for my WFH days. Housekeeping is consistent and the staff are respectful.",
  },
  {
    name: "Anjali M.",
    role: "Student, BMSIT",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    quote:
      "Great value for money. Being right opposite college saves me so much commute time, and the food actually tastes like home.",
  },
];

export const stats = [
  { label: "Happy residents", value: "150+" },
  { label: "Average rating", value: "4.7/5" },
  { label: "Meals served daily", value: "3" },
  { label: "Years of trust", value: "5+" },
];
