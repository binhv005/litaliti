import React from 'react';
import { MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ADDRESS, FACEBOOK_URL, MAPS_URL } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-12 px-6 border-t border-charcoal/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Description */}
          <ScrollReveal direction="left" duration={800} delay={0} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-litaliti.jpg"
                alt="Logo Litaliti Homestay"
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-ivory/20 shrink-0"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                litaliti homestay
              </span>
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed max-w-sm">
              Không gian lưu trú riêng tư, tiện nghi và ấm cúng ngay tại trung tâm Huế, phù hợp cho những buổi hẹn hò và chuyến đi khám phá thành phố.
            </p>
            <div className="text-xs text-sage font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-peach shrink-0" />
              <span>{ADDRESS}</span>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" duration={800} delay={120}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                ['Trang chủ', '#home'],
                ['Giới thiệu', '#about'],
                ['Loại phòng', '#rooms'],
                ['Đặt phòng', '#booking'],
                ['Liên hệ', '#contact']
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-peach transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* 3 Facilities Details */}
          <ScrollReveal direction="right" duration={800} delay={240}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-3 text-xs text-ivory/70">
              <li>
                <strong className="text-ivory block">Litaliti Homestay</strong>
                <span className="text-[11px] text-ivory/60">{ADDRESS}</span>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-peach transition-colors">
                  Facebook: litalitihomestay
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-peach transition-colors">
                  Xem vị trí trên Google Maps
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 gap-4">
          <p>© {new Date().getFullYear()} Litaliti Homestay Huế. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-ivory transition-colors">
              Câu hỏi thường gặp
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">
              Facebook
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
