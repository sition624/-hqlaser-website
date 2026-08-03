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
  title: "Nitrogen Generator | Laser Cutting Assist Gas",
  description:
    "PSA nitrogen generator for laser cutting assist gas. On-site nitrogen production with 99.999% purity. Simple operation, low maintenance, 8-10 year service life.",
};

const nitrogenSpecs = [
  { label: "Technology", value: "PSA (Pressure Swing Adsorption)" },
  { label: "Nitrogen Purity", value: "Adjustable up to 99.999%" },
  { label: "Output Pressure", value: "0.6 MPa" },
  { label: "Compressed Air Pressure", value: "0.6 – 0.8 MPa" },
  { label: "Air Dew Point", value: "< -10°C" },
  { label: "Air Quality", value: "Oil-free & Water-free" },
  { label: "Oil Content", value: "< 0.01 PPM" },
  { label: "Power Supply", value: "220V / 50Hz" },
  { label: "Power Consumption", value: "80W" },
  { label: "Ambient Temperature", value: "5 – 40°C (Optimal 20-25°C)" },
  { label: "Molecular Sieve", value: "High-Performance CMS Carbon Sieve" },
  { label: "Service Life", value: "8 – 10 Years" },
  { label: "Warranty", value: "12 Months" },
];

const keyFeatures = [
  {
    icon: Gauge,
    title: "PSA Technology",
    desc: "Pressure Swing Adsorption with high-performance CMS carbon molecular sieve. Dual-tower design works alternately to continuously produce nitrogen.",
  },
  {
    icon: Zap,
    title: "Adjustable Purity",
    desc: "Nitrogen purity can be adjusted according to actual needs. Up to 99.999% for high-purity applications. Factory pre-set to customer requirements.",
  },
  {
    icon: Shield,
    title: "Safe & Inert",
    desc: "Nitrogen is colorless, odorless, non-toxic, non-flammable, non-explosive. Molecular structure is very stable and difficult to react chemically with other substances.",
  },
  {
    icon: Thermometer,
    title: "Simple Operation",
    desc: "Connect compressed air, turn on power, press start. Nitrogen pressure rises to 0.6 MPa. Simple process flow, convenient maintenance.",
  },
  {
    icon: Wind,
    title: "Compact Design",
    desc: "Small footprint, low investment. Easy to install with good air circulation. Oil-water separator and precision filter included.",
  },
  {
    icon: Droplets,
    title: "Long Service Life",
    desc: "8-10 years under normal operation. 12-month warranty. Replace activated carbon every 3-6 months, carbon molecular sieve every 3-6 years.",
  },
];

const applications = [
  {
    icon: "Laser",
    title: "Laser Cutting Assist Gas",
    desc: "Primary assist gas for fiber laser cutting machines. Produces clean, oxide-free edges on stainless steel, aluminum, and non-ferrous metals.",
  },
  {
    icon: "Weld",
    title: "Laser Welding Shielding",
    desc: "Shielding gas for laser welding processes. Prevents oxidation and maintains material properties during thermal processing.",
  },
  {
    icon: "Factory",
    title: "Industrial Protection",
    desc: "Protective gas for heat treatment, purging, blanketing, and inert atmosphere applications. Widely used across manufacturing facilities.",
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
                PSA nitrogen generator using high-performance CMS carbon
                molecular sieve. Produces nitrogen on-site for laser cutting
                assist gas. Simple operation, low maintenance, 8-10 year service
                life. Purity adjustable up to 99.999%.
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
