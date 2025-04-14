import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CommoditiesSection() {
  const commodities = [
    {
      title: "Wheat Grain",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "High-quality wheat grain sourced from premium agricultural regions for various applications.",
      link: "/products/wheat-grain",
    },
    {
      title: "Refined Sunflower Oil",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Premium refined sunflower oil with excellent quality for cooking and food production.",
      link: "/products/refined-sunflower-oil",
    },
    {
      title: "Crude Soya Bean Oil",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Unrefined soya bean oil with rich nutritional composition for various industrial applications.",
      link: "/products/crude-soya-bean-oil",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="commodities">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Our Commodities
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-700 text-lg">
            We specialize in trading a select range of high-quality commodities
            across global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commodities.map((commodity, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-md border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={commodity.image || "/placeholder.svg"}
                  alt={commodity.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#172D56]">
                  {commodity.title}
                </h3>
                <p className="text-gray-600 mb-4">{commodity.description}</p>
                <Link
                  href={commodity.link}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:underline"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
