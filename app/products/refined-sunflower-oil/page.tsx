import ProductDetail from "@/components/product-detail";

export default function RefinedSunflowerOilPage() {
  return (
    <ProductDetail
      title="Refined Sunflower Oil"
      image="/placeholder.svg?height=600&width=800"
      description={[
        "Refined Sunflower Oil is a light, healthy cooking oil extracted from sunflower seeds. It undergoes a refining process to remove impurities, resulting in a clear, pale yellow oil with a mild flavor and high smoke point.",
        "Our refined sunflower oil is rich in vitamin E and low in saturated fats, making it a healthy choice for various cooking applications. It's ideal for frying, baking, and as a base for salad dressings and marinades.",
        "Durotech sources premium quality sunflower oil from trusted producers, ensuring consistent quality and reliable supply. Our refined sunflower oil meets international food safety standards and is available in various packaging options to suit your business needs.",
      ]}
      specifications={[
        { label: "Color", value: "Clear, pale yellow" },
        { label: "Free Fatty Acid", value: "Max 0.1%" },
        { label: "Peroxide Value", value: "Max 2.0 meq/kg" },
        { label: "Moisture", value: "Max 0.1%" },
        { label: "Smoke Point", value: "Approx. 230°C" },
        {
          label: "Packaging",
          value: "Bulk, 1L/2L/5L bottles, 15L/20L jerry cans",
        },
      ]}
    />
  );
}
