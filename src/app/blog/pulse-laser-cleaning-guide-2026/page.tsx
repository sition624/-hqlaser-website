import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pulse Laser Cleaning Machine: Complete Guide for Industrial Applications (2026) | HQ Laser',
  description: 'Everything you need to know about pulsed laser cleaning technology. Benefits, applications, how to choose, and HQ Laser solutions. Expert guide from HQ Laser.',
  keywords: ['pulse laser cleaning', 'laser cleaning machine', 'rust removal', 'paint stripping', 'surface treatment', 'laser cleaning guide 2026'],
  openGraph: {
    title: 'Pulse Laser Cleaning Machine: Complete Guide for Industrial Applications (2026)',
    description: 'Comprehensive guide to pulsed laser cleaning technology, applications, and how to choose the right machine.',
    type: 'article',
    publishedTime: '2026-08-25',
    authors: ['HQ Laser'],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Header */}
      <header className="border-b border-[#1E3A5F] bg-[#0F1B2D]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-[#0066FF] hover:text-[#3B82F6] transition-colors">
            ← Back to Blog
          </Link>
          <div className="mt-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#00D4FF] bg-[#0A2463] rounded-sm mb-4">
              Technical Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pulse Laser Cleaning Machine:<br />
              <span className="text-[#3B82F6]">Complete Guide for Industrial Applications (2026)</span>
            </h1>
            <p className="mt-4 text-[#94A3B8] text-sm">
              Last Updated: August 2026 | Reading Time: 10 minutes
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-[#CBD5E1] leading-relaxed">
              Surface cleaning is a critical step in manufacturing, restoration, and maintenance. Traditional methods like sandblasting, chemical cleaning, and manual grinding are being replaced by <strong className="text-white">pulsed laser cleaning technology</strong> — a non-contact, environmentally friendly alternative.
            </p>
            <p className="mt-6 text-[#CBD5E1] leading-relaxed">
              In this comprehensive guide, we'll cover everything you need to know about pulsed laser cleaning machines — from how they work to real-world applications and how to choose the right system for your needs.
            </p>
          </section>

          {/* What is */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What is Pulsed Laser Cleaning?</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6">
              Pulsed laser cleaning uses high-energy laser pulses to remove contaminants from surfaces. The laser beam is absorbed by the contaminant layer (rust, paint, oil, oxide), causing rapid heating and vaporization — without damaging the underlying substrate.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">How It Works</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              The process relies on the difference in laser absorption between the contaminant layer and the base material:
            </p>
            <ol className="space-y-3 mb-6 text-[#CBD5E1]">
              <li className="flex items-start">
                <span className="text-[#3B82F6] font-bold mr-3">1.</span>
                <span><strong className="text-white">Laser Absorption:</strong> The contaminant layer absorbs laser energy more efficiently than the base material</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B82F6] font-bold mr-3">2.</span>
                <span><strong className="text-white">Rapid Heating:</strong> The absorbed energy causes rapid temperature rise, vaporizing or ablating the contaminant</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B82F6] font-bold mr-3">3.</span>
                <span><strong className="text-white">Plasma Expansion:</strong> The vaporized material creates a plasma shockwave that helps remove remaining particles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3B82F6] font-bold mr-3">4.</span>
                <span><strong className="text-white">Surface Preservation:</strong> The base material remains undamaged because it reflects or doesn't absorb the laser energy</span>
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Pulsed vs Continuous Wave (CW) Laser Cleaning</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1E3A5F]">
                    <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Feature</th>
                    <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Pulsed Laser</th>
                    <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">CW Laser</th>
                  </tr>
                </thead>
                <tbody className="text-[#CBD5E1]">
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Peak Power</td>
                    <td className="py-3 px-4">Very high (kW range)</td>
                    <td className="py-3 px-4">Lower (continuous)</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Heat Input</td>
                    <td className="py-3 px-4">✅ Low (pulsed)</td>
                    <td className="py-3 px-4"> Higher (continuous)</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Precision</td>
                    <td className="py-3 px-4">✅ High (&lt;1mm)</td>
                    <td className="py-3 px-4">❌ Lower</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Substrate Safety</td>
                    <td className="py-3 px-4">✅ Excellent</td>
                    <td className="py-3 px-4">️ Risk of damage</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Best For</td>
                    <td className="py-3 px-4">Precision cleaning, delicate surfaces</td>
                    <td className="py-3 px-4">Heavy rust, thick coatings</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Cost</td>
                    <td className="py-3 px-4"> Higher</td>
                    <td className="py-3 px-4">✅ Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#CBD5E1]">
              <strong className="text-white">Recommendation:</strong> For most industrial applications requiring precision and substrate protection, <span className="text-[#3B82F6] font-medium">pulsed laser cleaning</span> is the superior choice.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Benefits of Pulsed Laser Cleaning</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: '1. Non-Contact Process',
                  content: 'The laser beam cleans without touching the surface. This means no mechanical stress, no tool wear, and no risk of scratching or damaging delicate surfaces. Ideal for precision components, heritage artifacts, and sensitive materials.',
                },
                {
                  title: '2. No Chemicals Required',
                  content: 'Pulsed laser cleaning is completely dry and chemical-free. No solvents, no abrasives, no hazardous waste disposal. This makes it environmentally friendly and compliant with strict environmental regulations.',
                },
                {
                  title: '3. Precision Control',
                  content: 'With adjustable power, frequency, and pulse width, you can precisely control the cleaning process. Clean rust without affecting the base metal, remove paint layer by layer, or clean delicate electronic components with <1mm precision.',
                },
                {
                  title: '4. High Efficiency',
                  content: 'Modern pulsed laser cleaning systems can achieve cleaning speeds of up to 15 m²/h (at 500W). This is 5-10x faster than traditional sandblasting or chemical methods, with no setup time or material preparation needed.',
                },
                {
                  title: '5. Versatile Applications',
                  content: 'One machine can handle multiple cleaning tasks: rust removal, paint stripping, oxide removal, oil and grease cleaning, weld pre-treatment, mold cleaning, and heritage restoration. No need for multiple specialized tools.',
                },
                {
                  title: '6. Low Operating Costs',
                  content: 'After the initial investment, operating costs are minimal. No consumables (no sand, no chemicals, no abrasives), low power consumption, and minimal maintenance. Most systems are air-cooled with no external chiller required.',
                },
              ].map((benefit, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-[#CBD5E1] leading-relaxed">{benefit.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Applications: Where Pulsed Laser Cleaning Excels</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Rust Removal',
                  desc: 'Remove rust from steel structures, pipes, bridges, and metal surfaces. No damage to base metal, no chemical runoff.',
                  icon: '🔩',
                },
                {
                  title: 'Paint Stripping',
                  desc: 'Strip old paint layers from automotive bodies, aerospace components, and industrial equipment. Layer-by-layer control.',
                  icon: '🎨',
                },
                {
                  title: 'Weld Pre-Treatment',
                  desc: 'Clean oxide layers, oil, and contaminants before welding for better weld quality and stronger joints.',
                  icon: '⚡',
                },
                {
                  title: 'Mold Cleaning',
                  desc: 'Clean injection molds and die-cast molds without damaging precision surfaces. No disassembly required.',
                  icon: '🔧',
                },
                {
                  title: 'Heritage Restoration',
                  desc: 'Gentle cleaning of historical artifacts, sculptures, monuments, and architectural elements. Preserves original material.',
                  icon: '🏛️',
                },
                {
                  title: 'Electronic Components',
                  desc: 'Precision cleaning of PCB boards, connectors, and electronic assemblies. No damage to sensitive components.',
                  icon: '💻',
                },
              ].map((app, i) => (
                <div key={i} className="bg-[#162032] p-6 rounded-sm border border-[#1E3A5F]">
                  <div className="text-3xl mb-3">{app.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Choose the Right Pulsed Laser Cleaning Machine</h2>
            
            <div className="space-y-8">
              {/* Power */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Laser Power: How Much Do You Need?</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#1E3A5F]">
                        <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Power</th>
                        <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Best For</th>
                        <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Cleaning Speed</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#CBD5E1]">
                      <tr className="border-b border-[#1E3A5F]">
                        <td className="py-3 px-4 font-medium text-white">100W</td>
                        <td className="py-3 px-4">Precision cleaning, small workshops, delicate surfaces</td>
                        <td className="py-3 px-4">~3 m²/h</td>
                      </tr>
                      <tr className="border-b border-[#1E3A5F]">
                        <td className="py-3 px-4 font-medium text-white">200W</td>
                        <td className="py-3 px-4">General industrial applications, balanced performance</td>
                        <td className="py-3 px-4">~6 m²/h</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-white">300W</td>
                        <td className="py-3 px-4">Heavy-duty cleaning, large surface areas, production lines</td>
                        <td className="py-3 px-4">~10 m²/h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[#CBD5E1]">
                  <strong className="text-white">Recommendation:</strong> For most industrial applications, <span className="text-[#3B82F6] font-medium">200W</span> offers the best balance of performance and cost.
                </p>
              </div>

              {/* Laser Source */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Laser Source Quality</h3>
                <p className="text-[#CBD5E1] mb-4">The laser source is the heart of the cleaning system. Look for:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Established brands (JPT, IPG, Raycus) with proven reliability',
                    'Long lifespan (100,000+ hours)',
                    'Stable pulse energy and frequency',
                    'Good beam quality for precise cleaning',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#CBD5E1]">
                      <span className="text-[#3B82F6] mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scanning System */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Scanning System</h3>
                <p className="text-[#CBD5E1] mb-4">The scanning system determines cleaning speed and pattern flexibility:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'High scan speed (10+ m/s) for efficient cleaning',
                    'Multiple cleaning patterns (line, rectangle, circle, spiral, etc.)',
                    'Adjustable scan width (0-100mm) for different applications',
                    'Quality brands (Guoyuan, Sino-Galvo) for reliability',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#CBD5E1]">
                      <span className="text-[#3B82F6] mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cooling */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Cooling System</h3>
                <p className="text-[#CBD5E1] mb-4">Most pulsed laser cleaning machines under 300W are air-cooled:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'No external chiller needed',
                    'Compact and portable',
                    'Lower maintenance',
                    'Ready to use in any workshop',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#CBD5E1]">
                      <span className="text-[#3B82F6] mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* HQ Laser Section */}
          <section className="mb-12 bg-[#0F1B2D] p-8 rounded-sm border border-[#1E3A5F]">
            <h2 className="text-3xl font-bold text-white mb-6">HQ Laser Pulsed Cleaning Solutions</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6">
              At <strong className="text-white">HQ Laser</strong>, our pulsed laser cleaning machines are designed for industrial applications with a focus on reliability, precision, and ease of use.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-4">HQ-Pulse Series: 100W / 200W / 300W</h3>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { power: '100W', model: 'HQ-LC100', desc: 'Single-mode 1.5mJ pulse energy. Ideal for precision cleaning and small workshops.' },
                { power: '200W', model: 'HQ-LC200', desc: 'Single-mode 2mJ / multi-mode 5mJ. Balanced performance for most industrial applications.' },
                { power: '300W', model: 'HQ-LC300', desc: 'Single-mode 2mJ / multi-mode 5mJ or 15mJ. Heavy-duty cleaning for large surface areas.' },
              ].map((model, i) => (
                <div key={i} className="bg-[#162032] p-5 rounded-sm border border-[#1E3A5F]">
                  <div className="text-2xl font-bold text-[#3B82F6] mb-2">{model.power}</div>
                  <div className="text-white font-semibold mb-2">{model.model}</div>
                  <p className="text-[#94A3B8] text-sm">{model.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Technical Specifications</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1E3A5F]">
                    <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Parameter</th>
                    <th className="text-left py-3 px-4 text-[#00D4FF] font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="text-[#CBD5E1]">
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Laser Brand</td>
                    <td className="py-3 px-4">JPT (杰普特)</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Scanning System</td>
                    <td className="py-3 px-4">Guoyuan (国源)</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Pulse Width</td>
                    <td className="py-3 px-4">2 ~ 500ns</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Pulse Frequency</td>
                    <td className="py-3 px-4">1 ~ 4000kHz</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Cleaning Precision</td>
                    <td className="py-3 px-4">&lt; 1mm</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Scan Speed</td>
                    <td className="py-3 px-4">&lt; 12m/s</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Cleaning Modes</td>
                    <td className="py-3 px-4">9 modes: Line, Rectangle×2, Circle, Sine, Spiral, Free, Ring, Rotation</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Cooling</td>
                    <td className="py-3 px-4">Air-Cooled</td>
                  </tr>
                  <tr className="border-b border-[#1E3A5F]">
                    <td className="py-3 px-4 font-medium text-white">Machine Size</td>
                    <td className="py-3 px-4">300 × 680 × 650mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Net Weight</td>
                    <td className="py-3 px-4">46 ~ 50kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Real Application Tests</h3>
            <p className="text-[#CBD5E1] mb-4">We test our machines with real materials before delivery:</p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { material: 'Metal Surface', result: 'Rust and oxide removal without damaging base metal' },
                { material: 'Stone Surface', result: 'Dirt and weathering removal for heritage restoration' },
                { material: 'Wood Surface', result: 'Old finish and stain removal without chemicals' },
              ].map((test, i) => (
                <div key={i} className="bg-[#162032] p-5 rounded-sm border border-[#1E3A5F]">
                  <div className="text-[#00D4FF] font-semibold mb-2">{test.material}</div>
                  <p className="text-[#94A3B8] text-sm">{test.result}</p>
                </div>
              ))}
            </div>

            <Link 
              href="/#machine-tests" 
              className="inline-block px-6 py-3 bg-[#0A2463] text-white font-medium rounded-sm hover:bg-[#3B82F6] transition-colors"
            >
               Watch Our Test Videos
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Pulsed Laser Cleaning FAQ</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'Is pulsed laser cleaning safe for the base material?',
                  a: 'Yes. When properly configured, pulsed laser cleaning removes contaminants without damaging the underlying substrate. The key is selecting the right power, frequency, and pulse width for your specific application. Our machines include preset parameters for common materials.',
                },
                {
                  q: 'How fast is laser cleaning compared to traditional methods?',
                  a: 'Pulsed laser cleaning is typically 5-10x faster than sandblasting or chemical cleaning. A 200W machine can clean approximately 6 m²/hour, while a 300W machine can achieve 10 m²/hour. There\'s also no setup time or material preparation needed.',
                },
                {
                  q: 'What are the operating costs?',
                  a: 'After the initial investment, operating costs are minimal. There are no consumables (no sand, chemicals, or abrasives), power consumption is low (similar to a household appliance), and maintenance is minimal. Most systems are air-cooled with no external chiller required.',
                },
                {
                  q: 'Can I clean different materials with the same machine?',
                  a: 'Yes. Pulsed laser cleaning machines can process metal (rust, paint, oxide), stone (dirt, weathering), wood (old finish, stains), and even electronic components. You\'ll need to adjust parameters (power, frequency) for different materials, but one machine handles multiple applications.',
                },
                {
                  q: 'Is laser cleaning environmentally friendly?',
                  a: 'Yes. Pulsed laser cleaning is completely dry and chemical-free. No solvents, no abrasives, no hazardous waste disposal. The removed contaminants are typically collected as dry dust, which is easier to dispose of than chemical waste or used abrasives.',
                },
                {
                  q: 'What safety precautions are needed?',
                  a: 'Laser cleaning requires proper safety equipment: laser safety glasses (specific to the wavelength), protective enclosure or curtains, and proper ventilation for removed contaminants. All HQ Laser machines include safety interlocks and comply with Class IV laser safety standards.',
                },
                {
                  q: 'How long does the laser source last?',
                  a: 'Modern fiber laser sources (like JPT) typically last 100,000+ hours. With normal use (8 hours/day, 5 days/week), that\'s over 40 years of operation. The laser source is the most expensive component, so this longevity is a significant advantage.',
                },
                {
                  q: 'Do you offer training and support?',
                  a: 'Yes. HQ Laser provides comprehensive operation manual, video training materials, remote technical support (2-hour response time), application consultation, and spare parts availability. We also offer video call demonstrations before purchase.',
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#1E3A5F] pb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Q: {faq.q}</h3>
                  <p className="text-[#CBD5E1] leading-relaxed">
                    <strong className="text-[#3B82F6]">A:</strong> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusion: Is Pulsed Laser Cleaning Right for You?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0F1B2D] p-6 rounded-sm border border-[#1E3A5F]">
                <h3 className="text-xl font-bold text-white mb-4">Consider pulsed laser cleaning if you:</h3>
                <ul className="space-y-2">
                  {[
                    'Need precision cleaning without substrate damage',
                    'Want to eliminate chemicals and hazardous waste',
                    'Process multiple materials (metal, stone, wood)',
                    'Value environmental compliance',
                    'Need fast, efficient cleaning',
                    'Want low operating costs long-term',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#CBD5E1]">
                      <span className="text-[#3B82F6] mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#0F1B2D] p-6 rounded-sm border border-[#1E3A5F]">
                <h3 className="text-xl font-bold text-white mb-4">May not be ideal if you:</h3>
                <ul className="space-y-2">
                  {[
                    'Only clean very large, flat surfaces (CW may be faster)',
                    'Have extremely tight budget constraints',
                    'Need to remove very thick coatings (&gt;1mm)',
                    'Don\'t have proper safety infrastructure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#CBD5E1]">
                      <span className="text-red-400 mr-2 mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#0A2463] p-8 rounded-sm text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Talk to an Engineer</h2>
            <p className="text-[#CBD5E1] mb-6 text-lg">
              Not sure which configuration is right for your application? Tell us what you need to clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sition@heqingcnc.com"
                className="px-8 py-3 bg-white text-[#0A2463] font-medium rounded-sm hover:bg-[#CBD5E1] transition-colors"
              >
                📧 Email Us
              </a>
              <a 
                href="https://wa.me/8618953316699"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#25D366] text-white font-medium rounded-sm hover:bg-[#128C7E] transition-colors"
              >
                📱 WhatsApp
              </a>
            </div>
            <p className="mt-6 text-[#94A3B8] text-sm">
              Material · Contaminant · Surface Area · Desired Result
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
