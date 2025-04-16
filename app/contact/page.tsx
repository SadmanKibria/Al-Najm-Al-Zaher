import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Al Najm Al Zaher for all your commodity trading needs. We're here to provide personalized support and answer any questions you may have.",
  keywords: [
    ...siteConfig.keywords,
    "contact Al Najm Al Zaher",
    "commodity trading contact",
    "trading support",
  ],
  openGraph: {
    title: "Contact Us | Al Najm Al Zaher",
    description:
      "Get in touch with Al Najm Al Zaher for all your commodity trading needs. We're here to provide personalized support and answer any questions you may have.",
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Contact Us
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Get in touch with our team to discuss your commodity trading needs.
            We&apos;re here to provide personalised support and answer any
            questions you may have.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-[#172D56] text-center">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Mail className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#172D56]">
                  Email Us
                </h3>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {siteConfig.company.email}
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Phone className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#172D56]">
                  Call Us
                </h3>
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="size-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#172D56]">
                Visit Our Office
              </h3>
              <p className="text-gray-700">{siteConfig.company.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
