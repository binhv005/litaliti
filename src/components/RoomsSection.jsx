import React from 'react';
import { roomsData } from '../data/rooms';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const BROWN = '#6B4F3A';

// Brown panel: fixed-height wavy top edge + solid body, so the wave keeps its shape at any section height.
const WavePanel = () => (
  <div className="absolute inset-0" aria-hidden="true">
    <svg
      className="absolute top-0 left-0 w-full h-20 block"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        d="M0 34 C180 -6 360 8 520 46 C680 84 820 70 980 34 C1140 -2 1290 6 1440 38 L1440 80 L0 80 Z"
        fill={BROWN}
      />
    </svg>
    <div className="absolute inset-x-0 top-[79px] bottom-0" style={{ backgroundColor: BROWN }} />
  </div>
);

export default function RoomsSection({ onSelectRoom }) {
  const [windowRoom, balconyRoom] = roomsData;

  const selectRoom = (roomId) => {
    if (onSelectRoom) onSelectRoom(roomId);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-0 pb-20 overflow-x-clip" id="rooms">
      {/* Full-width brown wavy panel (bottom layer) */}
      <div className="absolute inset-x-0 -top-16 bottom-0 z-0">
        <WavePanel />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
        {/* Overlapping photo frames (top layer) */}
        <ScrollReveal
          direction="clip"
          duration={1000}
          className="relative z-20 lg:col-span-5 h-[420px] sm:h-[520px] lg:h-[560px]"
        >
          <img
            src={windowRoom.image}
            alt="Phòng ngủ tối giản tại Litaliti Homestay"
            loading="lazy"
            className="absolute top-0 left-0 w-[62%] aspect-[4/5] object-cover border-[6px] border-white shadow-xl"
          />
          <img
            src={balconyRoom.image}
            alt="Giường và bàn trà tại Litaliti Homestay"
            loading="lazy"
            className="absolute bottom-0 right-0 lg:right-[-8%] w-[62%] aspect-[4/5] object-cover border-[6px] border-white shadow-2xl"
          />
        </ScrollReveal>

        {/* Text block */}
        <ScrollReveal
          direction="right"
          duration={900}
          delay={150}
          className="relative z-10 lg:col-span-7 lg:pl-16 lg:pr-8 pt-6 pb-4 lg:pt-12 lg:pb-10 text-left text-ivory"
        >
          <p className="font-display italic text-2xl text-ivory/80 mb-3">Hình thức lưu trú</p>
          <h2 className="font-bold uppercase tracking-wide text-xl sm:text-2xl leading-snug mb-8">
            Linh hoạt theo lịch trình của bạn.
          </h2>
          <p className="text-sm leading-relaxed text-ivory/85 mb-8">
            Dù bạn cần một không gian cho buổi hẹn hò ngắn, một đêm nghỉ ngơi hay thời gian lưu trú dài hơn, Litaliti Homestay cung cấp các hình thức thuê phù hợp với nhu cầu của khách.
          </p>

          <div className="space-y-6">
            {roomsData.map((room) => (
              <div key={room.id}>
                <h3 className="font-bold text-base mb-1">
                  {room.name}
                  {room.priceFrom && <span className="font-normal text-ivory/80"> · Giá {room.priceFrom}</span>}
                </h3>
                <p className="text-sm leading-relaxed text-ivory/85">{room.description}</p>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => selectRoom(room.id)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest hover:text-white transition-colors group"
                  >
                    <span>Liên hệ: {room.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="#booking"
              className="text-xs font-semibold underline underline-offset-4 text-ivory/90 hover:text-white transition-colors"
            >
              Nhận tư vấn hình thức lưu trú
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
