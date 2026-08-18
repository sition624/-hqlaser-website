import type { Metadata } from 'next';
import Link from 'next/link';
import HeroLaserSpark from '@/components/HeroLaserSpark';
import ProductSchema from '@/components/ProductSchema';

const siteUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.hqlaser.com';

export const metadata: Metadata = {
  title: 'HQ Laser - Design-Driven Laser Equipment Brand',
  description: 'Design-driven laser equipment brand with own R&D and assembly capabilities. Focused on handheld welders, compact cleaners, desktop markers. Small batch customization, fast response, technical after-sales.',
};

export default function HomePage() {
  return (
    <>
      <ProductSchema siteUrl={siteUrl} />
      
      {/* ===== 第一屏：Hero ===== */}
      <section className="relative hero-gradient bg-grid overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A2740] border border-[#1E3A5F] rounded-sm mb-8">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                <span className="text-[#94A3B8] text-sm font-medium">6+ Years of Industry Expertise</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                Laser Machines,
                <br />
                <span className="gradient-text">Designed Around</span>
                <br />
                Real Applications
              </h1>
              
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-10 max-w-lg">
                We design and assemble practical laser equipment for manufacturers worldwide.
              </p>

              {/* Product tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['Laser Welding', 'Laser Marking', 'Laser Cleaning'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#1A2740] border border-[#1E3A5F] text-[#CBD5E1] text-sm font-medium rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary">
                  Explore Our Machines
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full">
              <HeroLaserSpark />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 第二屏：Design & Engineering ===== */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed In-House. <span className="gradient-text">Built for Real Work.</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              We don&apos;t simply source machines and put our name on them. Our products are developed through our own design, engineering, assembly and testing process — allowing us to build laser equipment around real production needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Product Design',
                desc: 'We focus on practical details, usability and a clean, functional design.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                step: '02',
                title: 'Engineering',
                desc: 'Our team develops and refines the machine structure and configuration.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                step: '03',
                title: 'In-House Assembly',
                desc: 'We assemble and inspect our machines in-house.',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
              },
              {
                step: '04',
                title: 'Application Testing',
                desc: 'Every configuration is tested for real processing applications before delivery.',
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

          <div className="text-center mt-12">
            <Link href="/about" className="btn-outline">
              See How We Build
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 第三屏：Core Products ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Laser <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Focused products. Practical engineering. Built around specific applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Handheld Laser Welding',
                desc: 'For metal fabrication, stainless steel, sheet metal and repair applications.',
                image: '/images/products/hq26a-air-cooled-welder.png',
                href: '/products/hq26a',
                accent: '#3B82F6',
              },
              {
                name: 'Desktop Laser Marking',
                desc: 'Compact marking solutions for manufacturers who need precision without unnecessary complexity.',
                image: '/images/products/laser-marking-machine.png',
                href: '/contact',
                accent: '#00D4FF',
              },
              {
                name: 'Compact Laser Cleaning',
                desc: 'Practical laser cleaning for surface preparation, rust removal and industrial maintenance.',
                image: '/images/products/pulse-laser-cleaner.jpg',
                href: '/products/pulse-cleaning',
                accent: '#00D4FF',
              },
            ].map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="card-hover group bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden"
              >
                <div className="aspect-[4/3] bg-[#162032] relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162032] via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, ${product.accent}, #00D4FF)` }} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <span className="group-hover:text-[#3B82F6] transition-colors">{product.name}</span>
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">{product.desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-2" style={{ color: product.accent }}>
                    Explore {product.name.split(' ').pop()} Solutions
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
              Why <span className="gradient-text">HQ Laser</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Design-driven brand with own R&D and assembly capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design-Driven</h3>
              <p className="text-[#94A3B8] text-sm">Own design language with 18 patents. Appearance design and software optimization.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Small Batch Friendly</h3>
              <p className="text-[#94A3B8] text-sm">MOQ 1 unit. Custom configurations welcome. We take orders big factories won't.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Response</h3>
              <p className="text-[#94A3B8] text-sm">2-hour remote support. 7-day delivery for standard models. Engineers, not salespeople.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Brand Consistency</h3>
              <p className="text-[#94A3B8] text-sm">Unified packaging, manuals, and videos. Professional brand experience for your customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality <span className="gradient-text">Control</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              6-step inspection process ensures every machine meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Raw Material Inspection', desc: 'All incoming materials undergo strict quality checks before entering production.' },
              { step: '02', title: 'Component Testing', desc: 'Laser source, cutting head, and key components tested with precision instruments.' },
              { step: '03', title: 'Assembly Inspection', desc: 'Each assembly stage verified by quality engineers with detailed documentation.' },
              { step: '04', title: 'Performance Testing', desc: 'Laser power meter, spectrometer, and interferometer validation of output quality.' },
              { step: '05', title: 'Aging Test', desc: '72-hour continuous operation test to ensure long-term stability and reliability.' },
              { step: '06', title: 'Final Inspection', desc: 'Comprehensive pre-shipment check including safety, precision, and packaging.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <div className="text-5xl font-bold text-[#3B82F6]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Testing Equipment */}
          <div className="mt-16 bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Testing Equipment</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Laser Power Meter', desc: 'Precise output measurement' },
                { name: 'Spectrometer', desc: 'Wavelength analysis' },
                { name: 'Interferometer', desc: 'Beam quality testing' },
                { name: 'Collimator', desc: 'Optical alignment' },
              ].map((equip) => (
                <div key={equip.name} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{equip.name}</div>
                  <div className="text-[#94A3B8] text-xs">{equip.desc}</div>
                </div>
              ))}
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
                quote: "The HQ26 welder transformed our production line. No chiller needed means less maintenance and more uptime. Excellent machine.",
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
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50">
            {[
              { name: 'RAYCUS', size: 'text-2xl' },
              { name: 'CypCut', size: 'text-xl' },
              { name: 'PRECITEC', size: 'text-xl' },
              { name: 'RayTools', size: 'text-xl' },
              { name: 'MAX', size: 'text-2xl' },
              { name: "HAN'S LASER", size: 'text-lg' },
            ].map((partner) => (
              <div key={partner.name} className={`text-white font-bold tracking-wider ${partner.size}`}>
                {partner.name}
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
