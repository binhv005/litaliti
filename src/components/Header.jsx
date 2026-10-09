import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Loại phòng', href: '#rooms' },
    { name: 'Đặt phòng', href: '#booking' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`animate-headerIn sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#D4C0A8]/30 py-3'
          : 'bg-[#F8F5F0]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo-litaliti.jpg"
            alt="Logo Litaliti Homestay"
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-beige/40 transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal group-hover:text-peach transition-colors">
              litaliti homestay
            </span>
            <span className="text-[10px] text-charcoal-light tracking-widest uppercase font-medium -mt-1">
              Huế · Private Stay
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-charcoal/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-peach transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-peach hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#booking"
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full bg-peach hover:bg-peach-dark text-ivory text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Đặt phòng ngay
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-charcoal hover:bg-beige-light transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-beige/40 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-peach py-2 border-b border-beige/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-peach text-ivory font-bold text-sm shadow-md"
            >
              Đặt phòng ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
