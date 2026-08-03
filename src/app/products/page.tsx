import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Heqing Laser full range of fiber laser cutting, welding, cleaning, and marking machines.',
};

const productCategories = [
  {
    name: 'Laser Cutting Machines',
    desc: 'High-speed fiber laser cutting for sheets, tubes, and plates. From 1500W to 6000W.',
    image: '/images/products/3015-single-platform-fiber-cutter.jpg',
    models: ['HQ-1530 Fiber Laser Cutter', 'HQ-3015 Large Format Cutter', 'HQ-6020 Tube & Sheet Cutter', 'HQ-F6025 Fiber Tube Cutter'],
    href: '/products/hq1530',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Welding Machines',
    desc: 'Handheld & automated laser welders. Revolutionary air-cooled technology.',
    image: '/images/products/hq26a-air-cooled-welder.png',
    models: ['HQ26-1000W Welder', 'HQ26-1200W Welder', 'HQ26-1500W Welder', 'HQ26-2000W Welder'],
    href: '/products/hq26a',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Cleaning Machines',
    desc: 'Non-contact surface cleaning. Remove rust, paint, oil, and contaminants.',
    image: '/images/products/pulse-laser-cleaner.jpg',
    models: ['HQ-CL100 100W Cleaner', 'HQ-CL200 200W Cleaner', 'HQ-CL300 300W Cleaner', 'HQ-CL500 500W Industrial'],
    href: '/products/pulse-cleaning',
    accent: '#00D4FF',
  },
  {
    name: 'Laser Marking Machines',
    desc: 'Permanent marking & engraving for metals, plastics, and more.',
    image: '/images/products/laser-marking-machine.png',
    models: ['HQ-M20 Fiber Marker', 'HQ-M30 UV Marker', 'HQ-M50 CO2 Marker', 'HQ-FLY Flying Marker'],
    href: '/contact',
    accent: '#00D4FF',
  },
];

const productLines = [
  {
    name: "Laser Cutting",
    models: [
      "3015 Sheet & Tube",
      "3015 Single Platform",
      "3015 Exchange Table",
      "4020 Enclosed Exchange Table",
      "Precision Cutting Machine",
      "Ground Rail Cutting Machine",
      "Horizontal Tube Cutting Machine",
      "Side-Mount Tube Cutting Machine",
    ],
  },
  {
    name: "Laser Welding",
    models: [
      "Air-Cooled",
      "QCW",
      "Water-Cooled",
    ],
  },
  {
    name: "Laser Cleaning",
    models: [
      "Pulse",
      "Continuous",
      "Handheld",
    ],
  },
  {
    name: "Laser Marking",
    models: [
      "Desktop",
      "Cabinet",
      "Flying",
      "Handheld",
    ],
  },
];

