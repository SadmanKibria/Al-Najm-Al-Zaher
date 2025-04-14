import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSlider from "./hero-slider";

export default function Hero() {
  const slides = [
    "/Soya-Bean-Oil.jpg?height=800&width=1920",
    "/Wheat-Grain-scaled.jpg?height=800&width=1920&text=Slide+2",
    "/Sunflower-Oil.jpg?height=800&width=1920&text=Slide+3",
  ];

  return (
    <section className="relative h-[700px] md:h-[800px]">
      <HeroSlider slides={slides} interval={6000}>
        <div className="container h-[700px] md:h-[800px] flex flex-col justify-center">
          <div className="max-w-2xl text-white space-y-8 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-blue-300">
                Global Trading Excellence
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Commodity Trading Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-xl">
              Specializing in trading agricultural commodities with expertise,
              integrity, and reliability across global markets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white px-8 py-6 text-lg rounded-md backdrop-blur-sm transition-all"
                asChild
              >
                <Link href="#commodities">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </HeroSlider>
    </section>
  );
}
