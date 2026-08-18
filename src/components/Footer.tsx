import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#070F1C] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
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
              {/* Facebook */}
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/8618953316699" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#25D366] hover:border-[#25D366] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#162032] border border-[#2A4A6B] rounded-sm flex items-center justify-center text-[#94A3B8] hover:text-[#FF0000] hover:border-[#FF0000] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
