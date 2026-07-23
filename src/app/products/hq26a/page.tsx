import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ26 Air-Cooled Laser Welder | 1000W-2000W | Portable & Lightweight',
  description: 'HQ26 portable air-cooled fiber laser welding machine. 4 power options: 1000W/1200W/1500W/2000W. Raycus laser source, IP65, no chiller needed.',
};

const models = [
  { name: 'HQ26-1000W', power: '1000W', thickness: '0.5-3mm', price: 'Contact Us' },
  { name: 'HQ26-1200W', power: '1200W', thickness: '0.5-4mm', price: 'Contact Us' },
  { name: 'HQ26-1500W', power: '1500W', thickness: '0.5-5mm', price: 'Contact Us' },
  { name: 'HQ26-2000W', power: '2000W', thickness: '0.5-6mm', price: 'Contact Us' },
];

const specs = [
  { label: 'Model', value: 'HQ26 Series' },
  { label: 'Laser Source', value: 'Raycus Fiber Laser' },
  { label: 'Wavelength', value: '1064nm' },
  { label: 'Laser Power Options', value: '1000W / 1200W / 1500W / 2000W' },
  { label: 'Cooling Method', value: 'Air-Cooled (No chiller needed)' },
  { label: 'Electro-Optical Efficiency', value: '30%+' },
  { label: 'Laser Diode Lifespan', value: '100,000 hours' },
  { label: 'Ingress Protection', value: 'IP65' },
  { label: 'Operating Temperature', value: '-10 ~ 40°C' },
  { label: 'Welding Gun', value: 'Handheld (ergonomic design)' },
  { label: 'Wire Feeder', value: 'Automatic (0.8-1.6mm)' },
  { label: 'Fiber Length', value: '10m (customizable)' },
  { label: 'Power Supply', value: '220V / 50Hz / 60Hz' },
  { label: 'Continuous Operation', value: '7×24h' },
  { label: 'System Stability Rate', value: '99.9%' },
  { label: 'Response Time', value: '0.1s' },
];

const comparisons = [
  { feature: 'Cooling System', air: 'Air-Cooled (Built-in)', water: 'Water Chiller Required' },
  { feature: 'Protection Rating', air: 'IP65', water: 'IP54 or lower' },
  { feature: 'Power Consumption', air: 'Low (no chiller)', water: 'High (chiller + laser)' },
  { feature: 'Portability', air: 'Caster wheels, carry handles', water: 'Heavy, requires forklift' },
  { feature: 'Maintenance', air: 'Minimal, no water change', water: 'Regular water & filter change' },
  { feature: 'Operating Temp', air: '-10 ~ 40°C', water: '5 ~ 35°C (chiller limit)' },
  { feature: 'Setup Time', air: '5 minutes', water: '30+ minutes' },
  { feature: 'Outdoor Use', air: 'Yes', water: 'Limited (freezing risk)' },
];

const applications = [
  'Sheet Metal Fabrication', 'Pipe & Tube Welding', 'Doors & Windows',
  'Hardware Products', 'Kitchen Equipment', 'Advertising Signs',
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
                HQ26<br />
                <span className="gradient-text">Air-Cooled</span><br />
                Laser Welder
              </h1>
              <p className="text-2xl text-[#00D4FF] font-semibold mb-6">
                Lightweight. Maximum Power.
              </p>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
                The HQ26 revolutionizes handheld laser welding with its innovative air-cooled design.
                No external chiller needed — built-in air cooling delivers reliable performance
                in a portable package. Precise welds, clean finish, engineered for industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden">
                <img
                  src="/images/products/hq26a-air-cooled-welder.png"
                  alt="HQ26 Air-Cooled Laser Welder"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <div key={model.name} className={`bg-[#0A1628] border rounded-sm p-6 card-hover ${i === 2 ? 'border-[#3B82F6] glow-blue' : 'border-[#1E3A5F]'}`}>
                {i === 2 && <div className="text-[#3B82F6] text-xs font-bold uppercase mb-4 tracking-wider">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <div className="text-3xl font-black text-[#3B82F6] mb-4">{model.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Weld Thickness</span><span className="text-white font-mono">{model.thickness}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Price</span><span className="text-[#3B82F6] font-semibold">{model.price}</span></div>
                </div>
                <Link href="/contact" className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${i === 2 ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'border border-[#2A4A6B] text-white hover:border-[#3B82F6] hover:text-[#3B82F6]'}`}>
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
                { title: 'Raycus Fiber Laser Source', desc: 'Trusted Chinese laser brand. 100,000+ hours diode lifespan, 30%+ electro-optical efficiency. High beam quality for stable, consistent welding.' },
                { title: 'Air-Cooled for Reliability', desc: 'No external chiller needed. Built-in air cooling system. IP65 protection rating. Operates in -10~40°C environments.' },
                { title: 'Precise Welds. Clean Finish.', desc: 'Minimal heat affected zone, no discoloration, smooth and clean weld seam. 3-5x faster than TIG welding.' },
                { title: 'Auto Wire Feeder', desc: 'Integrated automatic wire feeding system. Supports 0.8-1.6mm wire diameters for versatile welding applications.' },
                { title: 'Intelligent Monitoring System', desc: 'Real-time temperature monitoring, fault alarm with error codes, safety interlock, and welding parameter data recording.' },
                { title: 'Portable & Lightweight', desc: 'Compact design with caster wheels and carry handles. One person can move it. Setup in 5 minutes.' },
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
                    <div className="flex items-center justify-center gap-2"><span className="w-2 h-2 bg-[#3B82F6] rounded-full" />HQ26 Air-Cooled</div>
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/20 via-transparent to-[#3B82F6]/10" />
        <div className="absolute inset-0 bg-grid" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in the <span className="gradient-text">HQ26</span>?
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
