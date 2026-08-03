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

const testingTools = [
  {
    title: 'Laser Collimator',
    desc: 'Guide rail and toothed rack parallelism detection. Ensures precise alignment for cutting accuracy.',
    image: '/images/factory/testing-collimator.png',
  },
  {
    title: 'API Laser Interferometer',
    desc: 'US API laser interferometer for measuring positioning accuracy and repeatability positioning precision.',
    image: '/images/factory/testing-interferometer.png',
  },
  {
    title: 'API Ball Bar',
    desc: 'US API ball bar for comprehensive equipment precision detection and analysis.',
    image: '/images/factory/testing-ballbar.png',
  },
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
                src="/images/factory/company-overview.png"
                alt="HQ Laser Company Overview"
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
            <h2 className="text-3xl font-bold text-white">Production Process</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { img: '/images/factory/welding.jpg', label: 'Welding', cn: '焊接' },
              { img: '/images/factory/tempering.jpg', label: 'Tempering', cn: '回火' },
              { img: '/images/factory/milling.jpg', label: 'Milling', cn: '铣削' },
              { img: '/images/factory/painting.jpg', label: 'Painting', cn: '喷漆' },
              { img: '/images/factory/bending.jpg', label: 'Bending', cn: '折弯' },
              { img: '/images/factory/powder-coating.jpg', label: 'Powder Coating', cn: '喷塑' },
              { img: '/images/factory/assembly.jpg', label: 'Assembly', cn: '装配' },
              { img: '/images/factory/aging.jpg', label: 'Aging Test', cn: '老化' },
            ].map((process) => (
              <div key={process.label} className="relative group overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={process.img}
                    alt={process.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <p className="text-white font-semibold text-xs sm:text-sm">{process.cn}</p>
                  <p className="text-[#CBD5E1] text-[10px] sm:text-xs">{process.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Testing */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-3xl font-bold text-white">Quality Testing</h2>
          </div>
          <p className="text-[#94A3B8] text-lg mb-12 max-w-3xl">
            Every 0.01mm of precision comes from our persistence. Advanced testing instruments ensure positioning accuracy, parallelism, and comprehensive equipment precision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testingTools.map((tool) => (
              <div key={tool.title} className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5 border-t border-[#1E3A5F]">
                  <h3 className="text-base font-bold text-white mb-1.5">{tool.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
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

      {/* Quality Control & Testing Process */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-3xl font-bold text-white">Quality Control & Testing</h2>
          </div>
          <p className="text-[#94A3B8] mb-12 max-w-3xl">
            Every HQ Laser machine undergoes a rigorous 6-stage quality inspection process before shipping.
            Our testing center is equipped with laser power meters, spectrometers, interferometers, and collimators
            to ensure every product meets the highest standards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {[
              { step: '01', title: 'Raw Material Inspection', desc: 'All incoming materials undergo strict quality checks. Only certified components from approved suppliers enter production.' },
              { step: '02', title: 'Component Testing', desc: 'Individual components including laser sources, control systems, and optics are tested before assembly.' },
              { step: '03', title: 'Assembly Inspection', desc: 'In-process quality checks at each assembly stage. Precision alignment and calibration of all optical components.' },
              { step: '04', title: 'Performance Testing', desc: 'Full power testing with laser power meters and spectrometers. Cutting/welding samples to verify performance specifications.' },
              { step: '05', title: 'Aging Test', desc: '72-hour continuous burn-in testing under full load. Stress testing of all systems to ensure long-term reliability.' },
              { step: '06', title: 'Final Inspection', desc: 'Comprehensive final check including safety systems, software calibration, packaging inspection, and documentation review.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0A2463] rounded-sm flex items-center justify-center">
                    <span className="text-[#3B82F6] font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Testing Equipment */}
          <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6">Testing Equipment & Instruments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Laser Power Meter', desc: 'Precise measurement of laser output power and stability' },
                { name: 'Spectrometer', desc: 'Wavelength analysis and beam quality verification' },
                { name: 'Interferometer', desc: 'Optical path alignment and beam profile analysis' },
                { name: 'Collimator', desc: 'Beam collimation and focus quality testing' },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0A2463] rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                    <p className="text-[#94A3B8] text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Process Flow */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-3xl font-bold text-white">Shipping & Delivery</h2>
          </div>
          <p className="text-[#94A3B8] mb-12 max-w-2xl">
            Every machine undergoes a standardized shipping process to ensure safe delivery to your facility.
          </p>

          {/* Process Flow */}
          <div className="relative">
            {/* Connection Line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E3A5F] via-[#3B82F6] to-[#1E3A5F]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-[#162032] border-2 border-[#3B82F6] flex items-center justify-center mb-6 relative z-10">
                    <svg className="w-12 h-12 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-[#3B82F6] text-sm font-bold font-mono mb-2">STEP 01</div>
                  <h3 className="text-white font-bold text-lg mb-2">Final Inspection</h3>
                  <p className="text-[#94A3B8] text-sm">72-hour burn-in test and quality verification before packaging</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-[#162032] border-2 border-[#3B82F6] flex items-center justify-center mb-6 relative z-10">
                    <svg className="w-12 h-12 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-[#3B82F6] text-sm font-bold font-mono mb-2">STEP 02</div>
                  <h3 className="text-white font-bold text-lg mb-2">Professional Packaging</h3>
                  <p className="text-[#94A3B8] text-sm">Wooden crate packaging with moisture-proof and shock-proof protection</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-[#162032] border-2 border-[#3B82F6] flex items-center justify-center mb-6 relative z-10">
                    <svg className="w-12 h-12 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div className="text-[#3B82F6] text-sm font-bold font-mono mb-2">STEP 03</div>
                  <h3 className="text-white font-bold text-lg mb-2">Container Loading</h3>
                  <p className="text-[#94A3B8] text-sm">Professional forklift loading with secure fastening in container</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-[#162032] border-2 border-[#3B82F6] flex items-center justify-center mb-6 relative z-10">
                    <svg className="w-12 h-12 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-[#3B82F6] text-sm font-bold font-mono mb-2">STEP 04</div>
                  <h3 className="text-white font-bold text-lg mb-2">Global Delivery</h3>
                  <p className="text-[#94A3B8] text-sm">Shipped to 80+ countries with professional logistics partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Patents */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-3xl font-bold text-white">Certifications & Patents</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Certificate Images */}
            <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm overflow-hidden">
              <div className="p-6 border-b border-[#1E3A5F]">
                <h3 className="text-lg font-bold text-white">Quality Certifications</h3>
                <p className="text-[#94A3B8] text-sm mt-1">ISO 9001, CE, TÜV Rheinland Certified</p>
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
            <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-6">
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
