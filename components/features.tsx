import {
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <TrendingUp className="size-8 text-primary" />,
      title: "Market Analysis",
      description:
        "Deep insights and analytics on commodity market trends to help you make informed decisions.",
    },
    {
      icon: <Shield className="size-8 text-primary" />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and mitigation strategies to protect your investments.",
    },
    {
      icon: <Globe className="size-8 text-primary" />,
      title: "Global Network",
      description:
        "Extensive international connections ensuring optimal trading conditions across markets.",
    },
    {
      icon: <BarChart3 className="size-8 text-primary" />,
      title: "Trading Strategy",
      description:
        "Tailored trading solutions designed to maximize returns on your commodity investments.",
    },
    {
      icon: <CheckCircle className="size-8 text-primary" />,
      title: "Quality Assurance",
      description:
        "Rigorous standards and quality control processes for all traded commodities.",
    },
    {
      icon: <Clock className="size-8 text-primary" />,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance from our expert team for all your trading needs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-slate-600 text-lg">
            Our comprehensive approach to commodity trading offers you
            unparalleled advantages in the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
