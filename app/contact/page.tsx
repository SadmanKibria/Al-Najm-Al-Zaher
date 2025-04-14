import { Mail } from "lucide-react";
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
            We&apos;re here to provide personalized support and answer any
            questions you may have.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Mail className="size-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#172D56]">
              Email Us
            </h3>
            <p className="text-gray-600 mb-6">
              For inquiries about our products and services, please contact us
              at:
            </p>
            <a
              href="mailto:durotech.uk@gmail.com"
              className="text-xl font-medium text-blue-600 hover:underline"
            >
              durotech.uk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
