import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-ivory px-6 overflow-hidden">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/litaliti/web/hero.jpg"
          alt="Phòng ngủ tối giản, ấm cúng tại Litaliti Homestay Huế"
          className="w-full h-full object-cover object-center animate-heroZoom"
          loading="eager"
        />
        {/* Multi-layered smooth gradient overlays for optimal text contrast */}
        <div className="absolute inset-0 bg-sage-deep/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60"></div>
      </div>

      {/* Hero Centered Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center py-24 sm:py-32 space-y-8">
        <div className="space-y-8">
          {/* The single H1 of the entire page - Italic, 2 lines, entrance staggered line by line */}
          <ScrollReveal direction="up" duration={900} delay={100}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-ivory/80">
              Litaliti Homestay · Huế
            </p>
          </ScrollReveal>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display italic font-normal leading-[1.35] md:leading-[1.4] text-ivory/95 tracking-normal drop-shadow-lg max-w-4xl mx-auto">
            <ScrollReveal as="span" direction="up" duration={900} delay={200} className="block">
              Một góc riêng tư, ấm áp
            </ScrollReveal>
            <ScrollReveal as="span" direction="up" duration={900} delay={400} className="block mt-1 sm:mt-2 text-ivory">
              giữa lòng Cố đô
            </ScrollReveal>
          </h1>

          <ScrollReveal direction="up" duration={900} delay={550}>
            <p className="text-ivory/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Không gian lưu trú tối giản, tiện nghi và riêng tư dành cho những buổi hẹn hò ngọt ngào hay chuyến khám phá Huế đầy cảm hứng.
            </p>
            <p className="mt-4 inline-block px-5 py-2 rounded-full border border-ivory/40 text-sm font-semibold tracking-wide">
              Combo theo giờ chỉ từ 150K
            </p>
          </ScrollReveal>

          {/* Centered CTA buttons */}
          <ScrollReveal direction="up" duration={900} delay={750} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="px-9 py-4 rounded-full bg-peach hover:bg-peach-dark text-ivory font-semibold text-base sm:text-lg transition-all shadow-xl hover:shadow-peach/40 transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 group"
            >
              <span>Đặt phòng ngay</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="px-9 py-4 rounded-full border border-ivory/50 hover:border-ivory hover:bg-ivory/10 text-ivory font-semibold text-base sm:text-lg transition-all"
            >
              Khám phá không gian
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
