import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | HQ Laser - Focused Laser Solutions',
  description: 'HQ Laser core laser solutions: handheld welding, desktop marking, and compact cleaning. Focused products, practical engineering.',
};

const coreProducts = [
  {
    number: '01',
    name: 'Laser Welding',
    subtitle: 'Handheld & Compact Laser Welding',
    desc: 'Fast, clean and practical welding solutions for metal fabrication.',
    image: '/images/products/hq26a-air-cooled-welder.png',
    href: '/products/hq26a',
    features: ['Air-Cooled Technology', '1000W - 2000W', 'Portable Design', 'No Chiller Required'],
  },
  {
    number: '02',
    name: 'Laser Marking',
    subtitle: 'Desktop & Fiber Laser Marking',
    desc: 'Compact marking solutions for precision identification, branding and traceability.',
    image: '/images/products/laser-marking-machine.png',
    href: '/contact',
    features: ['Fiber / UV / CO2', 'High Precision', 'Compact Design', 'Easy Integration'],
  },
  {
    number: '03',
    name: 'Laser Cleaning',
    subtitle: 'Compact Laser Cleaning',
    desc: 'Non-contact cleaning solutions for rust, paint, oil and surface preparation.',
    image: '/images/products/pulse-laser-cleaner.jpg',
    href: '/products/pulse-cleaning',
    features: ['Non-Contact', '100W - 500W', 'No Chemicals', 'Air-Cooled'],
  },
];

const applications = [
  { name: 'Metal Fabrication', desc: 'Stainless steel, carbon steel, aluminum and more.' },
  { name: 'Sheet Metal', desc: 'Cabinets, enclosures, panels and components.' },
  { name: 'Hardware', desc: 'Metal parts, tools and hardware products.' },
  { name: 'Automotive Parts', desc: 'Welding, marking and surface preparation.' },
  { name: 'Electronics', desc: 'Precision marking and identification.' },
  { name: 'General Manufacturing', desc: 'Flexible solutions for different production environments.' },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Our Core <span className="gradient-text">Laser Solutions</span>
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Focused products. Practical engineering. Built around specific applications.
              We concentrate on handheld welders, compact cleaners, and desktop markers —
              products where design and user experience matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Focused Products. <span className="gradient-text">Practical Engineering.</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              We focus on a selected range of laser equipment designed for specific manufacturing applications.
            </p>
          </div>

          <div className="space-y-16">
            {coreProducts.map((product) => (
              <div key={product.number} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="text-6xl font-black text-[#3B82F6]/10 mb-4">{product.number}</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-[#3B82F6] font-semibold mb-4">{product.subtitle}</p>
                  <p className="text-[#CBD5E1] text-lg leading-relaxed mb-6">{product.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[#94A3B8] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-[#3B82F6] font-semibold hover:text-[#00D4FF] transition-colors"
                  >
                    Explore {product.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built Around Your <span className="gradient-text">Application</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              From small workshops to industrial production, our machines are designed for real manufacturing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.name} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <h3 className="text-lg font-bold text-white mb-3">{app.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Tell Us About Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Configuration?
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-10 max-w-2xl mx-auto">
            We support custom configurations, private labeling, and small-batch orders.
            Tell us your requirements and we'll build around your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
            </Link>
            <a href="https://wa.me/8618953316699" target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
