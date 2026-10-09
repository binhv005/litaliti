import React from 'react';
import { amenitiesData } from '../data/amenities';
import { ArrowRight, KeyRound, BedDouble, Clapperboard, Snowflake, CookingPot, WashingMachine, ShowerHead, Car, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { MAPS_URL } from '../data/site';

const ICONS = {
  checkin: KeyRound,
  bed: BedDouble,
  projector: Clapperboard,
  ac: Snowflake,
  kitchen: CookingPot,
  laundry: WashingMachine,
  bath: ShowerHead,
  parking: Car,
  location: MapPin
};

export default function AmenitiesSection() {
  return (
    <section className="py-20 px-6 bg-[#E8DCCB]" id="amenities">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={800} className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
            Đầy đủ tiện nghi cho kỳ nghỉ thoải mái.
          </h2>
          <p className="text-charcoal-light text-base">
            Mọi tiện ích cần thiết được chuẩn bị để bạn có thể nghỉ ngơi, thư giãn và tận hưởng khoảng thời gian riêng tư một cách thuận tiện.
          </p>
        </ScrollReveal>

        {/* Amenity cards: image, title, note */}
        <div
          data-reveal-row className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pt-2 pb-6 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {amenitiesData.map((item, index) => {
            const Icon = ICONS[item.id];
            return (
              <ScrollReveal
                key={item.id}
                direction={index % 2 === 0 ? 'up' : 'down'}
                delay={index * 90}
                triggerClosest="[data-reveal-row]"
                duration={800}
                className="font-roboto flex-shrink-0 snap-start flex w-[88vw] max-w-[480px] sm:w-[480px] bg-white border border-beige/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-peach/50 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={`${item.title} tại Litaliti Homestay`}
                  loading="lazy"
                  draggable="false"
                  className="w-[38%] shrink-0 object-cover"
                />

                <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <Icon className="w-7 h-7 text-peach mb-3" strokeWidth={1.75} />
                    <h3 className="text-2xl sm:text-3xl font-bold text-charcoal leading-snug">{item.title}</h3>
                    <p className="text-sm text-charcoal-light mt-2 mb-5">{item.note}</p>
                  </div>

                  <a
                    href="#booking"
                    className="w-full py-3 font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 bg-ivory border border-charcoal/20 text-charcoal hover:bg-peach hover:text-ivory hover:border-peach"
                  >
                    <span>Đặt phòng</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Hourly price + location notice */}
        <ScrollReveal direction="up" delay={200} duration={800} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-5 py-4 rounded-3xl bg-white border border-beige/50 shadow-sm">
            <p className="text-sm text-charcoal-light">
              <span className="font-bold text-charcoal">Combo theo giờ chỉ từ 150K</span>
              {' — '}
              Liên hệ để xác nhận thời lượng áp dụng và giá cụ thể.
            </p>
          </div>
          <div className="px-5 py-4 rounded-3xl bg-[#FBF9F5] border border-peach/40 shadow-sm">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-peach-dark hover:underline"
            >
              Kiệt lớn Hùng Vương, Huế — Xem vị trí trên Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