const moreProducts = [
  { name: "3015 Sheet & Tube Cutter", desc: "Integrated sheet and tube cutting in one machine. Versatile for mixed production needs.", image: "/images/products/3015-sheet-tube-cutter.png" },
  { name: "3015 Exchange Table Cutter", desc: "Dual-table exchange for continuous production. Maximize uptime with automatic pallet switching.", image: "/images/products/3015-dual-platform-fiber-cutter.png" },
  { name: "4020 Enclosed Exchange Table Cutter", desc: "Large format 4000×2000mm with full enclosure. Safe, high-throughput production.", image: "/images/products/4020-enclosed-fiber-cutter.png" },
  { name: "Precision Laser Cutter", desc: "High-precision cutting for thin sheets. ±0.02mm repeatability for fine parts.", image: "/images/products/precision-laser-cutter.jpg" },
  { name: "Ground Rail Cutting Machine", desc: "Gantry-type ground rail design for extra-large workpieces. Stable and heavy-duty.", image: "/images/products/gantry-fiber-cutter.png" },
  { name: "Horizontal Tube Cutting Machine", desc: "Simple horizontal design for tube and pipe cutting. Cost-effective solution.", image: "/images/products/horizontal-tube-cutter.png" },
  { name: "Side-Mount Tube Cutting Machine", desc: "Dual-card side-mount design for efficient tube processing. High stability.", image: "/images/products/side-hung-tube-cutter.png" },
  { name: "QCW Welding Machine", desc: "Quasi-continuous wave laser for thin materials. Minimal heat distortion, clean welds.", image: "/images/products/qcw-welder.jpg" },
  { name: "Water-Cooled Welding Machine", desc: "Water-cooled laser source for high-power continuous welding. 1500W–3000W.", image: null },
  { name: "Continuous Laser Cleaning Machine", desc: "High-power continuous laser for heavy-duty rust and coating removal.", image: null },
  { name: "Handheld Laser Cleaning Machine", desc: "Portable handheld design for on-site cleaning. Flexible and easy to operate.", image: null },
  { name: "Desktop Laser Marking Machine", desc: "Compact benchtop design for small parts marking. High precision and speed.", image: "/images/products/laser-marking-machine.png" },
  { name: "Cabinet Laser Marking Machine", desc: "Enclosed cabinet design with safety interlock. Ideal for production lines.", image: null },
  { name: "Flying Laser Marking Machine", desc: "Online flying mark for conveyor belt production. High-speed dynamic focusing.", image: null },
  { name: "Handheld Laser Marking Machine", desc: "Portable handheld marker for large or fixed workpieces. Flexible positioning.", image: null },
  { name: "Nitrogen Generator", desc: "On-site nitrogen supply for laser cutting assist gas. Reduce operating costs.", image: "/images/products/nitrogen-generator.jpg" },
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
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Complete range of fiber laser equipment for cutting, welding, cleaning, and marking.
              Built with world-class components for maximum performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Featured Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HQ26 Welder */}
            <Link href="/products/hq26a" className="group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] bg-[#162032] relative overflow-hidden">
                <img
                  src="/images/products/hq26a-air-cooled-welder.png"
                  alt="HQ26 Air-Cooled Laser Welder"
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162032]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold uppercase">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#3B82F6] transition-colors mb-2">
                  HQ26 Air-Cooled Laser Welder
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  No chiller, no water, no hassle. Revolutionary air-cooled technology for portable welding.
                </p>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                  <span>1000W - 2000W</span>
                  <span>|</span>
                  <span>Air-Cooled</span>
                  <span>|</span>
                  <span>Portable</span>
                </div>
              </div>
            </Link>

            {/* HQ-1530 Cutter */}
            <Link href="/products/hq1530" className="group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] bg-[#162032] relative overflow-hidden">
                <img
                  src="/images/products/3015-single-platform-fiber-cutter.jpg"
                  alt="HQ-1530 Fiber Laser Cutter"
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162032]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#00D4FF] text-[#0A1628] text-xs font-bold uppercase">
                  Hot Sale
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                  HQ-1530 Fiber Laser Cutter
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Fastest path to ROI. High-precision cutting with single platform table for stable performance.
                </p>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                  <span>1500W - 6000W</span>
                  <span>|</span>
                  <span>1500x3000mm</span>
                  <span>|</span>
                  <span>Single Platform</span>
                </div>
              </div>
            </Link>

            {/* Pulse Cleaning */}
            <Link href="/products/pulse-cleaning" className="group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] bg-[#162032] relative overflow-hidden">
                <img
                  src="/images/products/pulse-laser-cleaner.jpg"
                  alt="HQ Pulsed Laser Cleaning Machine"
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162032]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#00D4FF] text-[#0A1628] text-xs font-bold uppercase">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                  Pulsed Laser Cleaning Machine
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Non-contact cleaning. Remove rust, paint, oil without chemicals. No damage to substrate.
                </p>
                <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                  <span>100W - 500W</span>
                  <span>|</span>
                  <span>Air-Cooled</span>
                  <span>|</span>
                  <span>Non-Contact</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Product Lines */}
      <section className="py-20 bg-[#0F1B2D] border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">All Product Lines</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productLines.map((line) => (
              <div key={line.name} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-6">
                <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-[#1E3A5F]">
                  {line.name}
                </h3>
                <ul className="space-y-2.5">
                  {line.models.map((model) => (
                    <li key={model} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                      <svg className="w-3.5 h-3.5 shrink-0 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Products - Inquiry */}
      <section className="py-20 bg-[#0A1628] border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">More Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {moreProducts.map((product) => (
              <Link
                key={product.name}
                href="/contact"
                className="group bg-[#0F1B2D] border border-[#1E3A5F] rounded-sm overflow-hidden hover:border-[#3B82F6]/40 transition-all duration-200"
              >
                <div className="aspect-[4/3] bg-[#162032] flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-[#2A4A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-3 line-clamp-2">
                    {product.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#3B82F6]">
                    Inquire Now
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628] border-t border-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            We offer custom configurations and OEM/ODM services. Tell us your requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Our Engineers
          </Link>
        </div>
      </section>
    </>
  );
}
