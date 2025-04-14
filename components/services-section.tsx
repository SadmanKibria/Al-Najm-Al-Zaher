import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Trading Services",
      description:
        "Comprehensive commodity trading solutions connecting global suppliers and buyers.",
      link: "#",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Market Intelligence",
      description:
        "In-depth market analysis and insights to support your trading decisions.",
      link: "#",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Risk Management",
      description:
        "Strategic solutions to mitigate market risks and protect your investments.",
      link: "#",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Logistics Support",
      description:
        "End-to-end logistics coordination for efficient commodity transportation.",
      link: "#",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Financial Services",
      description:
        "Flexible financial solutions to facilitate seamless commodity transactions.",
      link: "#",
    },
    {
      icon: "/placeholder.svg?height=80&width=80",
      title: "Consulting Services",
      description:
        "Expert advisory services for market entry, strategy, and operations optimization.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-700 text-lg">
            We provide a comprehensive range of services to support your
            commodity trading activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#172D56]">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-blue-600 font-medium group-hover:underline"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
