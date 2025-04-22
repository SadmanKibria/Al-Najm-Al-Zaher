import Image from "next/image";

export default function OurCompaniesWorldwidePage() {
  const regions = [
    {
      name: "Europe",
      description:
        "Our European operations are headquartered in London, with additional offices in Rotterdam and Geneva. These strategic locations allow us to serve the European market efficiently, with a focus on agricultural commodities and energy products.",
      companies: [
        {
          name: "Al Najm Al Zaher UK Ltd.",
          location: "London, United Kingdom",
        },
        {
          name: "Al Najm Al Zaher Trading B.V.",
          location: "Rotterdam, Netherlands",
        },
        { name: "Al Najm Al Zaher SA", location: "Geneva, Switzerland" },
      ],
    },
    {
      name: "Asia",
      description:
        "Our Asian presence spans major trading hubs, enabling us to connect with suppliers and buyers across this dynamic region. We focus on a wide range of commodities, including agricultural products, metals, and energy resources.",
      companies: [
        { name: "Al Najm Al Zaher Asia Pte Ltd.", location: "Singapore" },
        {
          name: "Al Najm Al Zaher Trading (Shanghai) Co., Ltd.",
          location: "Shanghai, China",
        },
        {
          name: "Al Najm Al Zaher India Private Limited",
          location: "Mumbai, India",
        },
      ],
    },
    {
      name: "Americas",
      description:
        "Our operations in the Americas cover both North and South America, with a strong focus on agricultural commodities and energy products. These strategic locations allow us to source and distribute commodities efficiently across the region.",
      companies: [
        { name: "Al Najm Al Zaher Americas Inc.", location: "Houston, USA" },
        {
          name: "Al Najm Al Zaher Brasil Ltda.",
          location: "São Paulo, Brazil",
        },
        {
          name: "Al Najm Al Zaher Argentina S.A.",
          location: "Buenos Aires, Argentina",
        },
      ],
    },
    {
      name: "Africa & Middle East",
      description:
        "Our presence in Africa and the Middle East allows us to tap into emerging markets and establish direct connections with producers and consumers in these regions. We focus on agricultural commodities, energy products, and metals.",
      companies: [
        { name: "Al Najm Al Zaher DMCC", location: "Dubai, UAE" },
        {
          name: "Al Najm Al Zaher South Africa (Pty) Ltd.",
          location: "Johannesburg, South Africa",
        },
        {
          name: "Al Najm Al Zaher West Africa Ltd.",
          location: "Lagos, Nigeria",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Our Companies Worldwide
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Al Najm Al Zaher operates globally through a network of
            strategically located companies, enabling us to serve clients
            efficiently across different regions and markets.
          </p>
        </div>

        <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/company-wordwide.jpg?height=800&width=1600"
            alt="Global Map"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-16">
          {regions.map((region, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4 text-[#172D56]">
                {region.name}
              </h2>
              <p className="text-gray-700 mb-6">{region.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {region.companies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {company.name}
                    </h3>
                    <p className="text-gray-600">{company.location}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
