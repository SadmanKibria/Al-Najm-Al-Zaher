/**
 * SEO Configuration
 *
 * This file contains centralised configuration for the website&apos;s SEO,
 * commodity trading information and structured data for search engines.
 *
 * @author Sadman Kibria (https://sadmankibria.com)
 */

export const siteConfig = {
  // Basic site information
  name: "Al Najm Al Zaher",
  url: "https://alnajmalzaher.com",
  ogImage: "https://alnajmalzaher.com/logo.png",
  description:
    "Al Najm Al Zaher is a leading commodity trading company specializing in agricultural products with global reach and expertise.",

  // Information for portfolio showcase
  developer: {
    name: "Sadman Kibria",
    url: "https://sadmankibria.com",
    github: "https://github.com/sadmankibria",
    linkedin: "https://linkedin.com/in/sadmankibria",
    youtube: "https://www.youtube.com/@SadmanKibria",
    portfolio: "https://www.sadmankibria.com/posts",
  },

  // Company details
  company: {
    email: "durotech.uk@gmail.com",
    phone: "+44 7123 456789",
    address: "London, United Kingdom",
    businessHours: "Monday - Friday: 9:00 AM - 5:00 PM",
  },

  // Keywords for SEO
  keywords: [
    "commodity trading",
    "agricultural commodities",
    "Al Najm Al Zaher",
    "wheat grain",
    "refined sunflower oil",
    "crude soya bean oil",
    "global trading",
    "commodity market",
    "international trade",
    "commodity supplier",
    "trading company UK",
    "London commodity trader",
    "Sadman Kibria",
    "commodity trading solutions",
  ],
};

/**
 * Generates structured data for the organisation (JSON-LD)
 * This helps search engines understand the organisation better
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.company.phone,
      email: siteConfig.company.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    description: siteConfig.description,
  };
}

/**
 * Generates metadata for pages
 * @param title - Page title
 * @param description - Page description
 * @param path - Page path (optional)
 */
export function generateMetadata(
  title: string,
  description: string,
  path?: string
) {
  const baseUrl = siteConfig.url;
  const url = path ? `${baseUrl}/${path}` : baseUrl;

  return {
    title: `${title} | ${siteConfig.name} | Commodity Trading`,
    description: description,
    keywords: siteConfig.keywords,
    authors: [
      { name: siteConfig.developer.name, url: siteConfig.developer.url },
    ],
    creator: siteConfig.developer.name,
    publisher: siteConfig.name,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description,
      url: url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: description,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.developer.name.replace(/\s+/g, "")}`,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generates structured data for product pages (JSON-LD)
 * This helps search engines understand the products better
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toISOString(),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}
