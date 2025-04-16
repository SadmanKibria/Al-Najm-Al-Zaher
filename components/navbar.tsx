"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Al Najm Al Zaher Logo"
              width={85}
              height={85}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 mx-auto justify-center">
          <Link
            href="/"
            className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-base font-medium text-slate-800 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products{" "}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-1">
                <Link
                  href="/products/wheat-grain"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Wheat Grain
                </Link>
                <Link
                  href="/products/refined-sunflower-oil"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Refined Sunflower Oil
                </Link>
                <Link
                  href="/products/crude-soya-bean-oil"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Crude Soya Bean Oil
                </Link>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-base font-medium text-slate-800 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About{" "}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-1">
                <Link
                  href="/about/company-profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Company Profile
                </Link>
                <Link
                  href="/about/directors"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Directors
                </Link>
                <Link
                  href="/about/our-companies-worldwide"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Our Companies Worldwide
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          {/* Empty div to balance the layout for center alignment */}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-blue-50 hover:text-blue-600 transition-colors"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md md:hidden">
          <div className="container flex h-24 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Al Najm Al Zaher Logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8">
            <Link
              href="/"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={toggleProducts}
              >
                Products{" "}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productsOpen && (
                <div className="mt-2 ml-4 grid gap-2">
                  <Link
                    href="/products/wheat-grain"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Wheat Grain
                  </Link>
                  <Link
                    href="/products/refined-sunflower-oil"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Refined Sunflower Oil
                  </Link>
                  <Link
                    href="/products/crude-soya-bean-oil"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Crude Soya Bean Oil
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile About Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium hover:text-blue-600 transition-colors"
                onClick={toggleAbout}
              >
                About{" "}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="mt-2 ml-4 grid gap-2">
                  <Link
                    href="/about/company-profile"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Company Profile
                  </Link>
                  <Link
                    href="/about/directors"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Directors
                  </Link>
                  <Link
                    href="/about/our-companies-worldwide"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Our Companies Worldwide
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
