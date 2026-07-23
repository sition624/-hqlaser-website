import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Heqing CNC Equipment - 10+ years of laser equipment manufacturing excellence. Professional fiber laser solutions for global industry.',
};

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
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              Shandong Heqing CNC Equipment Co., Ltd. — a professional laser equipment manufacturer 
              with over 10 years of experience, dedicated to providing high-quality, cost-effective 
              laser solutions to customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-8 bg-[#FFD60A]" />
                <h2 className="text-2xl font-bold text-white">Company Overview</h2>
              </div>

              <div className="space-y-6 text-[#A0A0A0] leading-relaxed">
                <p>
                  Founded in Shandong, China, <span className="text-white font-semibold">Heqing CNC Equipment Co., Ltd.</span> has 
                  grown from a regional workshop to a globally recognized laser equipment brand. With a state-of-the-art 
                  manufacturing facility spanning over 10,000 square meters, we design, produce, and export fiber laser 
                  machines to more than 50 countries.
                </p>
                <p>
                  Our product portfolio covers four major categories: <span className="text-[#FFD60A]">fiber laser cutting machines</span>, 
                  <span className="text-[#FFD60A]"> laser welding machines</span>, <span className="text-[#00D4FF]">laser cleaning machines</span>, and 
                  <span className="text-[#00D4FF]"> laser marking machines</span>. Each product line is engineered with world-class 
                  components from Raycus, IPG, CypCut, and Precitec.
                </p>
                <p>
                  We believe in delivering <span className="text-white">maximum value</span> — combining competitive factory-direct pricing 
                  with reliable performance and comprehensive after-sales support. Every machine undergoes rigorous 
                  72-hour testing before shipment.
                </p>
              </div>
            </div>

            {/* Company Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-[#111111] border border-[#222222] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD60A]/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-[#666666] text-sm mt-4">Factory / Company Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years of Experience', sub: 'Since 2014' },
              { value: '50+', label: 'Countries Served', sub: 'Global reach' },
              { value: '5000+', label: 'Machines Delivered', sub: 'And counting' },
              { value: '10,000m²', label: 'Factory Area', sub: 'Modern facility' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-[#0a0a0a] border border-[#222222] rounded-sm">
                <div className="text-4xl font-black text-[#FFD60A] mb-2">{stat.value}</div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-[#666666] text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Strength */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Factory Strength</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'R&D Team', desc: '20+ engineers dedicated to product development and innovation. 15+ patents in laser technology.' },
              { title: 'Production Line', desc: 'Automated assembly lines with strict quality control at every stage. ISO 9001 certified.' },
              { title: 'Quality Testing', desc: 'Every machine undergoes 72-hour continuous running test before shipment. 100% inspection rate.' },
              { title: 'Supply Chain', desc: 'Direct partnerships with Raycus, IPG, CypCut, Precitec for premium components at competitive costs.' },
              { title: 'Customization', desc: 'OEM/ODM services available. Custom configurations, branding, and special requirements welcome.' },
              { title: 'After-Sales', desc: '24/7 online support. Remote diagnostics. On-site installation and training available worldwide.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#111111] border border-[#222222] rounded-sm p-6 card-hover">
                <div className="w-10 h-10 bg-[#1a1a1a] border border-[#00D4FF]/20 rounded-sm flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#111111] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Heqing Laser</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Factory-Direct Pricing',
                desc: 'As a manufacturer, we eliminate middlemen. You get the best price for premium quality machines, maximizing your ROI.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Proven Reliability',
                desc: '10+ years in the industry with 5000+ machines deployed globally. Our machines run 24/7 in demanding environments.',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              },
              {
                title: 'Rapid Delivery',
                desc: 'Standard models ship within 7-15 business days. Custom orders in 20-30 days. We respect your production schedule.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Comprehensive Support',
                desc: 'From pre-sale consultation to installation, training, and lifetime technical support. We are your long-term partner.',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 bg-[#0a0a0a] border border-[#222222] rounded-sm p-8">
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#FFD60A]/20 rounded-sm flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#FFD60A]" />
            <h2 className="text-2xl font-bold text-white">Certifications & Compliance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['CE', 'ISO 9001', 'FDA', 'SGS', 'CQC', 'IPG Certified'].map((cert) => (
              <div key={cert} className="bg-[#111111] border border-[#222222] rounded-sm p-6 text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#1a1a1a] rounded-full border border-[#333333] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#A0A0A0]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with Heqing Laser
          </h2>
          <p className="text-[#A0A0A0] mb-8">
            Whether you need a single machine or want to become a distributor, we are ready to support your business growth.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
