import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Thermometer,
  Wind,
  Gauge,
  Droplets,
} from "lucide-react";

export const metadata = {
  title: "HQ-N2 Nitrogen Generator | Heqing Laser",
  description:
    "On-site nitrogen gas generation for laser cutting assist gas. Reduce operating costs by 60% compared to liquid nitrogen. Purity 99.999%, flow 5-60 Nm³/h.",
};

const nitrogenSpecs = [
  { label: "Nitrogen Purity", value: "99.999%" },
  { label: "Flow Rate Range", value: "5 – 60 Nm³/h" },
  { label: "Output Pressure", value: "0.6 – 1.3 MPa" },
  { label: "Dew Point", value: "≤ -40°C" },
  { label: "Air Compressor", value: "Integrated / External" },
  { label: "Power Supply", value: "380V / 50Hz / 3-Phase" },
  { label: "Power Consumption", value: "3.5 – 22 kW" },
  { label: "Noise Level", value: "≤ 72 dB(A)" },
  { label: "Cooling Method", value: "Air-Cooled" },
  { label: "Control System", value: "PLC + Touch Screen" },
  { label: "Molecular Sieve", value: "CMS Carbon Sieve" },
  { label: "Service Life", value: "≥ 10 Years" },
];

const keyFeatures = [
  {
    icon: Gauge,
    title: "High Purity 99.999%",
    desc: "Premium CMS carbon molecular sieve delivers ultra-high purity nitrogen, meeting the strictest laser cutting requirements for clean, oxide-free edges.",
  },
  {
    icon: Zap,
    title: "Cost Savings 60%",
    desc: "Generate nitrogen on-site instead of purchasing liquid nitrogen cylinders. Typical ROI within 12-18 months. Eliminate delivery delays and supply chain risks.",
  },
  {
    icon: Shield,
    title: "Reliable & Stable",
    desc: "Industrial-grade PLC control system with automatic pressure regulation. Dual-tower PSA design ensures continuous gas supply with automatic switching.",
  },
  {
    icon: Thermometer,
    title: "Low Dew Point ≤-40°C",
    desc: "Advanced drying system removes moisture to prevent condensation in gas lines. Protects laser cutting head optics and ensures consistent cut quality.",
  },
  {
    icon: Wind,
    title: "Compact & Integrated",
    desc: "All-in-one design with integrated air compressor, dryer, and nitrogen generator. Small footprint, easy installation, plug-and-play operation.",
  },
  {
    icon: Droplets,
    title: "Smart Monitoring",
    desc: "Touch screen HMI displays real-time purity, pressure, flow rate, and system status. Remote monitoring capability with alarm notifications.",
  },
];

const applications = [
  {
    icon: "🔩",
    title: "Fiber Laser Cutting",
    desc: "Primary assist gas for cutting stainless steel, aluminum, and non-ferrous metals. Produces clean, oxide-free edges ready for welding or painting.",
  },
  {
    icon: "⚙️",
    title: "Metal Fabrication",
    desc: "Shielding gas for laser welding and heat treatment processes. Prevents oxidation and maintains material properties during thermal processing.",
  },
  {
    icon: "🏭",
    title: "Industrial Production",
    desc: "General-purpose nitrogen supply for purging, blanketing, and inert atmosphere applications across manufacturing facilities.",
  },
];

export default function NitrogenGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative border-b border-[#1E3A5F]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-sm tracking-widest text-[#00D4FF] uppercase">
                Supporting Equipment
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                HQ-N2 Nitrogen Generator
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-[#CBD5E1]">
                On-site nitrogen gas generation for laser cutting assist gas.
                Reduce operating costs by up to 60% compared to purchasing
                liquid nitrogen. Purity up to 99.999%, flow rate 5-60 Nm³/h.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/8613210720012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded border border-[#1E3A5F] bg-[#162032]">
                <Image
                  src="/images/products/nitrogen-generator.jpg"
                  alt="HQ-N2 Nitrogen Generator"
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-b border-[#1E3A5F] bg-[#0F1B2D]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-[#3B82F6] uppercase">
              Why Choose HQ-N2
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Key Features
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="card-hover rounded border border-[#1E3A5F] bg-[#162032] p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded bg-[#0A2463]">
                  <feature.icon className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="border-b border-[#1E3A5F]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-[#3B82F6] uppercase">
              Technical Data
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Specifications
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="spec-table overflow-hidden rounded border border-[#1E3A5F]">
              {nitrogenSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex border-b border-[#1E3A5F] last:border-b-0 ${i % 2 === 0 ? "bg-[#162032]" : "bg-[#0F1B2D]"}`}
                >
                  <div className="w-1/2 border-r border-[#1E3A5F] px-6 py-4 font-mono text-sm text-[#94A3B8]">
                    {spec.label}
                  </div>
                  <div className="w-1/2 px-6 py-4 text-sm font-medium text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-b border-[#1E3A5F] bg-[#0F1B2D]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-[#3B82F6] uppercase">
              Applications
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Where It&apos;s Used
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="card-hover rounded border border-[#1E3A5F] bg-[#162032] p-6"
              >
                <div className="mb-4 text-3xl">{app.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {app.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why On-Site Generation */}
      <section className="border-b border-[#1E3A5F]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-[#3B82F6] uppercase">
              Cost Analysis
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Why Generate On-Site?
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <div className="rounded border border-[#1E3A5F] bg-[#162032] p-6 text-center">
              <div className="mb-2 font-mono text-3xl font-bold text-[#3B82F6]">
                60%
              </div>
              <div className="text-sm text-[#CBD5E1]">Cost Reduction</div>
              <p className="mt-2 text-xs text-[#94A3B8]">
                vs. purchasing liquid nitrogen cylinders
              </p>
            </div>
            <div className="rounded border border-[#1E3A5F] bg-[#162032] p-6 text-center">
              <div className="mb-2 font-mono text-3xl font-bold text-[#00D4FF]">
                12-18
              </div>
              <div className="text-sm text-[#CBD5E1]">Months ROI</div>
              <p className="mt-2 text-xs text-[#94A3B8]">
                Typical payback period
              </p>
            </div>
            <div className="rounded border border-[#1E3A5F] bg-[#162032] p-6 text-center">
              <div className="mb-2 font-mono text-3xl font-bold text-[#3B82F6]">
                24/7
              </div>
              <div className="text-sm text-[#CBD5E1]">Continuous Supply</div>
              <p className="mt-2 text-xs text-[#94A3B8]">
                No delivery delays or shortages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Reduce Your Nitrogen Costs Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#94A3B8]">
            Get a customized nitrogen generator solution based on your laser
            cutting power and gas consumption. Our engineers will calculate the
            optimal model for your production needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/8613210720012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
