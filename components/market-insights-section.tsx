import { CalendarIcon, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MarketInsightsSection() {
  const insights = [
    {
      title: "Global Oil Market Trends for 2023",
      image: "/placeholder.svg?height=300&width=500",
      date: "June 15, 2023",
      author: "Market Analysis Team",
      excerpt:
        "An in-depth analysis of the current trends and future outlook for the global oil market.",
      link: "#",
    },
    {
      title: "Impact of Renewable Energy on Commodity Trading",
      image: "/placeholder.svg?height=300&width=500",
      date: "May 28, 2023",
      author: "Research Department",
      excerpt:
        "Exploring how the transition to renewable energy is reshaping commodity trading landscapes.",
      link: "#",
    },
    {
      title: "Agricultural Commodities: Harvest Forecast",
      image: "/placeholder.svg?height=300&width=500",
      date: "April 10, 2023",
      author: "Agricultural Specialists",
      excerpt:
        "Comprehensive forecast for major agricultural commodities based on current harvest data.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="insights">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Market Insights
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-700 text-lg">
            Stay informed with our latest analysis and insights on global
            commodity markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {insight.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {insight.author}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#172D56] group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <Link
                  href={insight.link}
                  className="inline-block text-blue-600 font-medium group-hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
