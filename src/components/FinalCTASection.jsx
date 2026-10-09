import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { MAPS_URL } from '../data/site';

export default function FinalCTASection() {
  return (
    <section className="w-full relative overflow-hidden bg-sage-deep text-ivory py-24 md:py-32">
      {/* Background Image on the Left with Gradient Fade to Right */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/litaliti/web/cta.jpg"
          alt="Góc nghỉ ấm cúng tại Litaliti Homestay"
          className="w-full h-full object-cover object-left"
          loading="lazy"
        />
        {/* Horizontal gradient overlay fading from clear on left to solid sage-deep on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-deep/30 via-sage-deep/75 to-sage-deep"></div>
        {/* Top and Bottom soft blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-deep/40 via-transparent to-sage-deep/40"></div>
      </div>

      {/* Ambient glow in background */}
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-peach/15 blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <ScrollReveal direction="up" duration={850} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal italic leading-tight text-ivory drop-shadow-md">
            Một góc riêng tư, ấm áp giữa lòng Cố đô.
          </h2>

          <p className="text-ivory/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
            Liên hệ Litaliti Homestay để được tư vấn hình thức lưu trú, giá phòng và tình trạng phòng. Combo theo giờ chỉ từ 150K.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#booking"
              className="px-10 py-4 rounded-full bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-peach/30 hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Đặt phòng ngay</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-ivory/40 hover:border-ivory text-ivory font-medium text-sm transition-all hover:bg-ivory/10 backdrop-blur-sm"
            >
              Xem vị trí
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
