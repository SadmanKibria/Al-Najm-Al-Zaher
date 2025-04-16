import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

export default function Footer() {
  return (
    <footer className="bg-[#172D56] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Al Najm Al Zaher Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Providing comprehensive commodity trading solutions, specializing
              in agricultural commodities with global reach and expertise.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 mt-1" />
                <span className="text-sm">{siteConfig.company.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about/company-profile"
                  className="hover:text-white transition-colors"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/about/directors"
                  className="hover:text-white transition-colors"
                >
                  Directors
                </Link>
              </li>
              <li>
                <Link
                  href="/about/our-companies-worldwide"
                  className="hover:text-white transition-colors"
                >
                  Our Companies Worldwide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-6 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p>
                &copy; {new Date().getFullYear()} Al Najm Al Zaher. All rights
                reserved.
              </p>
            </div>
            <div>
              <p>
                Powered by{" "}
                <a
                  href="https://www.sadmankibria.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transition-colors"
                >
                  Sadman Kibria
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
