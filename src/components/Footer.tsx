import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#070F1C] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0A2463] rounded-sm flex items-center justify-center border border-[#3B82F6]/30">
                <span className="text-white font-black text-lg">HQ</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">HEQING</div>
                <div className="text-[#94A3B8] text-[10px] tracking-[0.2em] uppercase">
                  Laser Technology
                </div>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Professional laser equipment manufacturer with 10+ years of experience.
              Delivering precision cutting, welding, cleaning, and marking solutions worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/hq26a" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Laser Welding Machine</Link></li>
              <li><Link href="/products/hq1530" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Laser Cutting Machine</Link></li>
              <li><Link href="/products" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Laser Cleaning Machine</Link></li>
              <li><Link href="/products" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Laser Marking Machine</Link></li>
              <li><Link href="/products" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Spare Parts & Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Factory Tour</Link></li>
              <li><Link href="/about" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Certifications</Link></li>
              <li><Link href="/contact" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="text-[#94A3B8] text-sm hover:text-[#3B82F6] transition-colors">Support & Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#94A3B8] text-sm">No. 2 Hualu Road, Zichuan Economic Development Zone,<br/>Zibo City, Shandong Province, China</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3B82F6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#94A3B8] text-sm">rays@heqingcnc.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3B82F6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[#94A3B8] text-sm">+86 189 5331 6699</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1E3A5F] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-sm">
            © 2024 Shandong Heqing CNC Equipment Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#CBD5E1] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#CBD5E1] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
