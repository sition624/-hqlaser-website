import type { Metadata } from 'next';
import Link from 'next/link';
import OrganizationSchema from '@/components/OrganizationSchema';

const siteUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.heqingcnc.com';

export const metadata: Metadata = {
  title: 'About HQ Laser | Design-Driven Laser Brand',
  description: 'HQ Laser - Design-driven laser equipment brand with own R&D and assembly capabilities. 18 patents, serving 2640+ clients across 80+ countries.',
};

const stats = [
  { value: '18', label: 'Patents Held' },
  { value: '80+', label: 'Countries Served' },
  { value: '2640+', label: 'Clients Served' },
  { value: '6+', label: 'Years Experience' },
];

const milestones = [
  { year: '2019', event: 'Company founded in Shandong, China by R&D-focused founder' },
  { year: '2020', event: 'Established R&D Design Center, filed first batch of patents' },
  { year: '2021', event: 'Expanded product lines to welding, cleaning, and marking' },
  { year: '2022', event: 'Products exported to 50+ countries, built global service network' },
  { year: '2023', event: 'Reached 18 patents, products exported to 80+ countries' },
  { year: '2024', event: 'Became trusted laser solution provider for global manufacturers' },
];

const certifications = [
  { name: 'ISO', desc: 'International Organization for Standardization' },
  { name: 'CE', desc: 'European Conformity' },
  { name: 'FDA', desc: 'US Food and Drug Administration' },
];

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema siteUrl={siteUrl} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              About <span className="gradient-text">HQ Laser</span>
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Design-driven laser equipment brand with own R&D and assembly capabilities since 2019. 
              18 patents, focused on handheld welders, compact cleaners, and desktop markers. 
              Small batch customization, fast response, technical after-sales.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3B82F6] mb-2">{stat.value}</div>
                <div className="text-[#94A3B8] text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                  Founded in 2019 in Shandong Province, China, HQ Laser was established by a founder with
                  deep technical R&D background. From day one, we have been committed to design, research,
                  and assembly — building a laser equipment brand with our own design language and quality standards.
                </p>
                <p>
                  Our company operates a dedicated R&D Design Center and has obtained 18 patents covering
                  appearance design, machine structures, and control systems. We focus on handheld laser welders,
                  compact cleaning machines, and desktop marking machines — products where design and user experience matter.
                </p>
                <p>
                  Today, our equipment has been exported to 80+ countries and regions worldwide, providing reliable laser solutions for global manufacturers. From small workshops to industrial production, we help customers solve real processing challenges.
                </p>
              </div>
            </div>
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden aspect-[4/3]">
              <img
                src="/images/factory/building-exterior.png"
                alt="HQ Laser Factory Building - Shandong Heqing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design & Engineering */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed In-House. <span className="gradient-text">Built for Real Work.</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-3xl mx-auto leading-relaxed">
              We don't simply source machines and put our name on them. Our products are developed through our own design, engineering, assembly and testing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Product Design',
                desc: 'Practical structures, clean design and user-focused details. We focus on usability and a functional aesthetic.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                step: '02',
                title: 'Engineering',
                desc: 'Machine configuration developed around real processing requirements. Components selected for reliability and performance.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                step: '03',
                title: 'In-House Assembly',
                desc: 'Key assembly and quality checks completed by our own team. Precision alignment and calibration of all components.',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
              },
              {
                step: '04',
                title: 'Application Testing',
                desc: 'Machines tested with real materials and applications before delivery. Performance verified for your specific use case.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <div className="text-5xl font-bold text-[#3B82F6]/20 mb-4">{item.step}</div>
                <div className="w-12 h-12 mb-4 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose <span className="gradient-text">HQ Laser</span></h2>
            <p className="text-[#94A3B8] text-lg">Design-driven brand with own R&D and assembly capabilities</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: 'Design-Driven', desc: 'Own design language with 18 patents. Appearance design and software optimization for better user experience.' },
              { title: 'Small Batch Friendly', desc: 'MOQ 1 unit. Custom configurations welcome. We take orders that big factories won\'t accept.' },
              { title: 'Fast Response', desc: '2-hour remote support. 7-day delivery for standard models. Engineers respond, not salespeople.' },
              { title: 'Software Optimized', desc: 'English UI interface. User-friendly control system. Unified brand experience across all touchpoints.' },
              { title: 'Technical After-Sales', desc: 'Engineers provide support, not just sales team. Remote diagnostics and video guidance available.' },
              { title: 'Brand Consistency', desc: 'Unified packaging, manuals, and videos. Professional brand experience for your end customers.' },
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

      {/* Milestones */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-3xl font-bold text-white">Milestones</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 card-hover">
                <div className="text-2xl font-black text-[#3B82F6] mb-2">{m.year}</div>
                <p className="text-[#CBD5E1] text-sm">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-3xl font-bold text-white">Certifications & Patents</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Certificate Images */}
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden">
              <div className="p-6 border-b border-[#1E3A5F]">
                <h3 className="text-lg font-bold text-white">Quality Certifications</h3>
                <p className="text-[#94A3B8] text-sm mt-1">ISO, CE, FDA</p>
              </div>
              <div className="p-6">
                <img
                  src="/images/factory/certifications.png"
                  alt="Heqing Laser Certifications - CE, ISO 9001, TÜV Rheinland"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Patents */}
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6">
              <h3 className="text-lg font-bold text-white mb-6">18 Patents Held</h3>
              <div className="space-y-4">
                {[
                  { type: 'Utility Models', count: '12', desc: 'Laser cutting head designs, cooling systems, machine structures' },
                  { type: 'Design Patents', count: '4', desc: 'Product appearance designs, user interface layouts' },
                  { type: 'Invention Patents', count: '2', desc: 'Novel laser processing methods and control algorithms' },
                ].map((item) => (
                  <div key={item.type} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0A2463] rounded-sm flex items-center justify-center shrink-0">
                      <span className="text-[#3B82F6] font-bold text-lg">{item.count}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.type}</h4>
                      <p className="text-[#94A3B8] text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#1E3A5F]">
                <p className="text-[#CBD5E1] text-sm">
                  Our R&D center continuously innovates in laser processing technology,
                  holding 18 patents covering machine design, control systems, and processing methods.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 text-center card-hover">
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

      {/* CTA */}
      <section className="py-24 bg-[#0F1B2D] border-t border-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With a <span className="gradient-text">Design-Driven Partner?</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-10 max-w-2xl mx-auto">
            Tell us about your application. We'll help you choose the right machine and configuration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Application
            </Link>
            <a href="https://wa.me/8618953316699" target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
