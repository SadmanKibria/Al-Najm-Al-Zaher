import Image from "next/image";

export default function DirectorsPage() {
  const directors = [
    {
      name: "Mohammed Nasir U Mozumder",
      position: "Director and CEO",
      image: "/Mohammed-Nasir-U-Mozumder.jpg?height=400&width=400",
      bio: "Mohammed Nasir U Mozumder is the visionary leader behind Durotech. With over 25 years of experience in commodity trading and international business, he has successfully navigated complex markets and established Durotech as a trusted name in the industry. His strategic insights and commitment to excellence drive the company's growth and innovation.",
    },
    {
      name: "Mohammed Moin Uddin",
      position: "Director",
      image: "/Mohammed-Moin-Uddin.jpg?height=400&width=400",
      bio: "Mohammed Moin Uddin is a seasoned professional with a wealth of experience in commodity trading and supply chain management. As a director at Durotech, he plays a crucial role in overseeing operations and ensuring the company's commitment to quality and reliability in all its dealings.",
    },
    {
      name: "Major (Ret.) Nazmul Hasan",
      position: "Director",
      image: "/Major-Ret.-Nazmul-Hasan.jpg?height=400&width=400",
      bio: "Major (Ret.) Nazmul Hasan brings a unique perspective to Durotech with his military background and expertise in logistics and operations. His leadership skills and strategic thinking have been instrumental in streamlining Durotech's operations and enhancing its competitive edge in the market.",
    },
    {
      name: "Lt.Col. (Ret.) Md Mostafizar Rahman",
      position: "Director",
      image: "/Lt.Col_.-Ret.-Md-Mostafizur-Rahman.jpg?height=400&width=400",
      bio: "Lt.Col. (Ret.) Md Mostafizar Rahman is a distinguished leader with extensive experience in operations and management. His military background and strategic acumen contribute to Durotech's operational excellence and commitment to delivering high-quality services to its clients.",
    },
    {
      name: "Ahmed Hussain",
      position: "Director",
      image: "/Ahmed-Hussain.jpg?height=400&width=400",
      bio: "Ahmed Hussain is a dynamic leader with a strong background in finance and business development. As a director at Durotech, he focuses on strategic partnerships and market expansion, leveraging his expertise to drive the company's growth and enhance its global presence.",
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
            Meet the leadership team behind Durotech&apos;s success. Our
            directors bring decades of combined experience in commodity trading,
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
