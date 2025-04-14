import ProductDetail from "@/components/product-detail";

export default function CrudeSoyaBeanOilPage() {
  return (
    <ProductDetail
      title="Crude Soya Bean Oil"
      image="/Soya-Bean-Oil.jpg?height=600&width=800"
      description={[
        "Crude Soya Bean Oil is an unrefined vegetable oil extracted from soybeans. It has a rich, natural composition that makes it valuable for both food and industrial applications after appropriate refining processes.",
        "Our crude soya bean oil is sourced from premium quality soybeans, ensuring high nutritional value and consistent quality. The oil is rich in essential fatty acids and has various applications in the food industry after refining.",
        "Durotech provides reliable supply chains for crude soya bean oil with competitive pricing and flexible shipping options. Our quality control processes ensure that all crude soya bean oil meets industry standards and specifications.",
      ]}
      specifications={[
        { label: "Color", value: "Dark amber to reddish-brown" },
        { label: "Free Fatty Acid", value: "1.5-3.0%" },
        { label: "Moisture & Impurities", value: "Max 0.5%" },
        { label: "Iodine Value", value: "125-140" },
        { label: "Phosphorus", value: "300-700 ppm" },
        { label: "Packaging", value: "Bulk, ISO tanks, flexi tanks" },
      ]}
    />
  );
}
