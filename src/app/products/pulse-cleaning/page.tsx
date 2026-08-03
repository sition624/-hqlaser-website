import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Droplets, Clock, Gauge, CheckCircle, Download, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pulsed Laser Cleaning Machine | HQ Laser',
  description: 'Non-contact pulsed laser cleaning machine for rust removal, paint stripping, oxide cleaning. 100W-500W options. No chemicals, no damage to substrate.',
};

const models = [
  { power: '100W', model: 'HQ-CL100', price: '$5,000 - $8,000', desc: 'Light-duty cleaning, ideal for small workshops and precision work.' },
  { power: '200W', model: 'HQ-CL200', price: '$8,000 - $12,000', desc: 'Medium-duty cleaning, balanced performance for most industrial applications.' },
  { power: '300W', model: 'HQ-CL300', price: '$12,000 - $18,000', desc: 'Heavy-duty cleaning, high efficiency for large surface areas.' },
  { power: '500W', model: 'HQ-CL500', price: '$18,000 - $28,000', desc: 'Industrial-grade cleaning, maximum power for demanding applications.' },
];

const specs = [
  { label: 'Laser Type', value: 'Pulsed Fiber Laser' },
  { label: 'Laser Power', value: '100W / 200W / 300W / 500W' },
  { label: 'Wavelength', value: '1064nm' },
  { label: 'Pulse Frequency', value: '20 - 200 kHz' },
  { label: 'Pulse Width', value: '< 100ns' },
  { label: 'Cleaning Area', value: 'Up to 500mm × 500mm' },
  { label: 'Cleaning Speed', value: 'Up to 15 m²/h (500W)' },
  { label: 'Cooling', value: 'Air-Cooled' },
  { label: 'Control System', value: 'Touch Screen + Handheld Scanner' },
  { label: 'Power Supply', value: 'AC 220V / 50Hz / 60Hz' },
  { label: 'Protection', value: 'IP65' },
  { label: 'Laser Source Brand', value: 'Raycus / MAX' },
  { label: 'Laser Lifespan', value: '100,000+ hours' },
  { label: 'Machine Weight', value: '≈ 80 - 150kg (varies by model)' },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Non-Contact Cleaning',
    desc: 'Laser beam removes contaminants without touching the substrate. No mechanical stress, no surface damage.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'No Chemicals Required',
    desc: 'Environmentally friendly process. No solvents, no abrasives, no hazardous waste disposal needed.',
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Precision Control',
    desc: 'Adjustable power and frequency for different materials. Clean rust, paint, oil, oxide layers precisely.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'High Efficiency',
    desc: 'Up to 15 m²/h cleaning speed at 500W. 5-10x faster than traditional sandblasting or chemical methods.',
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Air-Cooled Design',
    desc: 'No external chiller needed. Compact, portable, and ready to use in any workshop environment.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Wide Applications',
    desc: 'Rust removal, paint stripping, weld pre-treatment, mold cleaning, heritage restoration, and more.',
  },
];

const applications = [
  { name: 'Rust Removal', desc: 'Remove rust from steel structures, pipes, and metal surfaces efficiently.' },
  { name: 'Paint Stripping', desc: 'Strip old paint layers from automotive, aerospace, and industrial parts.' },
  { name: 'Weld Pre-Treatment', desc: 'Clean oxide layers and contaminants before welding for better weld quality.' },
  { name: 'Mold Cleaning', desc: 'Clean injection molds and die-cast molds without damaging precision surfaces.' },
  { name: 'Heritage Restoration', desc: 'Gentle cleaning of historical artifacts, sculptures, and architectural elements.' },
  { name: 'Electronic Components', desc: 'Precision cleaning of PCB boards, connectors, and electronic assemblies.' },
];

export default function PulseCleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-[#94A3B8] mb-6">
            <Link href="/products" className="hover:text-[#3B82F6] transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#CBD5E1]">Pulsed Laser Cleaning Machine</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Pulsed Laser <span className="gradient-text">Cleaning Machine</span>
              </h1>
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
                Non-contact pulsed laser cleaning for rust removal, paint stripping, and surface preparation.
                No chemicals, no damage to substrate. Environmentally friendly and highly efficient.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-[#0A2463]/50 border border-[#1E3A5F] text-[#3B82F6] text-sm rounded">100W - 500W</span>
                <span className="px-3 py-1 bg-[#0A2463]/50 border border-[#1E3A5F] text-[#3B82F6] text-sm rounded">Air-Cooled</span>
                <span className="px-3 py-1 bg-[#0A2463]/50 border border-[#1E3A5F] text-[#3B82F6] text-sm rounded">Non-Contact</span>
                <span className="px-3 py-1 bg-[#0A2463]/50 border border-[#1E3A5F] text-[#3B82F6] text-sm rounded">IP65</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#specs" className="btn-outline inline-flex items-center gap-2">
                  View Specifications
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-[#162032] rounded overflow-hidden border border-[#1E3A5F]">
                <img
                  src="/images/products/pulse-laser-cleaner.jpg"
                  alt="HQ Pulsed Laser Cleaning Machine"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#3B82F6]/10 rounded blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-[#0F1B2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Why Pulsed Laser Cleaning?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-hover p-6 bg-[#162032] border border-[#1E3A5F] rounded">
                <div className="w-12 h-12 bg-[#0A2463]/50 rounded flex items-center justify-center text-[#3B82F6] mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Power Options */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Power Options</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((m, i) => (
              <div key={i} className="card-hover relative bg-[#162032] border border-[#1E3A5F] rounded p-6 text-center">
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#3B82F6] text-white text-xs font-bold rounded">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl font-black text-white mb-1">{m.power}</div>
                <div className="text-sm text-[#94A3B8] mb-3">{m.model}</div>
                <p className="text-sm text-[#CBD5E1] mb-4 leading-relaxed">{m.desc}</p>
                <div className="text-lg font-bold text-[#3B82F6] mb-4">{m.price}</div>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    i === 2
                      ? 'text-white bg-[#3B82F6] px-4 py-2 rounded'
                      : 'text-[#3B82F6] hover:text-white'
                  }`}
                >
                  Get Quote <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-20 bg-[#0F1B2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {specs.map((s, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-[#1E3A5F]">
                <span className="text-[#94A3B8] text-sm">{s.label}</span>
                <span className="text-white font-medium text-sm font-mono">{s.value}</span>
              </div>
            ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="card-hover p-6 bg-[#162032] border border-[#1E3A5F] rounded">
                <div className="w-10 h-10 bg-[#0A2463]/50 rounded flex items-center justify-center text-[#00D4FF] mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F1B2D]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Cleaning Process?</h2>
          <p className="text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Contact our team for a customized solution. We&apos;ll help you choose the right power and configuration for your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/86" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
