import Image from "next/image";

export default function ClientsSection() {
  // This would normally be your actual client logos
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Client 2", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Client 3", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Client 4", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Client 5", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Client 6", logo: "/placeholder.svg?height=60&width=160" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="clients">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-slate-600 text-lg">
            We work with leading companies and organizations across various
            industries globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who trust us for their
            commodity trading needs. We're committed to building lasting
            relationships based on trust, reliability, and outstanding results.
          </p>
        </div>
      </div>
    </section>
  );
}
