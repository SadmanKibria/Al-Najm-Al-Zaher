import ProductDetail from "@/components/product-detail";

export default function WheatGrainPage() {
  return (
    <ProductDetail
      title="Wheat Grain"
      image="/Wheat-Grain-scaled.jpg?height=600&width=800"
      description={[
        "Wheat is a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat. Wheat is grown on more land area than any other food crop and is the most important staple food for humans.",
        "Our wheat grain is sourced from premium agricultural regions, ensuring high quality and nutritional value. We offer various grades suitable for different applications, from food production to animal feed.",
        "We provide reliable supply chains and competitive pricing for wheat grain, with flexible shipping options to meet your specific requirements. Our quality control processes ensure that all wheat grain meets international standards and specifications.",
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
  );
}
