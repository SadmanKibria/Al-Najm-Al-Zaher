import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages
  const routes = [
    "",
    "/about/company-profile",
    "/about/directors",
    "/about/our-companies-worldwide",
    "/products/wheat-grain",
    "/products/refined-sunflower-oil",
    "/products/crude-soya-bean-oil",
    "/contact",
    "/cookie-policy",
    "/disclaimer",
    "/privacy-policy",
    "/return-policy",
    "/terms-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.includes("products") ? 0.8 : 0.5,
  }));

  return routes;
}
