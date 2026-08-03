import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | HQ Laser',
  description: 'HQ Laser - R&D-driven laser equipment manufacturer since 2019. 18 patents, advanced testing lab, serving LG, CNOOC, Geely Auto and 2640+ clients across 80+ countries.',
};

const stats = [
  { value: '18', label: 'Patents Held' },
  { value: '80+', label: 'Countries Served' },
  { value: '2640+', label: 'Clients Served' },
  { value: '120+', label: 'Countries & Regions' },
];

const milestones = [
  { year: '2019', event: 'Company founded in Shandong, China by R&D-focused founder' },
  { year: '2020', event: 'Established R&D Design Center, filed first batch of patents' },
  { year: '2021', event: 'Expanded product lines to cutting, welding, cleaning, and marking' },
  { year: '2022', event: 'Served major clients including LG, CNOOC, Geely Auto' },
  { year: '2023', event: 'Reached 18 patents, products exported to 80+ countries' },
  { year: '2024', event: 'Became trusted laser solution provider for global markets' },
];

const certifications = [
  { name: 'CE Certification', desc: 'European Conformity - Full compliance with EU safety standards' },
  { name: 'ISO 9001', desc: 'Quality Management System certified' },
  { name: 'FDA Registration', desc: 'Registered with US FDA for laser products' },
  { name: 'TÜV Rheinland', desc: 'German TÜV Rheinland certified for product safety' },
  { name: '18 Patents', desc: 'Authorized invention and utility model patents' },
];

const shippingPhotos = [
  { src: '/images/factory/shipping-1.jpg', alt: 'Machine shipping preparation 1' },
  { src: '/images/factory/shipping-2.jpg', alt: 'Machine shipping preparation 2' },
  { src: '/images/factory/shipping-3.jpg', alt: 'Machine shipping preparation 3' },
  { src: '/images/factory/shipping-4.jpg', alt: 'Machine loading for delivery' },
  { src: '/images/factory/shipping-5.jpg', alt: 'Container loading' },
  { src: '/images/factory/shipping-6.jpg', alt: 'Machine packed for shipping' },
  { src: '/images/factory/shipping-7.jpg', alt: 'Final inspection before shipping' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              About <span className="gradient-text">HQ Laser</span>
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              R&D-driven laser equipment manufacturer since 2019. 18 patents, advanced testing lab
              with laser power meters, spectrometers, and interferometers. Trusted by LG, CNOOC,
              Geely Auto, and 2640+ clients across 80+ countries worldwide.
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
                  Founded in 2019 in Shandong Province, China, HQ Laser was established by a founder with
                  deep technical R&D background. From day one, we have been committed to research, design,
                  production, and quality control — ensuring every machine meets the highest standards
                  and becomes a product our customers trust.
                </p>
                <p>
                  Our company operates a dedicated R&D Design Center and has obtained 18 patents. We are
                  equipped with advanced testing instruments including laser power meters, spectrometers,
                  interferometers, and collimating lenses. This ensures every product design follows
                  ergonomic principles and meets strict quality standards before leaving our factory.
                </p>
                <p>
                  Our products have served renowned enterprises and institutions including Korea LG,
                  China National Offshore Oil Corporation (CNOOC), Geely Automobile, Haixi Group, and
                  Shandong University laboratories. Today, our equipment has been exported to 80+ countries
                  and regions worldwide, providing reliable laser solutions for global manufacturers.
                </p>
              </div>
            </div>
            <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden aspect-[4/3]">
              <img
                src="/images/factory/workshop-overview.jpg"
                alt="Heqing Factory Workshop Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Factory & Production */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-3xl font-bold text-white">Factory & Production</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/factory/production-line.jpg"
                  alt="Production Line"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm">Production Line</h3>
                <p className="text-[#94A3B8] text-xs mt-1">Modern assembly line with strict quality control</p>
              </div>
            </div>
            <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/factory/worker-assembly.jpg"
                  alt="Worker Assembly"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm">Assembly Workshop</h3>
                <p className="text-[#94A3B8] text-xs mt-1">Skilled technicians assembling laser equipment</p>
              </div>
            </div>
            <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/factory/worker-welding.jpg"
                  alt="Worker Welding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm">Welding Station</h3>
                <p className="text-[#94A3B8] text-xs mt-1">Precision welding for machine frame construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A1628]">
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

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose <span className="gradient-text">Heqing</span></h2>
            <p className="text-[#94A3B8] text-lg">What sets us apart from other manufacturers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: 'Factory-Direct Pricing', desc: 'No middlemen. Get the best value directly from the manufacturer with transparent pricing.' },
              { title: 'Premium Components', desc: 'We only use world-class laser sources (Raycus/IPG), control systems (CypCut), and optics (PRECITEC).' },
              { title: 'Rigorous Testing', desc: 'Every machine undergoes 72-hour burn-in testing before shipping. Zero tolerance for quality issues.' },
              { title: 'Global After-Sales', desc: 'Remote support within 2 hours. On-site engineer dispatch to 50+ countries. Spare parts warehouse in key regions.' },
              { title: 'Custom Solutions', desc: 'OEM/ODM services available. Custom work areas, power configurations, and automation integration.' },
              { title: 'Fast Production', desc: 'Standard models ship in 7-15 days. Custom configurations in 20-30 days. No compromise on quality.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-8 card-hover">
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

      {/* Shipping Gallery */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-3xl font-bold text-white">Shipping & Delivery</h2>
          </div>
          <p className="text-[#94A3B8] mb-8 max-w-2xl">
            Every machine is carefully packaged and inspected before shipping. We deliver to ports worldwide with professional logistics partners.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {shippingPhotos.map((photo, i) => (
              <div key={i} className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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

          {/* Certificate Image */}
          <div className="mb-12 bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden">
            <img
              src="/images/certificates/certifications.svg"
              alt="Heqing Laser Certifications - CE, ISO 9001, SGS, FDA"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
