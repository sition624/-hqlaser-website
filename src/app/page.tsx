import type { Metadata } from 'next';
import Link from 'next/link';
import HeroLaserSpark from '@/components/HeroLaserSpark';

export const metadata: Metadata = {
  title: 'HQ Laser - Design-Driven Laser Equipment Brand',
  description: 'Design-driven laser equipment brand with own R&D and assembly capabilities. Focused on handheld welders, compact cleaners, desktop markers. Small batch customization, fast response, technical after-sales.',
};

export default function HomePage() {
  return (
    <>
      {/* ===== 01 Hero ===== */}
      <section className="relative hero-gradient bg-grid overflow-hidden">
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

      {/* ===== 02 Design & Engineering ===== */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Designed In-House. <span className="gradient-text">Built for Real Work.</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-3xl mx-auto leading-relaxed">
              We believe a good laser machine should be more than powerful.
              It should be practical, reliable, easy to use, and designed around the way people actually work.
              From product design to engineering, assembly and testing, we stay involved throughout the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Product Design',
                desc: 'Practical structures, clean design and user-focused details.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                step: '02',
                title: 'Engineering',
                desc: 'Machine configuration developed around real processing requirements.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                step: '03',
                title: 'In-House Assembly',
                desc: 'Key assembly and quality checks completed by our own team.',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
              },
              {
                step: '04',
                title: 'Application Testing',
                desc: 'Machines tested with real materials and applications before delivery.',
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
              Discover Our Approach →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 03 Core Products ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Laser <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Focused Products. Practical Engineering.
            </p>
            <p className="text-[#94A3B8] text-base max-w-2xl mx-auto mt-2">
              We focus on a selected range of laser equipment designed for specific manufacturing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                name: 'Laser Welding',
                subtitle: 'Handheld & Compact Laser Welding',
                desc: 'Fast, clean and practical welding solutions for metal fabrication.',
                image: '/images/products/hq26a-air-cooled-welder.png',
                href: '/products/hq26a',
                accent: '#3B82F6',
              },
              {
                num: '02',
                name: 'Laser Marking',
                subtitle: 'Desktop & Fiber Laser Marking',
                desc: 'Compact marking solutions for precision identification, branding and traceability.',
                image: '/images/products/laser-marking-machine.png',
                href: '/contact',
                accent: '#00D4FF',
              },
              {
                num: '03',
                name: 'Laser Cleaning',
                subtitle: 'Compact Laser Cleaning',
                desc: 'Non-contact cleaning solutions for rust, paint, oil and surface preparation.',
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
                  <div className="absolute top-4 left-4 text-4xl font-bold text-[#3B82F6]/30">{product.num}</div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, ${product.accent}, #00D4FF)` }} />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#3B82F6] font-semibold uppercase tracking-wider mb-2">{product.subtitle}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    <span className="group-hover:text-[#3B82F6] transition-colors">{product.name}</span>
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-4">{product.desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-2" style={{ color: product.accent }}>
                    Explore {product.name} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 Why Work With HQ Laser ===== */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Work With <span className="gradient-text">HQ Laser?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Designed, Not Just Sourced',
                desc: 'We develop our products with our own design and engineering capabilities.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                title: 'Small-Batch Friendly',
                desc: 'From one machine to larger orders, we are flexible with configurations and production needs.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Application-Focused',
                desc: 'Tell us what you need to process. We help match the machine, power and configuration to your application.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Built for Your Market',
                desc: 'Private labeling, customized configurations and brand-ready documentation are available for selected models.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <div className="w-12 h-12 mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 05 From Design to Delivery ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Design to <span className="gradient-text">Delivery</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              One Product. One Process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Design', desc: 'Product structure, appearance and usability.' },
              { step: '02', title: 'Engineering', desc: 'Components, configuration and technical optimization.' },
              { step: '03', title: 'Assembly', desc: 'Professional assembly and inspection by our team.' },
              { step: '04', title: 'Testing', desc: 'Machine performance and application testing.' },
              { step: '05', title: 'Packaging', desc: 'Careful packaging prepared for international shipment.' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-6 pb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#162032] border border-[#3B82F6]/30 rounded-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#3B82F6]">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="absolute left-8 top-16 w-px h-8 bg-gradient-to-b from-[#3B82F6]/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 06 Applications ===== */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built Around Your <span className="gradient-text">Application</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              From small workshops to industrial production, our machines are designed for real manufacturing needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Metal Fabrication', desc: 'Stainless steel, carbon steel, aluminum and more.' },
              { name: 'Sheet Metal', desc: 'Cabinets, enclosures, panels and components.' },
              { name: 'Hardware', desc: 'Metal parts, tools and hardware products.' },
              { name: 'Automotive Parts', desc: 'Welding, marking and surface preparation.' },
              { name: 'Electronics', desc: 'Precision marking and identification.' },
              { name: 'General Manufacturing', desc: 'Flexible solutions for different production environments.' },
            ].map((app) => (
              <div
                key={app.name}
                className="group bg-[#162032] border border-[#1E3A5F] rounded-sm p-6 card-hover"
              >
                <div className="w-10 h-10 mb-4 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#3B82F6] group-hover:text-[#00D4FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">{app.name}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-outline">
              Tell Us About Your Application →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 07 Machine Tests ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See It Before You Buy It
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. See how our machines perform on real materials and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                videoId: 'hg14DxdRMDo',
                title: 'Stainless Steel Welding',
                material: 'Stainless Steel',
                thickness: 'Thin sheet',
                machine: 'HQ26 Handheld Welder',
                result: 'Clean bead, minimal post-processing',
              },
              {
                videoId: 'fh1Jn8Ko7TU',
                title: 'Aluminum Welding',
                material: 'Aluminum',
                thickness: 'Thin sheet',
                machine: 'HQ26 Handheld Welder',
                result: 'Smooth weld with strong penetration',
              },
              {
                videoId: 'aTzTLW1X2aQ',
                title: 'Carbon Steel Welding',
                material: 'Carbon Steel',
                thickness: 'Assembled parts',
                machine: 'HQ26 Handheld Welder',
                result: 'Solid weld on steel assemblies',
              },
              {
                videoId: 'yNKqPWh-hZM',
                title: 'Metal Surface Cleaning',
                material: 'Metal',
                thickness: 'Surface',
                machine: 'HQ Laser Cleaner',
                result: 'Rust & oxide removed without damaging base metal',
              },
              {
                videoId: 'OQIPy4A5XWg',
                title: 'Stone Surface Cleaning',
                material: 'Stone',
                thickness: 'Surface',
                machine: 'HQ Laser Cleaner',
                result: 'Dirt & weathering removed, no abrasion',
              },
              {
                videoId: '7IF62myLVdA',
                title: 'Wood Surface Cleaning',
                material: 'Wood',
                thickness: 'Surface',
                machine: 'HQ Laser Cleaner',
                result: 'Old finish removed without chemicals',
              },
            ].map((test) => (
              <div key={test.title} className="bg-[#162032] border border-[#1E3A5F] rounded-sm overflow-hidden card-hover">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${test.videoId}`}
                    title={test.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{test.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Material:</span>
                      <span className="text-white">{test.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Thickness:</span>
                      <span className="text-white">{test.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Machine:</span>
                      <span className="text-white">{test.machine}</span>
                    </div>
                    <div className="pt-2 border-t border-[#1E3A5F]">
                      <span className="text-[#94A3B8]">Result: </span>
                      <span className="text-[#3B82F6]">{test.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 08 Global Customers ===== */}
      <section className="py-24 bg-[#0F1B2D] border-y border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Manufacturers <span className="gradient-text">Worldwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { num: '80+', label: 'Countries', desc: 'Europe, North America, South America, Middle East, Southeast Asia' },
              { num: '2640+', label: 'Clients', desc: 'Small workshops to industrial manufacturers' },
              { num: '18', label: 'Patents', desc: 'Design and utility patents' },
              { num: '6+', label: 'Years', desc: 'Industry experience since 2019' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3B82F6] mb-2">{stat.num}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-[#94A3B8] text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Customer Case */}
          <div className="max-w-3xl mx-auto bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
            <div className="text-xs text-[#3B82F6] font-semibold uppercase tracking-wider mb-4">Customer Application</div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Country</div>
                <div className="text-white font-semibold">Germany</div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Industry</div>
                <div className="text-white font-semibold">Metal Fabrication</div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Machine</div>
                <div className="text-white font-semibold">1500W Handheld Laser Welder</div>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Challenge</div>
                <div className="text-[#CBD5E1]">Traditional welding required significant grinding and finishing work.</div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Solution</div>
                <div className="text-[#CBD5E1]">HQ Laser 1500W handheld laser welding system.</div>
              </div>
              <div>
                <div className="text-[#94A3B8] text-xs mb-1">Result</div>
                <div className="text-[#3B82F6]">Faster welding with reduced post-processing.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 09 Customization / OEM ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Something <span className="gradient-text">Different?</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              We Can Build Around Your Requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: 'Custom Configuration',
                desc: 'Choose the right laser source, power and components for your application.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
              },
              {
                title: 'Private Labeling',
                desc: 'Branding, packaging and documentation for your market.',
                icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
              },
              {
                title: 'Product Customization',
                desc: 'Appearance and functional adjustments for specific requirements.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                title: 'Small-Batch Orders',
                desc: 'Flexible production for distributors, workshops and growing brands.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8 card-hover">
                <div className="w-12 h-12 mb-6 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 10 Final CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/20 via-transparent to-[#3B82F6]/10" />
        <div className="absolute inset-0 bg-grid" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Find the Right Laser Solution
            <br />
            <span className="gradient-text">for Your Application</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg mb-4 max-w-2xl mx-auto">
            Tell us what you process, your material and your production requirements.
          </p>
          <p className="text-[#94A3B8] text-base mb-10 max-w-2xl mx-auto">
            We&apos;ll help you choose the right machine and configuration.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Discuss Your Application
            </Link>
            <a href="https://wa.me/8618953316699" className="btn-outline text-base px-10 py-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#94A3B8]">
            <span>Material</span>
            <span className="text-[#1E3A5F]">·</span>
            <span>Thickness</span>
            <span className="text-[#1E3A5F]">·</span>
            <span>Application</span>
            <span className="text-[#1E3A5F]">·</span>
            <span>Desired Result</span>
          </div>
        </div>
      </section>
    </>
  );
}
