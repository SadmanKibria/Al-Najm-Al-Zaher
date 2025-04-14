import ProductDetail from "@/components/product-detail";
import type { Metadata } from "next";
import { siteConfig, generateProductSchema } from "@/lib/seo-config";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wheat Grain | Premium Quality Wheat",
  description:
    "High-quality wheat grain sourced from premium agricultural regions. We offer various grades suitable for different applications, from food production to animal feed.",
  keywords: [
    ...siteConfig.keywords,
    "wheat grain",
    "wheat trading",
    "premium wheat",
    "food grade wheat",
    "agricultural commodities",
  ],
  openGraph: {
    title: "Wheat Grain | Premium Quality Wheat | Durotech",
    description:
      "High-quality wheat grain sourced from premium agricultural regions. We offer various grades suitable for different applications, from food production to animal feed.",
    url: `${siteConfig.url}/products/wheat-grain`,
    type: "product",
  },
};

export default function WheatGrainPage() {
  const productSchema = generateProductSchema({
    name: "Wheat Grain",
    description:
      "High-quality wheat grain sourced from premium agricultural regions. We offer various grades suitable for different applications, from food production to animal feed.",
    image: `${siteConfig.url}/placeholder.svg`,
    url: `${siteConfig.url}/products/wheat-grain`,
  });

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetail
        title="Wheat Grain"
        image="/placeholder.svg?height=600&width=800"
        description={[
          "Wheat is a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat. Wheat is grown on more land area than any other food crop and is the most important staple food for humans.",
          "Our wheat grain is sourced from premium agricultural regions, ensuring high quality and nutritional value. We offer various grades suitable for different applications, from food production to animal feed.",
          "Durotech provides reliable supply chains and competitive pricing for wheat grain, with flexible shipping options to meet your specific requirements. Our quality control processes ensure that all wheat grain meets international standards and specifications.",
        ]}
        specifications={[
          { label: "Origin", value: "Multiple origins available" },
          { label: "Moisture", value: "Max 14%" },
          { label: "Foreign Matter", value: "Max 2%" },
          { label: "Damaged Kernels", value: "Max 2%" },
          { label: "Protein Content", value: "Min 11.5%" },
          { label: "Packaging", value: "Bulk or 25/50kg bags" },
        ]}
      />
    </>
  );
}
