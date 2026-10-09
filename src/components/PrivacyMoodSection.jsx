import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PrivacyMoodSection() {
  const keywords = ['RIÊNG TƯ', 'TỐI GIẢN', 'ẤM CÚNG', 'TIỆN NGHI'];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-24 px-6 text-sage-deep text-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/background-brown.png)" }}
    >
      <div className="w-full max-w-4xl mx-auto relative z-10 space-y-8">
        <ScrollReveal direction="left" duration={900}>
        <blockquote className="text-2xl sm:text-3xl md:text-5xl font-display font-normal leading-tight italic text-sage-deep">
          “Không gian lưu trú riêng tư, tiện nghi và ấm cúng ngay tại trung tâm Huế.”
        </blockquote>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={900} delay={150}>
        <p className="text-sage-deep/80 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          Phù hợp cho những buổi hẹn hò và chuyến đi khám phá thành phố. Tối giản, ấm cúng, riêng tư, hiện đại và lãng mạn.
        </p>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={900} delay={300}>
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          {keywords.map((word, idx) => (
            <div
              key={word}
              className="flex items-center gap-2 text-sage-deep hover:text-peach-dark transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-peach"></span>
              <span>{word}</span>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
