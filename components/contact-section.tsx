"use client";

import type React from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            Contact Us
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-700 text-lg">
            Get in touch with our team to discuss your commodity trading needs.
            We&apos;re here to provide personalized support.
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
