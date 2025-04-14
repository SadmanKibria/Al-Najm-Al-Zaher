import Link from "next/link";
import Image from "next/image";

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
                width={80}
                height={80}
                className="bg-white p-1 rounded-md"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Providing comprehensive commodity trading solutions, specializing
              in agricultural commodities with global reach and expertise.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
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
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p>
                &copy; {new Date().getFullYear()} Al Najm Al Zaher. All rights
                reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">
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
    </footer>
  );
}
