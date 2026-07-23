import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Heqing CNC Equipment - 10+ years of laser equipment manufacturing. Professional fiber laser solutions for global markets.',
};

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Countries Served' },
  { value: '5000+', label: 'Machines Delivered' },
  { value: '200+', label: 'Team Members' },
];

const milestones = [
  { year: '2014', event: 'Company founded in Shandong, China' },
  { year: '2016', event: 'Launched first fiber laser cutting machine' },
  { year: '2018', event: 'Expanded to welding & cleaning product lines' },
  { year: '2020', event: 'Developed revolutionary air-cooled welding technology' },
  { year: '2022', event: 'Reached 3000+ machines delivered milestone' },
  { year: '2024', event: 'Serving customers in 50+ countries worldwide' },
];

const certifications = [
  { name: 'CE Certification', desc: 'European Conformity - Full compliance with EU safety standards' },
  { name: 'ISO 9001', desc: 'Quality Management System certified' },
  { name: 'SGS Verified', desc: 'Factory audited and verified by SGS' },
  { name: 'FDA Registration', desc: 'Registered with US FDA for laser products' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              About <span className="gradient-text">Heqing</span>
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Shandong Heqing CNC Equipment Co., Ltd. is a professional laser equipment manufacturer
              with over 10 years of experience. We specialize in fiber laser cutting, welding, cleaning,
              and marking machines for industrial applications worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#3B82F6] mb-2">{stat.value}</div>
                <div className="text-[#94A3B8] text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-8 bg-[#3B82F6]" />
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <div className="space-y-6 text-[#CBD5E1] leading-relaxed">
                <p>
                  Founded in 2014 in Shandong Province, China, Heqing CNC Equipment has grown from a small
                  workshop into a leading laser equipment manufacturer serving customers across 50+ countries.
                </p>
                <p>
                  Our journey began with a clear mission: to make high-quality laser equipment accessible
                  to manufacturers worldwide. We combine premium components from world-leading brands —
                  Raycus, IPG, CypCut, PRECITEC — with our own engineering expertise to deliver machines
                  that exceed expectations.
                </p>
                <p>
                  Today, our product range covers fiber laser cutting, welding, cleaning, and marking machines.
                  Our latest innovation — the HQ26-A air-cooled laser welder — represents a breakthrough
                  in portable welding technology, eliminating the need for external chillers.
                </p>
              </div>
            </div>
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-[#2A4A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-[#94A3B8] text-sm mt-4">Factory / Team Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-3xl font-bold text-white">Milestones</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-6 card-hover">
                <div className="text-2xl font-black text-[#3B82F6] mb-2">{m.year}</div>
                <p className="text-[#CBD5E1] text-sm">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose <span className="gradient-text">Heqing</span></h2>
            <p className="text-[#94A3B8] text-lg">What sets us apart from other manufacturers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Factory-Direct Pricing', desc: 'No middlemen. Get the best value directly from the manufacturer with transparent pricing.' },
              { title: 'Premium Components', desc: 'We only use world-class laser sources (Raycus/IPG), control systems (CypCut), and optics (PRECITEC).' },
              { title: 'Rigorous Testing', desc: 'Every machine undergoes 72-hour burn-in testing before shipping. Zero tolerance for quality issues.' },
              { title: 'Global After-Sales', desc: 'Remote support within 2 hours. On-site engineer dispatch to 50+ countries. Spare parts warehouse in key regions.' },
              { title: 'Custom Solutions', desc: 'OEM/ODM services available. Custom work areas, power configurations, and automation integration.' },
              { title: 'Fast Production', desc: 'Standard models ship in 7-15 days. Custom configurations in 20-30 days. No compromise on quality.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <div className="w-12 h-12 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-6 text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-2">{cert.name}</h3>
                <p className="text-[#94A3B8] text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
