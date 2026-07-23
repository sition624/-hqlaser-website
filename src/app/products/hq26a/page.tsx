import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ26-A Air-Cooled Laser Welder',
  description: 'HQ26-A portable air-cooled fiber laser welder. 800W-2000W. No chiller needed. Lightweight, energy-efficient, easy to operate.',
};

const models = [
  { name: 'HQ26-A08', power: '800W', weight: '28kg', thickness: '0.5-3mm', price: 'Contact Us' },
  { name: 'HQ26-A12', power: '1200W', weight: '32kg', thickness: '0.5-4mm', price: 'Contact Us' },
  { name: 'HQ26-A15', power: '1500W', weight: '35kg', thickness: '0.5-5mm', price: 'Contact Us' },
  { name: 'HQ26-A20', power: '2000W', weight: '40kg', thickness: '0.5-6mm', price: 'Contact Us' },
];

const specs = [
  { label: 'Laser Source', value: 'Raycus / MAX / JPT' },
  { label: 'Wavelength', value: '1064nm' },
  { label: 'Cooling Method', value: 'Air-Cooled (No chiller needed)' },
  { label: 'Welding Gun', value: 'SUP / Qilin Handheld' },
  { label: 'Wire Feeder', value: 'Automatic (0.8/1.0/1.2/1.6mm)' },
  { label: 'Fiber Length', value: '10m (customizable)' },
  { label: 'Power Supply', value: '220V / 50Hz / 60Hz' },
  { label: 'Working Temperature', value: '-10°C to 45°C' },
  { label: 'Humidity', value: '≤ 90% (non-condensing)' },
  { label: 'Protection Rating', value: 'IP54' },
];

const comparisons = [
  { feature: 'Cooling System', air: 'Air-Cooled (Built-in)', water: 'Water Chiller Required' },
  { feature: 'Weight', air: '28-40kg', water: '80-120kg (with chiller)' },
  { feature: 'Power Consumption', air: '≤ 2.5kW', water: '≤ 5kW (with chiller)' },
  { feature: 'Portability', air: 'Easy to move, one person', water: 'Requires forklift / cart' },
  { feature: 'Maintenance', air: 'Minimal, no water change', water: 'Regular water & filter change' },
  { feature: 'Operating Temp Range', air: '-10°C to 45°C', water: '5°C to 35°C (chiller limit)' },
  { feature: 'Setup Time', air: '5 minutes', water: '30+ minutes' },
  { feature: 'Outdoor Use', air: 'Yes', water: 'Limited (freezing risk)' },
];

export default function HQ26APage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#FFD60A]/30 rounded-sm mb-6">
                <span className="w-2 h-2 bg-[#FFD60A] rounded-full" />
                <span className="text-[#FFD60A] text-sm font-medium">FLAGSHIP PRODUCT</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                HQ26-A
                <br />
                <span className="gradient-text">Air-Cooled</span>
                <br />
                Laser Welder
              </h1>

              <p className="text-2xl text-[#00D4FF] font-semibold mb-6">
                No chiller. No water. No hassle.
              </p>

              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                The HQ26-A revolutionizes handheld laser welding with its innovative air-cooled design.
                60% lighter than traditional water-cooled welders, with 50% less power consumption.
                Take it anywhere — indoor, outdoor, on-site.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-[#111111] border border-[#222222] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD60A]/5 via-transparent to-[#00D4FF]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-[#666666] text-sm mt-4">HQ26-A Product Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FFD60A]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FFD60A]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#FFD60A]" />
            <h2 className="text-2xl font-bold text-white">Choose Your Model</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <div
                key={model.name}
                className={`bg-[#0a0a0a] border rounded-sm p-6 card-hover ${
                  i === 1 ? 'border-[#FFD60A] glow-yellow' : 'border-[#222222]'
                }`}
              >
                {i === 1 && (
                  <div className="text-[#FFD60A] text-xs font-bold uppercase mb-4 tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <div className="text-3xl font-black text-[#FFD60A] mb-4">{model.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Weight</span>
                    <span className="text-white font-mono">{model.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Weld Thickness</span>
                    <span className="text-white font-mono">{model.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Price</span>
                    <span className="text-[#FFD60A] font-semibold">{model.price}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${
                    i === 1
                      ? 'bg-[#FFD60A] text-[#0a0a0a] hover:bg-[#FFE44D]'
                      : 'border border-[#333333] text-white hover:border-[#FFD60A] hover:text-[#FFD60A]'
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section id="specs" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#111111] border border-[#222222] rounded-sm overflow-hidden">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec) => (
                    <tr key={spec.label}>
                      <td className="text-white font-medium">{spec.label}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Key Highlights</h3>
              {[
                { title: 'Raycus Laser Source', desc: 'World-class fiber laser source with 100,000+ hours lifespan. Stable output, high efficiency.' },
                { title: 'SUP Welding Gun', desc: 'Ergonomic design, lightweight, built-in safety features. Comfortable for all-day operation.' },
                { title: 'Air-Cooled Design', desc: 'No external chiller needed. Built-in air cooling system reduces weight by 60% and power by 50%.' },
                { title: 'Auto Wire Feeder', desc: 'Integrated automatic wire feeding system. Supports 4 wire diameters for versatile welding.' },
                { title: 'Smart Control Panel', desc: '7-inch touchscreen with preset welding parameters. Easy operation with minimal training.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-[#111111] border border-[#222222] rounded-sm p-5">
                  <div className="w-10 h-10 bg-[#1a1a1a] border border-[#00D4FF]/20 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-[#A0A0A0] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Air vs Water Comparison */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Air-Cooled vs Water-Cooled
            </h2>
            <p className="text-[#A0A0A0]">See why air-cooled is the future of handheld laser welding</p>
          </div>

          <div className="bg-[#0a0a0a] border border-[#222222] rounded-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#FFD60A]">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-[#FFD60A] rounded-full" />
                      HQ26-A Air-Cooled
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#666666]">
                    Traditional Water-Cooled
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-[#222222] last:border-0">
                    <td className="px-6 py-4 text-sm text-white font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#FFD60A] font-mono">{row.air}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#666666] font-mono">{row.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#FFD60A]" />
            <h2 className="text-2xl font-bold text-white">Applications</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Stainless Steel', 'Carbon Steel', 'Aluminum', 'Copper',
              'Galvanized Sheet', 'Kitchen Ware', 'Auto Parts', 'Pipe Welding',
            ].map((app) => (
              <div key={app} className="bg-[#111111] border border-[#222222] rounded-sm p-6 text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1a1a1a] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#A0A0A0]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Downloads</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'HQ26-A Product Catalog', type: 'PDF', size: '8.5 MB' },
              { name: 'Technical Specification Sheet', type: 'PDF', size: '2.1 MB' },
              { name: 'Operation Manual', type: 'PDF', size: '15.3 MB' },
            ].map((doc) => (
              <div key={doc.name} className="bg-[#0a0a0a] border border-[#222222] rounded-sm p-6 flex items-center gap-4 card-hover">
                <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333333] rounded-sm flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm truncate">{doc.name}</div>
                  <div className="text-[#666666] text-xs mt-0.5">{doc.type} • {doc.size}</div>
                </div>
                <button className="text-[#FFD60A] hover:text-[#FFE44D] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in the HQ26-A?
          </h2>
          <p className="text-[#A0A0A0] mb-8">
            Get a customized quote with the best factory price. Our engineers will help you choose the right model.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <a href="https://wa.me/8618800000000" className="btn-outline flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
