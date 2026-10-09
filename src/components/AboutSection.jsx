import React from 'react';
import { Heart, ShieldCheck, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-[#F1EBE1]/50 border-y border-beige/30 overflow-hidden" id="space">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Asymmetrical Editorial Image Grid */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-beige/30">
              <img
                src="/images/litaliti/web/about-1.jpg"
                alt="Phòng ngủ tối giản với giường thấp và bàn trà tại Litaliti Homestay"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl bg-sage/20 p-5 border border-sage/40">
              <p className="font-serif italic text-charcoal text-sm leading-relaxed">
                "Mỗi không gian đều hướng đến cảm giác thoải mái và gần gũi."
              </p>
            </div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-beige/30">
              <img
                src="/images/litaliti/web/about-2.jpg"
                alt="Phòng ngủ với rèm cửa và ánh sáng tự nhiên tại Litaliti Homestay"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl bg-peach/15 p-4 text-center border border-peach/30">
              <span className="text-xs uppercase font-bold text-peach-dark tracking-wider flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-peach-dark" />
                <span>Hẹn hò ngọt ngào</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Story Content */}
        <ScrollReveal direction="right" duration={900} delay={150} className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic font-normal text-charcoal leading-tight">
            Chạm vào sự ấm cúng, tận hưởng sự riêng tư.
          </h2>
          <div className="space-y-4 text-charcoal-light leading-relaxed text-base">
            <p>
              Từ <strong className="text-charcoal font-semibold">góc nghỉ ngơi</strong> đến những <strong className="text-charcoal font-semibold">chi tiết nội thất tinh giản</strong>, mỗi không gian đều hướng đến cảm giác thoải mái và gần gũi.
            </p>
            <p>
              Tại <strong className="text-charcoal font-semibold">Litaliti Homestay</strong>, bạn có thể tận hưởng ánh sáng ấm, chất liệu gỗ, vải mềm và nội thất tối giản ngay tại trung tâm Huế, phù hợp cho những buổi hẹn hò và chuyến đi khám phá thành phố.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-beige/40">
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">150K</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Combo theo giờ từ</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">Tự động</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Check-in hoàn toàn</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-charcoal">Huế</div>
              <p className="text-xs text-charcoal-light uppercase font-semibold mt-1">Kiệt 246 Hùng Vương</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
