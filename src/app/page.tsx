import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { RoomShowcase } from "@/components/sections/room-showcase";
import { Lifestyle } from "@/components/sections/lifestyle";
import { Amenities } from "@/components/sections/amenities";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { Reviews } from "@/components/sections/reviews";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <RoomShowcase />
      <Lifestyle />
      <Amenities />
      <Gallery />
      <Location />
      <Reviews />
      <Cta />
    </>
  );
}
