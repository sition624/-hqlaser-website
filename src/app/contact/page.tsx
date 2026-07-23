'use client';

import { useState, type FormEvent } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', country: '', product: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Get in touch with our team. We typically respond within 2 hours during business hours.
              Request a quote, ask technical questions, or schedule a factory tour.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-[#94A3B8]">Thank you for your inquiry. Our team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Full Name *</label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#2A4A6B] rounded-sm px-4 py-3 text-white placeholder-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Email Address *</label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#2A4A6B] rounded-sm px-4 py-3 text-white placeholder-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Country *</label>
                        <input
                          type="text" required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#2A4A6B] rounded-sm px-4 py-3 text-white placeholder-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                          placeholder="United States"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Product Interest</label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full bg-[#0A1628] border border-[#2A4A6B] rounded-sm px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors"
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
                      <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Message *</label>
                      <textarea
                        required rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#0A1628] border border-[#2A4A6B] rounded-sm px-4 py-3 text-white placeholder-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors resize-none"
                        placeholder="Tell us about your requirements: material type, thickness, production volume, etc."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-center">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
                <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Address</div>
                      <div className="text-[#94A3B8] text-sm mt-1">
                        No. 2 Hualu Road, Zichuan Economic Development Zone,<br />
                        Zibo City, Shandong Province, China
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Email</div>
                      <div className="text-[#94A3B8] text-sm mt-1">rays@heqingcnc.com</div>
                      <div className="text-[#94A3B8] text-sm">sition@heqingcnc.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Phone</div>
                      <div className="text-[#94A3B8] text-sm mt-1">+86 189 5331 6699</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A2740] border border-[#3B82F6]/20 rounded-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">WhatsApp</div>
                      <a href="https://wa.me/8618953316699" className="text-[#3B82F6] text-sm mt-1 hover:text-[#2563EB] transition-colors block">
                        +86 189 5331 6699
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#162032] border border-[#1E3A5F] rounded-sm p-8">
                <h3 className="text-lg font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Monday - Friday</span>
                    <span className="text-white font-mono">08:00 - 18:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Saturday</span>
                    <span className="text-white font-mono">09:00 - 12:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Sunday</span>
                    <span className="text-[#94A3B8]">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-[#0A2463]/30 to-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse" />
                  <span className="text-white font-semibold text-sm">Quick Response Guarantee</span>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  We respond to all inquiries within 2 hours during business hours.
                  For urgent requests, contact us via WhatsApp for instant support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-[#0F1B2D] border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Find Us</h2>
          </div>
          <div className="bg-[#0A1628] border border-[#1E3A5F] rounded-sm aspect-[21/9] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[#2A4A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-[#94A3B8] text-sm mt-4">Google Map Embed</p>
              <p className="text-[#666666] text-xs mt-1">Replace with actual Google Maps iframe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
