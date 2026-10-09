import React from 'react';
import { CalendarCheck, MessageCircle, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';
import { FACEBOOK_URL, MAPS_URL } from '../data/site';

const channels = [
  {
    key: 'booking',
    Icon: CalendarCheck,
    title: 'Đặt phòng / Nhận tư vấn',
    description: 'Điền thông tin ở phần đặt phòng để được tư vấn hình thức lưu trú, giá phòng và tình trạng phòng.',
    href: '#booking',
    cta: 'Đặt phòng / Nhận tư vấn'
  },
  {
    key: 'facebook',
    Icon: MessageCircle,
    title: 'Nhắn tin Facebook',
    description: 'Liên hệ trực tiếp qua trang Facebook chính thức của Litaliti Homestay.',
    href: FACEBOOK_URL,
    cta: 'Nhắn tin Facebook',
    external: true
  },
  {
    key: 'maps',
    Icon: MapPin,
    title: 'Xem vị trí',
    description: '30 Kiệt 246 Hùng Vương, Thành phố Huế.',
    href: MAPS_URL,
    cta: 'Xem vị trí',
    external: true
  }
];

export default function ContactSection() {
  return (
    <section className="relative z-10 -mt-16 -mb-16 py-32 px-6 overflow-x-clip" id="contact">
      <WaveBand color="#6B4F3A" />

      <div className="relative z-10 max-w-6xl mx-auto text-ivory">
        <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3">
            Tìm không gian phù hợp cho chuyến đi của bạn.
          </h2>
          <p className="text-sm text-ivory/80">
            Hãy liên hệ với Litaliti Homestay để được tư vấn hình thức lưu trú, giá phòng và tình trạng phòng phù hợp với lịch trình của bạn.
          </p>
        </ScrollReveal>

        {/* 3 contact channels in columns, no cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {channels.map((item, index) => (
            <ScrollReveal
              key={item.key}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
              duration={800}
              className="text-center max-w-xs mx-auto"
            >
              <item.Icon className="w-14 h-14 mx-auto mb-5 text-ivory/80" strokeWidth={1.75} />
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ivory/85 mb-4">{item.description}</p>
              <a
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-xs font-semibold underline underline-offset-4 text-ivory/90 hover:text-white transition-colors"
              >
                {item.cta}
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={300} duration={800} className="mt-14 flex justify-center">
          <a
            href="#booking"
            className="px-8 py-3 rounded-full bg-ivory text-peach-dark text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-200"
          >
            Đặt phòng ngay
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
