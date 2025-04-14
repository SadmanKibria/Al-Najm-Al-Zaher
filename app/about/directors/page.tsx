import Image from "next/image";

export default function DirectorsPage() {
  const directors = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "John Smith has over 25 years of experience in the commodity trading industry. He founded Durotech with a vision to create a global trading company built on principles of integrity, reliability, and excellence. Under his leadership, Durotech has grown into a respected name in international commodity markets.",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operations Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah Johnson brings 20 years of operational expertise to Durotech. With a background in supply chain management and international logistics, she oversees the company's day-to-day operations, ensuring efficient processes and timely delivery of commodities to clients worldwide.",
    },
    {
      name: "Michael Chen",
      position: "Chief Financial Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael Chen is a seasoned financial expert with extensive experience in commodity trading finance. He manages Durotech's financial strategies, risk management, and investment decisions, ensuring the company's continued growth and stability in volatile market conditions.",
    },
    {
      name: "Elena Rodriguez",
      position: "Director of International Trade",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Elena Rodriguez leads Durotech's international trade initiatives, leveraging her extensive knowledge of global markets and trade regulations. With over 15 years of experience in international business, she has established valuable partnerships across multiple continents, expanding Durotech's global reach.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Our Directors
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Meet the leadership team behind Durotech's success. Our directors
            bring decades of combined experience in commodity trading,
            international business, and strategic management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {directors.map((director, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                <Image
                  src={director.image || "/placeholder.svg"}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold text-[#172D56]">
                  {director.name}
                </h2>
                <p className="text-blue-600 font-medium mb-4">
                  {director.position}
                </p>
                <p className="text-gray-700">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
