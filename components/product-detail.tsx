import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  title: string;
  description: string[];
  image: string;
  specifications?: { label: string; value: string }[];
}

export default function ProductDetail({
  title,
  description,
  image,
  specifications,
}: ProductDetailProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#172D56]">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="prose max-w-none text-gray-700">
              {description.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {specifications && specifications.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#172D56]">
                  Specifications
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="/contact">Contact Us for Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
