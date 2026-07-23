import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heqing Laser - Fiber Laser Cutting, Welding, Cleaning & Marking Solutions',
  description: 'Professional fiber laser equipment manufacturer. Cutting machines, welding machines, cleaning machines, and marking machines for global industrial applications.',
};

const productCategories = [
  {
    name: 'Laser Cutting Machines',
    desc: 'High-speed fiber laser cutting for sheets, tubes, and plates. From 1000W to 6000W.',
    image: '/images/products/3015-single-platform-fiber-cutter.jpg',
    models: ['HQ-1530 Fiber Laser Cutter', 'HQ-3015 Large Format Cutter', 'HQ-6020 Tube & Sheet Cutter', 'HQ-F6025 Fiber Tube Cutter'],
    href: '/products/hq1530',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Welding Machines',
    desc: 'Handheld & automated laser welders. Revolutionary air-cooled technology.',
    image: '/images/products/hq26a-air-cooled-welder.png',
    models: ['HQ26-A Air-Cooled Welder', 'HQ-HW Handheld Welder', 'HQ-AW Auto Welding System', 'HQ-CW CNC Welder'],
    href: '/products/hq26a',
    accent: '#3B82F6',
  },
  {
    name: 'Laser Cleaning Machines',
    desc: 'Non-contact surface cleaning. Remove rust, paint, oil, and contaminants.',
    image: '/images/products/pulse-laser-cleaner.jpg',
    models: ['HQ-CL100 100W Cleaner', 'HQ-CL200 200W Cleaner', 'HQ-CL300 300W Cleaner', 'HQ-CL500 500W Industrial'],
    href: '#',
    accent: '#00D4FF',
  },
  {
    name: 'Laser Marking Machines',
    desc: 'Permanent marking & engraving for metals, plastics, and more.',
    image: '/images/products/laser-marking-machine.png',
    models: ['HQ-M20 Fiber Marker', 'HQ-M30 UV Marker', 'HQ-M50 CO2 Marker', 'HQ-FLY Flying Marker'],
    href: '#',
    accent: '#00D4FF',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient bg-grid overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2740] border border-[#1E3A5F] rounded-sm mb-8">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                <span className="text-[#94A3B8] text-sm font-medium">10+ Years of Laser Excellence</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                Precision Laser
                <br />
                <span className="gradient-text">Solutions</span>
                <br />
                for Industry
              </h1>
              
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-10 max-w-lg">
                From cutting to welding, cleaning to marking — we deliver high-performance 
                fiber laser equipment built for demanding industrial applications worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-outline">
                  Request a Quote
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-8 border-t border-[#1E3A5F]">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">50+</div>
                  <div className="text-xs sm:text-sm text-[#94A3B8] mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">5000+</div>
                  <div className="text-xs sm:text-sm text-[#94A3B8] mt-1">Machines Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">10+</div>
                  <div className="text-xs sm:text-sm text-[#94A3B8] mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image with Laser Effect */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden relative">
                <img
                  src="/images/laser-cutting-hero.jpg"
                  alt="Heqing Fiber Laser Cutter in Action"
                  className="w-full h-full object-cover hero-image-breathe"
                />
                {/* Dark overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-[#0A1628]/20" />
                {/* Laser beam */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[65%] bg-gradient-to-b from-[#3B82F6]/0 via-[#3B82F6]/80 to-[#00D4FF] laser-beam" />
                {/* Laser impact glow */}
                <div className="absolute top-[63%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#00D4FF]/30 blur-md laser-beam" />
                <div className="absolute top-[64%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/60 blur-sm laser-beam" />
                {/* Spark particles */}
                <div className="absolute top-[62%] left-1/2 -translate-x-1/2">
                  <div className="spark spark-1" style={{ left: '0px', top: '0px' }} />
                  <div className="spark spark-2" style={{ left: '2px', top: '2px' }} />
                  <div className="spark spark-3" style={{ left: '-2px', top: '1px' }} />
                  <div className="spark spark-4" style={{ left: '1px', top: '3px' }} />
                  <div className="spark spark-5" style={{ left: '-1px', top: '-1px' }} />
                  <div className="spark spark-6" style={{ left: '3px', top: '0px' }} />
                  <div className="spark spark-7" style={{ left: '-3px', top: '2px' }} />
                </div>
                {/* Corner marks */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#3B82F6]/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#3B82F6]/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#3B82F6]/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#3B82F6]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Product <span className="gradient-text">Lines</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Comprehensive laser solutions for every industrial application
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="card-hover group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden"
              >
                <div className="aspect-[4/3] bg-[#162032] relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162032] via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, ${cat.accent}, #00D4FF)` }} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors" style={{ ['--hover-color' as string]: cat.accent }}>
                    <span className="group-hover:text-[#3B82F6] transition-colors">{cat.name.replace(' Machines', '').replace('Laser ', 'Laser ')}</span>
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">{cat.desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-2 transition-colors" style={{ color: cat.accent }}>
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="gradient-text">Heqing</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Trusted by manufacturers across 50+ countries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Best Value</h3>
              <p className="text-[#94A3B8] text-sm">Factory-direct pricing with premium quality components. Maximum ROI for your investment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-[#94A3B8] text-sm">Standard models ship within 7-15 days. Custom configurations in 20-30 days.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Service</h3>
              <p className="text-[#94A3B8] text-sm">Engineers available in 50+ countries. Remote support & on-site installation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">10+ Years</h3>
              <p className="text-[#94A3B8] text-sm">A decade of laser equipment manufacturing excellence and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Our laser solutions power manufacturing across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Automotive', icon: 'M8 17h8M8 17v4h8v-4M8 17l-2-6h12l-2 6M6 11V7a2 2 0 012-2h8a2 2 0 012 2v4' },
              { name: 'Aerospace', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
              { name: 'Electronics', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
              { name: 'Construction', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { name: 'Shipbuilding', icon: 'M3 17l2-8h14l2 8M3 17h18M3 17l-1 4h20l-1-4M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4' },
              { name: 'Medical', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
            ].map((industry) => (
              <div
                key={industry.name}
                className="group bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#1A2740] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3B82F6] group-hover:text-[#00D4FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg">What our global partners say about us</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "The HQ26-A welder transformed our production line. No chiller needed means less maintenance and more uptime. Excellent machine.",
                name: "Michael Schmidt",
                role: "Production Manager",
                company: "Schmidt Metalworks, Germany",
              },
              {
                quote: "Fast delivery and great after-sales support. The cutting precision of HQ-1530 exceeded our expectations. Highly recommended.",
                name: "Ahmed Al-Rashid",
                role: "CEO",
                company: "Al-Rashid Industries, UAE",
              },
              {
                quote: "We've purchased 15 machines over 3 years. Consistent quality, competitive pricing, and their engineers are always responsive.",
                name: "Carlos Mendez",
                role: "Procurement Director",
                company: "Mendez Fabricacion, Mexico",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-[#1E3A5F] pt-4">
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-[#94A3B8] text-xs mt-1">{testimonial.role}</div>
                  <div className="text-[#3B82F6] text-xs mt-0.5">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[#94A3B8] text-sm uppercase tracking-wider mb-10">
            Trusted Component Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['RAYCUS', 'CypCut', 'PRECITEC', 'RS-RS', 'HAN\'S LASER'].map((partner) => (
              <div key={partner} className="text-white font-bold text-xl tracking-wider">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/20 via-transparent to-[#3B82F6]/10" />
        <div className="absolute inset-0 bg-grid" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Upgrade Your
            <br />
            <span className="gradient-text">Production Line?</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-10 max-w-2xl mx-auto">
            Get a customized quote within 24 hours. Our engineers will help you find 
            the perfect laser solution for your specific application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Get Free Quote
            </Link>
            <a href="https://wa.me/8618953316699" className="btn-outline text-base px-10 py-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
