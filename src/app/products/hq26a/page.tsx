import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ26-A Air-Cooled Laser Welder',
  description: 'HQ26-A portable air-cooled fiber laser welder. 800W-2000W. No chiller needed.',
};

const models = [
  { name: 'HQ26-A08', power: '800W', weight: '28kg', thickness: '0.5-3mm' },
  { name: 'HQ26-A12', power: '1200W', weight: '32kg', thickness: '0.5-4mm' },
  { name: 'HQ26-A15', power: '1500W', weight: '35kg', thickness: '0.5-5mm' },
  { name: 'HQ26-A20', power: '2000W', weight: '40kg', thickness: '0.5-6mm' },
];

const specs = [
  { label: 'Laser Source', value: 'Raycus / MAX / JPT' },
  { label: 'Wavelength', value: '1064nm' },
  { label: 'Cooling Method', value: 'Air-Cooled (No chiller needed)' },
  { label: 'Welding Gun', value: 'SUP / Qilin Handheld' },
  { label: 'Wire Feeder', value: 'Automatic (0.8-1.6mm)' },
  { label: 'Fiber Length', value: '10m (customizable)' },
  { label: 'Power Supply', value: '220V / 50Hz / 60Hz' },
  { label: 'Working Temperature', value: '-10 to 45 deg C' },
  { label: 'Humidity', value: '<= 90% (non-condensing)' },
  { label: 'Protection Rating', value: 'IP54' },
];

const comparisons = [
  { feature: 'Cooling System', air: 'Air-Cooled (Built-in)', water: 'Water Chiller Required' },
  { feature: 'Weight', air: '28-40kg', water: '80-120kg (with chiller)' },
  { feature: 'Power Consumption', air: '<= 2.5kW', water: '<= 5kW (with chiller)' },
  { feature: 'Portability', air: 'Easy to move, one person', water: 'Requires forklift / cart' },
  { feature: 'Maintenance', air: 'Minimal, no water change', water: 'Regular water & filter change' },
  { feature: 'Operating Temp', air: '-10 to 45 deg C', water: '5 to 35 deg C (chiller limit)' },
  { feature: 'Setup Time', air: '5 minutes', water: '30+ minutes' },
  { feature: 'Outdoor Use', air: 'Yes', water: 'Limited (freezing risk)' },
];

const applications = [
  'Stainless Steel', 'Carbon Steel', 'Aluminum', 'Copper',
  'Galvanized Sheet', 'Titanium Alloy', 'Sheet Metal', 'Pipe Welding',
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2740] border border-[#3B82F6]/30 rounded-sm mb-6">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full" />
                <span className="text-[#3B82F6] text-sm font-medium">FLAGSHIP PRODUCT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                HQ26-A<br />
                <span className="gradient-text">Air-Cooled</span><br />
                Laser Welder
              </h1>
              <p className="text-2xl text-[#00D4FF] font-semibold mb-6">
                No chiller. No water. No hassle.
              </p>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
                The HQ26-A revolutionizes handheld laser welding with its innovative air-cooled design.
                60% lighter than traditional water-cooled welders, with 50% less power consumption.
                Take it anywhere — indoor, outdoor, on-site.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] bg-[#0F1B2D] border border-[#1E3A5F] rounded-sm overflow-hidden">
                <img
                  src="/images/products/hq26a-air-cooled-welder.png"
                  alt="HQ26-A Air-Cooled Laser Welder"
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#00D4FF]/10" />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#3B82F6]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#3B82F6]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-20 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Choose Your Model</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <div key={model.name} className={`bg-[#0A1628] border rounded-sm p-6 card-hover ${i === 1 ? 'border-[#3B82F6] glow-blue' : 'border-[#1E3A5F]'}`}>
                {i === 1 && <div className="text-[#3B82F6] text-xs font-bold uppercase mb-4 tracking-wider">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <div className="text-3xl font-black text-[#3B82F6] mb-4">{model.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Weight</span><span className="text-white font-mono">{model.weight}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Weld Thickness</span><span className="text-white font-mono">{model.thickness}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Price</span><span className="text-[#3B82F6] font-semibold">Contact Us</span></div>
                </div>
                <Link href="/contact" className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${i === 1 ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'border border-[#2A4A6B] text-white hover:border-[#3B82F6] hover:text-[#3B82F6]'}`}>
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Highlights */}
      <section id="specs" className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden">
              <table className="spec-table">
                <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label}><td className="text-white font-medium">{s.label}</td><td>{s.value}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Key Highlights</h3>
              {[
                { title: 'Raycus Laser Source', desc: 'World-class fiber laser source with 100,000+ hours lifespan. Stable output, high efficiency.' },
                { title: 'SUP Welding Gun', desc: 'Ergonomic design, lightweight, built-in safety features. Comfortable for all-day operation.' },
                { title: 'Air-Cooled Design', desc: 'No external chiller needed. Built-in air cooling reduces weight by 60% and power by 50%.' },
                { title: 'Auto Wire Feeder', desc: 'Integrated automatic wire feeding. Supports 4 wire diameters for versatile welding.' },
                { title: 'Smart Control Panel', desc: '7-inch touchscreen with preset welding parameters. Easy operation with minimal training.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-[#162032] border border-[#1E3A5F] rounded-sm p-5">
                  <div className="w-10 h-10 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Air vs Water Comparison */}
      <section className="py-20 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Air-Cooled vs Water-Cooled</h2>
            <p className="text-[#94A3B8]">See why air-cooled is the future of handheld laser welding</p>
          </div>
          <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#3B82F6]">
                    <div className="flex items-center justify-center gap-2"><span className="w-2 h-2 bg-[#3B82F6] rounded-full" />HQ26-A Air-Cooled</div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#94A3B8]">Traditional Water-Cooled</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-[#1E3A5F] last:border-0">
                    <td className="px-6 py-4 text-sm text-white font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#3B82F6] font-mono">{row.air}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#94A3B8] font-mono">{row.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Applications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app) => (
              <div key={app} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1A2740] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-sm font-medium text-[#94A3B8]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Downloads</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'HQ26-A Product Catalog', type: 'PDF', size: '4.2 MB' },
              { name: 'HQ26-A Technical Manual', type: 'PDF', size: '12.8 MB' },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1A2740] border border-[#2A4A6B] rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{doc.name}</div>
                    <div className="text-[#94A3B8] text-xs">{doc.type} - {doc.size}</div>
                  </div>
                </div>
                <button className="px-4 py-2 border border-[#2A4A6B] text-[#3B82F6] text-sm font-semibold rounded-sm hover:border-[#3B82F6] transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/20 via-transparent to-[#3B82F6]/10" />
        <div className="absolute inset-0 bg-grid" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in the <span className="gradient-text">HQ26-A</span>?
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-10">
            Get a customized quote with your specific requirements. Our engineers will help you choose the right model.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">Request a Quote</Link>
            <a href="https://wa.me/8618953316699" className="btn-outline text-base px-10 py-4">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
