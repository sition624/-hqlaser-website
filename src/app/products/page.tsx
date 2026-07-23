import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Heqing Laser full range of fiber laser cutting, welding, cleaning, and marking machines.',
};

const productCategories = [
  {
    name: 'Laser Cutting Machines',
    desc: 'High-speed fiber laser cutting for sheets, tubes, and plates. From 1000W to 6000W.',
    models: ['HQ-1530 Fiber Laser Cutter', 'HQ-3015 Large Format Cutter', 'HQ-6020 Tube & Sheet Cutter', 'HQ-F6025 Fiber Tube Cutter'],
    href: '/products/hq1530',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Welding Machines',
    desc: 'Handheld & automated laser welders. Revolutionary air-cooled technology.',
    models: ['HQ26-A Air-Cooled Welder', 'HQ-HW Handheld Welder', 'HQ-AW Auto Welding System', 'HQ-CW CNC Welder'],
    href: '/products/hq26a',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Cleaning Machines',
    desc: 'Non-contact surface cleaning. Remove rust, paint, oil, and contaminants.',
    models: ['HQ-CL100 100W Cleaner', 'HQ-CL200 200W Cleaner', 'HQ-CL300 300W Cleaner', 'HQ-CL500 500W Industrial'],
    href: '#',
    accent: '#00D4FF',
  },
  {
    name: 'Laser Marking Machines',
    desc: 'Permanent marking & engraving for metals, plastics, and more.',
    models: ['HQ-M20 Fiber Marker', 'HQ-M30 UV Marker', 'HQ-M50 CO2 Marker', 'HQ-FLY Flying Marker'],
    href: '#',
    accent: '#00D4FF',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* HQ26-A */}
            <Link href="/products/hq26a" className="group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[16/10] bg-[#1A2740] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent" />
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto text-[#2A4A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-[#94A3B8] text-sm mt-2">HQ26-A Product Image</p>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold uppercase">
                  Best Seller
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors mb-2">
                  HQ26-A Air-Cooled Laser Welder
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  No chiller, no water, no hassle. Revolutionary air-cooled technology for portable welding.
                </p>
                <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                  <span>800W - 2000W</span>
                  <span>|</span>
                  <span>Air-Cooled</span>
                  <span>|</span>
                  <span>Portable</span>
                </div>
              </div>
            </Link>

            {/* HQ-1530 */}
            <Link href="/products/hq1530" className="group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[16/10] bg-[#1A2740] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent" />
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto text-[#2A4A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                  <p className="text-[#94A3B8] text-sm mt-2">HQ-1530 Product Image</p>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#00D4FF] text-[#0A1628] text-xs font-bold uppercase">
                  Hot Sale
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                  HQ-1530 Fiber Laser Cutter
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Fastest path to ROI. High-precision cutting with exchange table for non-stop production.
                </p>
                <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                  <span>1000W - 3000W</span>
                  <span>|</span>
                  <span>1500×3000mm</span>
                  <span>|</span>
                  <span>Exchange Table</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-20 bg-[#0F1B2D] border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">All Product Lines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((cat) => (
              <div key={cat.name} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.accent }} />
                </div>
                <p className="text-[#94A3B8] text-sm mb-6">{cat.desc}</p>
                <ul className="space-y-3 mb-6">
                  {cat.models.map((model) => (
                    <li key={model} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                      <svg className="w-4 h-4 shrink-0" style={{ color: cat.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {model}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: cat.accent }}
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
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
