'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/90 backdrop-blur-lg border-b border-[#1E3A5F]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0A2463] rounded-sm flex items-center justify-center border border-[#3B82F6]/30">
              <span className="text-white font-black text-lg">HQ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                HEQING
              </span>
              <span className="text-[#94A3B8] text-[10px] font-medium tracking-[0.2em] uppercase">
                Laser Technology
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="nav-link text-sm font-medium text-white hover:text-[#3B82F6] transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/products"
                className="nav-link text-sm font-medium text-white hover:text-[#3B82F6] transition-colors flex items-center gap-1"
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#162032] border border-[#1E3A5F] rounded-sm shadow-2xl shadow-black/40">
                  <div className="p-2">
                    <Link
                      href="/products/hq26a"
                      className="block px-4 py-3 text-sm text-white hover:bg-[#1A2740] hover:text-[#3B82F6] transition-colors rounded-sm"
                    >
                      <div className="font-semibold">HQ26-A Series</div>
                      <div className="text-[#94A3B8] text-xs mt-0.5">Air-Cooled Laser Welder</div>
                    </Link>
                    <Link
                      href="/products/hq1530"
                      className="block px-4 py-3 text-sm text-white hover:bg-[#1A2740] hover:text-[#3B82F6] transition-colors rounded-sm"
                    >
                      <div className="font-semibold">HQ-1530 Series</div>
                      <div className="text-[#94A3B8] text-xs mt-0.5">Fiber Laser Cutter</div>
                    </Link>
                    <Link
                      href="/products"
                      className="block px-4 py-3 text-sm text-[#3B82F6] hover:bg-[#1A2740] transition-colors rounded-sm border-t border-[#1E3A5F] mt-1 pt-3"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link text-sm font-medium text-white hover:text-[#3B82F6] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="nav-link text-sm font-medium text-white hover:text-[#3B82F6] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm inline-block">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-[#1E3A5F]">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" className="block text-white font-medium py-2" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block text-white font-medium py-2" onClick={() => setMobileOpen(false)}>
              Products
            </Link>
            <div className="pl-4 space-y-2">
              <Link href="/products/hq26a" className="block text-[#94A3B8] text-sm py-1" onClick={() => setMobileOpen(false)}>
                HQ26-A Welder
              </Link>
              <Link href="/products/hq1530" className="block text-[#94A3B8] text-sm py-1" onClick={() => setMobileOpen(false)}>
                HQ-1530 Cutter
              </Link>
            </div>
            <Link href="/about" className="block text-white font-medium py-2" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="block text-white font-medium py-2" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link href="/contact" className="btn-primary text-sm inline-block mt-4" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
