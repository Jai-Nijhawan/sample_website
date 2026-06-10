import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import SuitesShowcase from "@/components/home/SuitesShowcase";
import Marquee from "@/components/motion/Marquee";
import ExperiencesTeaser from "@/components/home/ExperiencesTeaser";
import DiningTeaser from "@/components/home/DiningTeaser";
import Reviews from "@/components/home/Reviews";
import HomeGallery from "@/components/home/HomeGallery";
import LocationFull from "@/components/home/LocationFull";
import { resortSchema, JsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={resortSchema()} />
      <Hero />
      <Manifesto />
      <SuitesShowcase />
      <div className="bg-sand py-12">
        <Marquee words={["Stay", "Dine", "Unwind", "Explore", "Reconnect"]} />
      </div>
      <ExperiencesTeaser />
      <DiningTeaser />
      <Reviews />
      <HomeGallery />
      <LocationFull />
    </>
  );
}
