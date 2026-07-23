import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ-1530 Fiber Laser Cutter',
  description: 'HQ-1530 high-speed fiber laser cutting machine. 1000W-3000W. 1500x3000mm working area. Exchange table for non-stop production.',
};

const powerOptions = [
  { power: '1000W', speed: '30m/min', thickness: '12mm', price: '$$' },
  { power: '1500W', speed: '40m/min', thickness: '16mm', price: '$$$' },
  { power: '2000W', speed: '50m/min', thickness: '20mm', price: '$$$$' },
  { power: '3000W', speed: '60m/min', thickness: '25mm', price: '$$$$$' },
];

const specs = [
  { label: 'Working Area', value: '1500 × 3000mm (5×10 ft)' },
  { label: 'Laser Source', value: 'Raycus / IPG / MAX' },
  { label: 'Laser Power', value: '1000W / 1500W / 2000W / 3000W' },
  { label: 'Wavelength', value: '1064nm' },
  { label: 'Positioning Accuracy', value: '±0.03mm' },
  { label: 'Repositioning Accuracy', value: '±0.02mm' },
  { label: 'Max Rapid Speed', value: '60m/min (3000W)' },
  { label: 'Max Acceleration', value: '1.5G' },
  { label: 'Supported Materials', value: 'Carbon steel, stainless steel, aluminum, copper, brass' },
  { label: 'Control System', value: 'CypCut / PA8000' },
  { label: 'Cooling', value: 'Water chiller (S&A / Hanli)' },
  { label: 'Power Supply', value: '380V / 50Hz / 60Hz (3-phase)' },
  { label: 'Exchange Table', value: 'Standard (auto swap in 15s)' },
  { label: 'Protection Cover', value: 'Full enclosed (CE compliant)' },
];

const cuttingSpeeds = [
  { material: 'Carbon Steel', '1000W': '12m/min', '1500W': '16m/min', '2000W': '20m/min', '3000W': '25m/min', thickness: '6mm' },
  { material: 'Stainless Steel', '1000W': '10m/min', '1500W': '14m/min', '2000W': '18m/min', '3000W': '22m/min', thickness: '6mm' },
  { material: 'Aluminum', '1000W': '6m/min', '1500W': '8m/min', '2000W': '12m/min', '3000W': '16m/min', thickness: '6mm' },
  { material: 'Copper', '1000W': '4m/min', '1500W': '6m/min', '2000W': '8m/min', '3000W': '12m/min', thickness: '4mm' },
  { material: 'Galvanized Sheet', '1000W': '8m/min', '1500W': '12m/min', '2000W': '15m/min', '3000W': '20m/min', thickness: '4mm' },
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#00D4FF]/30 rounded-sm mb-6">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                <span className="text-[#00D4FF] text-sm font-medium">HIGH-PERFORMANCE CUTTER</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                HQ-1530
                <br />
                <span className="gradient-text-cyan">Fiber Laser</span>
                <br />
                Cutter
              </h1>

              <p className="text-2xl text-[#FFD60A] font-semibold mb-6">
                Fastest path to ROI.
              </p>

              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                High-speed, high-precision fiber laser cutting with automatic exchange table.
                Cut through steel up to 25mm thick at blazing speeds. Full enclosure for operator safety.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-[#111111] border border-[#222222] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#FFD60A]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                    <p className="text-[#666666] text-sm mt-4">HQ-1530 Product Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00D4FF]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00D4FF]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Options */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Power Options</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerOptions.map((opt, i) => (
              <div
                key={opt.power}
                className={`bg-[#0a0a0a] border rounded-sm p-6 card-hover ${
                  i === 2 ? 'border-[#00D4FF] glow-cyan' : 'border-[#222222]'
                }`}
              >
                {i === 2 && (
                  <div className="text-[#00D4FF] text-xs font-bold uppercase mb-4 tracking-wider">
                    Best Value
                  </div>
                )}
                <div className="text-3xl font-black text-[#00D4FF] mb-4">{opt.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Max Speed</span>
                    <span className="text-white font-mono">{opt.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Max Thickness</span>
                    <span className="text-white font-mono">{opt.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Price Range</span>
                    <span className="text-[#00D4FF] font-mono">{opt.price}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${
                    i === 2
                      ? 'bg-[#00D4FF] text-[#0a0a0a] hover:bg-[#33DDFF]'
                      : 'border border-[#333333] text-white hover:border-[#00D4FF] hover:text-[#00D4FF]'
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#FFD60A]" />
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
                { title: 'Raycus / IPG Laser Source', desc: 'Premium fiber laser source with superior beam quality. 100,000+ hours operational lifespan.' },
                { title: 'CypCut Control System', desc: 'Industry-leading CNC system with nesting software. Intuitive interface, powerful capabilities.' },
                { title: 'Auto Exchange Table', desc: 'Automatic worktable exchange in 15 seconds. Load/unload while cutting — zero downtime.' },
                { title: 'Full Enclosure Design', desc: 'CE-compliant fully enclosed cutting area. Maximum operator safety with observation window.' },
                { title: 'Precitec Cutting Head', desc: 'Auto-focus laser head with capacitive sensing. Consistent cut quality across all materials.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-[#111111] border border-[#222222] rounded-sm p-5">
                  <div className="w-10 h-10 bg-[#1a1a1a] border border-[#FFD60A]/20 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Cutting Speed Table */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cutting Speed Reference</h2>
            <p className="text-[#A0A0A0]">Approximate cutting speeds at different power levels</p>
          </div>

          <div className="bg-[#0a0a0a] border border-[#222222] rounded-sm overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#222222]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Material</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#666666]">1000W</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#666666]">1500W</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#FFD60A]">2000W</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#00D4FF]">3000W</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Thickness</th>
                </tr>
              </thead>
              <tbody>
                {cuttingSpeeds.map((row) => (
                  <tr key={row.material} className="border-b border-[#222222] last:border-0">
                    <td className="px-6 py-4 text-sm text-white font-medium">{row.material}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#A0A0A0] font-mono">{row['1000W']}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#A0A0A0] font-mono">{row['1500W']}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#FFD60A] font-mono">{row['2000W']}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#00D4FF] font-mono">{row['3000W']}</td>
                    <td className="px-6 py-4 text-sm text-center text-[#666666] font-mono">{row.thickness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#666666] text-xs mt-4 text-center">
            * Speeds are approximate and may vary based on material grade, assist gas, and cutting quality requirements.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Applications</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Sheet Metal Fabrication', 'Auto Body Parts', 'Kitchen Equipment', 'HVAC Ductwork',
              'Electrical Enclosures', 'Decorative Panels', 'Structural Steel', 'Pipe Cutting',
            ].map((app) => (
              <div key={app} className="bg-[#111111] border border-[#222222] rounded-sm p-6 text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1a1a1a] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#A0A0A0]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Cut with Precision?
          </h2>
          <p className="text-[#A0A0A0] mb-8">
            Get a customized quote for the HQ-1530. Tell us your material, thickness, and production volume.
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
