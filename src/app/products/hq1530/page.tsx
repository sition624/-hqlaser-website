import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ-1530 Fiber Laser Cutter',
  description: 'HQ-1530 high-speed fiber laser cutting machine. 1000W-3000W. Exchange table for non-stop production.',
};

const powerOptions = [
  { power: '1000W', speed: '20m/min', thickness: '0.5-12mm (SS)', price: 'Contact Us' },
  { power: '1500W', speed: '25m/min', thickness: '0.5-16mm (SS)', price: 'Contact Us' },
  { power: '2000W', speed: '30m/min', thickness: '0.5-20mm (SS)', price: 'Contact Us' },
  { power: '3000W', speed: '35m/min', thickness: '0.5-25mm (SS)', price: 'Contact Us' },
];

const specs = [
  { label: 'Working Area', value: '1500 x 3000mm' },
  { label: 'Laser Source', value: 'Raycus / IPG / MAX' },
  { label: 'Laser Power', value: '1000W / 1500W / 2000W / 3000W' },
  { label: 'Cutting Speed', value: 'Up to 35m/min' },
  { label: 'Positioning Accuracy', value: '+/- 0.03mm' },
  { label: 'Repositioning Accuracy', value: '+/- 0.02mm' },
  { label: 'Max Rapid Speed', value: '60m/min' },
  { label: 'Work Table', value: 'Exchange Table (Dual)' },
  { label: 'Control System', value: 'CypCut / PA8000' },
  { label: 'Cooling', value: 'Water Chiller (CW-5200/6200)' },
  { label: 'Power Supply', value: '380V / 50Hz / 60Hz' },
  { label: 'Machine Weight', value: '3500kg' },
];

const cuttingSpeeds = [
  { material: 'Stainless Steel', t1mm: '35', t2mm: '20', t3mm: '14', t6mm: '7', t8mm: '4' },
  { material: 'Carbon Steel', t1mm: '40', t2mm: '25', t3mm: '18', t6mm: '10', t8mm: '6' },
  { material: 'Aluminum', t1mm: '30', t2mm: '18', t3mm: '12', t6mm: '5', t8mm: '3' },
  { material: 'Copper', t1mm: '25', t2mm: '15', t3mm: '10', t6mm: '4', t8mm: '2' },
  { material: 'Galvanized', t1mm: '35', t2mm: '20', t3mm: '14', t6mm: '7', t8mm: '4' },
];

const applications = [
  'Sheet Metal Fabrication', 'Automotive Parts', 'Kitchen Equipment', 'Electrical Enclosures',
  'Signage & Lettering', 'Pipe & Tube Cutting', 'Architectural Metal', 'Industrial Machinery',
];

export default function HQ1530Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2740] border border-[#00D4FF]/30 rounded-sm mb-6">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                <span className="text-[#00D4FF] text-sm font-medium">BEST SELLER</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                HQ-1530<br />
                <span className="gradient-text">Fiber Laser</span><br />
                Cutter
              </h1>
              <p className="text-2xl text-[#00D4FF] font-semibold mb-6">
                Fastest path to ROI.
              </p>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
                The HQ-1530 delivers industrial-grade cutting precision at an unbeatable price point.
                With exchange table technology, dual work tables swap in 15 seconds for non-stop production.
                Cut through steel up to 25mm with 3000W power.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] bg-[#0F1B2D] border border-[#1E3A5F] rounded-sm overflow-hidden">
                <img
                  src="/images/products/3015-dual-platform-fiber-cutter.png"
                  alt="HQ-1530 Fiber Laser Cutter"
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#3B82F6]/10" />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00D4FF]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00D4FF]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Options */}
      <section className="py-20 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Power Options</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerOptions.map((opt, i) => (
              <div key={opt.power} className={`bg-[#0A1628] border rounded-sm p-6 card-hover ${i === 2 ? 'border-[#00D4FF] glow-cyan' : 'border-[#1E3A5F]'}`}>
                {i === 2 && <div className="text-[#00D4FF] text-xs font-bold uppercase mb-4 tracking-wider">Recommended</div>}
                <div className="text-3xl font-black text-[#00D4FF] mb-4">{opt.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Cutting Speed</span><span className="text-white font-mono">{opt.speed}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">SS Thickness</span><span className="text-white font-mono">{opt.thickness}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Price</span><span className="text-[#00D4FF] font-semibold">Contact Us</span></div>
                </div>
                <Link href="/contact" className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${i === 2 ? 'bg-[#00D4FF] text-[#0A1628] hover:bg-[#00B8E6]' : 'border border-[#2A4A6B] text-white hover:border-[#00D4FF] hover:text-[#00D4FF]'}`}>
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Components */}
      <section id="specs" className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
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
              <h3 className="text-xl font-bold text-white mb-6">Core Components</h3>
              {[
                { title: 'Raycus / IPG Laser Source', desc: 'Premium fiber laser source with 100,000+ hours lifespan. Top-tier beam quality.' },
                { title: 'CypCut Control System', desc: 'Industry-leading CNC system. Intuitive interface with auto-nesting and path optimization.' },
                { title: 'Exchange Work Table', desc: 'Dual table design swaps in 15 seconds. Load material while cutting continues. Zero downtime.' },
                { title: 'PRECITEC Cutting Head', desc: 'Auto-focus laser head with capacitive height sensing. Consistent cut quality at high speed.' },
                { title: 'HIWIN Servo Motors', desc: 'Japanese precision servo drive system. Smooth acceleration, high positioning accuracy.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-[#162032] border border-[#1E3A5F] rounded-sm p-5">
                  <div className="w-10 h-10 bg-[#1A2740] border border-[#00D4FF]/20 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
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

      {/* Cutting Speed Table */}
      <section className="py-20 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cutting Speed Reference</h2>
            <p className="text-[#94A3B8]">Speed values in m/min at 2000W power (approximate)</p>
          </div>
          <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Material</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">1mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">2mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">3mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">6mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">8mm</th>
                </tr>
              </thead>
              <tbody>
                {cuttingSpeeds.map((row) => (
                  <tr key={row.material} className="border-b border-[#1E3A5F] last:border-0">
                    <td className="px-6 py-4 text-sm text-white font-medium">{row.material}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t1mm}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t2mm}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t3mm}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t6mm}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t8mm}</td>
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
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Applications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app) => (
              <div key={app} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1A2740] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121" /></svg>
                </div>
                <span className="text-sm font-medium text-[#94A3B8]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/20 via-transparent to-[#00D4FF]/10" />
        <div className="absolute inset-0 bg-grid" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start <span className="gradient-text">Cutting</span>?
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-10">
            Get a customized quote with your material and thickness requirements.
            Our engineers will recommend the optimal power configuration.
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
