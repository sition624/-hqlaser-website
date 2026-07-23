import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HQ-1530 Fiber Laser Cutter | 1500W-6000W | $10,000-$45,000',
  description: 'HQ-1530 high-speed fiber laser cutting machine. 1500×3000mm working area, single platform table, up to 120m/min rapid traverse. 1500W/3000W/6000W power options. FOB China price from $10,000.',
};

const powerOptions = [
  { power: '1500W', speed: '25 m/min', thickness: '0.5–10mm (SS) / 0.5–14mm (CS)', price: '$10,000–15,000' },
  { power: '3000W', speed: '35 m/min', thickness: '0.5–16mm (SS) / 0.5–20mm (CS)', price: '$18,000–25,000' },
  { power: '6000W', speed: '40 m/min', thickness: '0.5–25mm (SS) / 0.5–30mm (CS)', price: '$30,000–45,000' },
];

const specs = [
  { label: 'Model', value: 'HQ-1530' },
  { label: 'Working Area', value: '1500 × 3000mm (5×10 ft)' },
  { label: 'Laser Source', value: 'Raycus / IPG / MAX Photonics' },
  { label: 'Laser Power', value: '1500W / 3000W / 6000W' },
  { label: 'Laser Wavelength', value: '1064nm' },
  { label: 'Cutting Speed', value: 'Max 40 m/min' },
  { label: 'Max Rapid Traverse', value: '120 m/min' },
  { label: 'Positioning Accuracy', value: '±0.03mm' },
  { label: 'Repeatability', value: '±0.02mm' },
  { label: 'Max Cutting Thickness', value: '30mm (MS) / 25mm (SS) / 16mm (AL)' },
  { label: 'Work Table', value: 'Single Platform Table' },
  { label: 'Control System', value: 'CypCut BC100S / PA8000' },
  { label: 'Cutting Head', value: 'PRECITEC / Raytools Auto-Focus' },
  { label: 'Servo Motor', value: 'HIWIN / Yaskawa' },
  { label: 'Guide Rail', value: 'HIWIN Linear Guide' },
  { label: 'Cooling', value: 'Water Chiller CW-5200 / CW-6200' },
  { label: 'Power Supply', value: '380V ± 10% / 50Hz / 60Hz' },
  { label: 'Machine Weight', value: '≈ 3000 kg' },
  { label: 'Machine Dimensions', value: '8200 × 4200 × 1800mm' },
];

const cuttingSpeeds = [
  { material: 'Stainless Steel', t1mm: '40', t2mm: '22', t3mm: '14', t6mm: '6', t8mm: '3.5', t10mm: '2.5', t12mm: '1.8' },
  { material: 'Carbon Steel', t1mm: '45', t2mm: '28', t3mm: '18', t6mm: '10', t8mm: '6', t10mm: '4', t12mm: '2.5' },
  { material: 'Aluminum', t1mm: '35', t2mm: '18', t3mm: '12', t6mm: '5', t8mm: '3', t10mm: '2', t12mm: '—' },
  { material: 'Copper', t1mm: '28', t2mm: '14', t3mm: '8', t6mm: '3', t8mm: '1.5', t10mm: '—', t12mm: '—' },
  { material: 'Galvanized Steel', t1mm: '38', t2mm: '20', t3mm: '13', t6mm: '5.5', t8mm: '3', t10mm: '2', t12mm: '1.5' },
  { material: 'Brass', t1mm: '25', t2mm: '12', t3mm: '7', t6mm: '2.5', t8mm: '1.2', t10mm: '—', t12mm: '—' },
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
                HQ-1530<br />
                <span className="gradient-text">Fiber Laser</span><br />
                Cutter
              </h1>
              <p className="text-2xl text-[#00D4FF] font-semibold mb-6">
                Fastest path to ROI.
              </p>
              <p className="text-[#CBD5E1] text-lg leading-relaxed mb-8">
                The HQ-1530 delivers industrial-grade cutting precision at an unbeatable price point.
                With a rigid single platform work table for stable cutting performance, and rapid traverse
                speed up to 120 m/min. Available in 1500W, 3000W, and 6000W — cut stainless steel up to 25mm
                and carbon steel up to 30mm.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <a href="#specs" className="btn-outline">View Specs</a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden">
                <img
                  src="/images/products/3015-single-platform-fiber-cutter.jpg"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {powerOptions.map((opt, i) => (
              <div key={opt.power} className={`bg-[#0A1628] border rounded-sm p-6 card-hover ${i === 1 ? 'border-[#00D4FF] glow-cyan' : 'border-[#1E3A5F]'}`}>
                {i === 1 && <div className="text-[#00D4FF] text-xs font-bold uppercase mb-4 tracking-wider">Most Popular</div>}
                <div className="text-3xl font-black text-[#00D4FF] mb-4">{opt.power}</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Cutting Speed</span><span className="text-white font-mono">{opt.speed}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">SS Thickness</span><span className="text-white font-mono">{opt.thickness.split(' / ')[0]}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">CS Thickness</span><span className="text-white font-mono">{opt.thickness.split(' / ')[1]}</span></div>
                  <div className="flex justify-between"><span className="text-[#94A3B8]">Price Range</span><span className="text-[#00D4FF] font-semibold">{opt.price}</span></div>
                </div>
                <Link href="/contact" className={`block text-center mt-6 py-3 rounded-sm font-semibold text-sm transition-colors ${i === 1 ? 'bg-[#00D4FF] text-[#0A1628] hover:bg-[#00B8E6]' : 'border border-[#2A4A6B] text-white hover:border-[#00D4FF] hover:text-[#00D4FF]'}`}>
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
                { title: 'Raycus / IPG / MAX Laser Source', desc: 'Premium fiber laser generator with 100,000+ hours lifespan. Electro-optical conversion efficiency up to 30%.' },
                { title: 'CypCut BC100S Control System', desc: 'Industry-leading CNC controller with auto-nesting, edge detection, and path optimization. Supports DXF/PLT/AI formats.' },
                { title: 'Single Platform Work Table', desc: 'Heavy-duty steel welded platform with blade table. High rigidity and stability for precise cutting. Easy slag cleaning and maintenance.' },
                { title: 'PRECITEC / Raytools Auto-Focus Head', desc: 'Capacitive height sensing with auto-focus. Maintains optimal focal position for consistent cut quality at high speed.' },
                { title: 'HIWIN / Yaskawa Servo Drive', desc: 'Japanese precision AC servo motors. Smooth acceleration up to 1.5G, ensuring high dynamic cutting performance.' },
                { title: 'Raytools Cutting Head', desc: 'QBH connector, collimating/focusing lens protection. Compatible with Raycus, IPG, MAX sources.' },
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
            <p className="text-[#94A3B8]">Speed values in m/min at 2000W fiber laser power (approximate)</p>
          </div>
          <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Material</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">1mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">2mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">3mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">6mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">8mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">10mm</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#00D4FF]">12mm</th>
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
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t10mm}</td>
                    <td className="px-4 py-4 text-sm text-center text-[#CBD5E1] font-mono">{row.t12mm}</td>
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
