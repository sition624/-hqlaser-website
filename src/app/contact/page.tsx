'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              Have a question or need a quote? Our team responds within 24 hours.
              Tell us about your requirements and we will find the perfect laser solution for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-8 bg-[#FFD60A]" />
                <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-[#111111] border border-[#FFD60A]/30 rounded-sm p-8 text-center">
                  <svg className="w-16 h-16 mx-auto text-[#FFD60A] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#A0A0A0]">Thank you for your inquiry. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                        Full Name <span className="text-[#FFD60A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#333333] rounded-sm px-4 py-3 text-white text-sm placeholder-[#666666] focus:border-[#FFD60A] focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                        Email Address <span className="text-[#FFD60A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#333333] rounded-sm px-4 py-3 text-white text-sm placeholder-[#666666] focus:border-[#FFD60A] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                        Country / Region <span className="text-[#FFD60A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#333333] rounded-sm px-4 py-3 text-white text-sm placeholder-[#666666] focus:border-[#FFD60A] focus:outline-none transition-colors"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                        Product Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#333333] rounded-sm px-4 py-3 text-white text-sm focus:border-[#FFD60A] focus:outline-none transition-colors"
                      >
                        <option value="">Select a product</option>
                        <option value="hq26a">HQ26-A Laser Welder</option>
                        <option value="hq1530">HQ-1530 Laser Cutter</option>
                        <option value="cleaning">Laser Cleaning Machine</option>
                        <option value="marking">Laser Marking Machine</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#A0A0A0] mb-2">
                      Message <span className="text-[#FFD60A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#111111] border border-[#333333] rounded-sm px-4 py-3 text-white text-sm placeholder-[#666666] focus:border-[#FFD60A] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements: material, thickness, production volume, etc."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-8 bg-[#00D4FF]" />
                <h2 className="text-2xl font-bold text-white">Contact Info</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-[#111111] border border-[#222222] rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a1a1a] border border-[#FFD60A]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Company Address</h4>
                      <p className="text-[#A0A0A0] text-sm">
                        Shandong Heqing CNC Equipment Co., Ltd.<br />
                        Jinan City, Shandong Province<br />
                        China
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a1a1a] border border-[#FFD60A]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                      <p className="text-[#A0A0A0] text-sm">info@heqinglaser.com</p>
                      <p className="text-[#A0A0A0] text-sm">sales@heqinglaser.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#222222] rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a1a1a] border border-[#FFD60A]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
                      <p className="text-[#A0A0A0] text-sm">+86 188-XXXX-XXXX</p>
                      <p className="text-[#A0A0A0] text-sm">+86 531-XXXX-XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#25D366]/20 rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a1a1a] border border-[#25D366]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">WhatsApp</h4>
                      <p className="text-[#A0A0A0] text-sm">+86 188-XXXX-XXXX</p>
                      <a href="https://wa.me/8618800000000" className="text-[#25D366] text-sm font-medium mt-1 inline-block hover:underline">
                        Chat Now →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-[#111111] border border-[#222222] rounded-sm p-6">
                <h4 className="text-white font-semibold text-sm mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Monday - Friday</span>
                    <span className="text-white font-mono">08:30 - 18:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Saturday</span>
                    <span className="text-white font-mono">09:00 - 12:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Sunday</span>
                    <span className="text-[#666666] font-mono">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-[#111111] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-[#00D4FF]" />
            <h2 className="text-2xl font-bold text-white">Find Us</h2>
          </div>

          <div className="aspect-[21/9] bg-[#0a0a0a] border border-[#222222] rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#666666] text-sm mt-4">Google Map</p>
                <p className="text-[#444444] text-xs mt-1">Jinan City, Shandong Province, China</p>
              </div>
            </div>
            {/* Grid overlay for visual interest */}
            <div className="absolute inset-0 bg-grid opacity-50" />
          </div>
        </div>
      </section>
    </>
  );
}
