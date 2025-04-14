import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Industry expertise in commodity trading",
    "Global network of suppliers and buyers",
    "Competitive pricing and market analysis",
    "Secure and efficient transactions",
    "Personalized service for each client",
    "Comprehensive risk management solutions",
  ];

  return (
    <section className="py-16 md:py-24" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="About Al Najm Al Zaher"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
                About Us
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-gray-700">
              Al Najm Al Zaher is a leading international commodity trading
              company specializing in agricultural commodities. With our
              extensive industry experience and global network, we facilitate
              seamless transactions between suppliers and buyers worldwide.
            </p>

            <p className="text-lg text-gray-700">
              Our mission is to provide reliable, efficient, and value-driven
              trading solutions that meet the unique needs of our clients. We
              combine market expertise with innovative approaches to navigate
              the complex global commodity markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-6 bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
