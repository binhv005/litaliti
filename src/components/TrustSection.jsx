import React from 'react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';

const trustItems = [
  {
    number: '01',
    image: '/images/litaliti/web/trust-private.jpg',
    title: 'Riêng tư',
    description: 'Riêng tư và thoải mái cho những khoảng thời gian của riêng bạn.',
  },
  {
    number: '02',
    image: '/images/litaliti/web/trust-minimal.jpg',
    title: 'Ấm cúng',
    description: 'Thiết kế tối giản, ấm cúng với gam màu nâu và trắng nhẹ nhàng.',
  },
  {
    number: '03',
    image: '/images/litaliti/web/trust-kitchen.jpg',
    title: 'Tiện nghi',
    description: 'Tiện nghi cho kỳ nghỉ ngắn ngày, từ giường rộng đến bếp chung.',
  },
  {
    number: '04',
    image: '/images/litaliti/web/facade.jpg',
    title: 'Thuận tiện',
    description: 'Thuận tiện khám phá thành phố Huế từ khu vực Hùng Vương.',
  }
];

export default function TrustSection() {
  return (
    <section id="about" className="relative -mt-16 py-24 px-6 overflow-x-clip">
      <WaveBand color="#6B4F3A" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-ivory">
        {/* Text side */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-12 text-center lg:text-left">
          <p className="font-display italic text-2xl text-ivory/80 mb-3">Litaliti Homestay</p>
          <h2 className="font-bold uppercase tracking-wide text-2xl sm:text-3xl leading-snug max-w-xl mx-auto lg:mx-0">
            Không gian riêng dành cho những khoảnh khắc đáng nhớ.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ivory/85 max-w-2xl mx-auto lg:mx-0">
            Litaliti Homestay mang đến không gian lưu trú ấm cúng, riêng tư và tiện nghi ngay tại thành phố Huế. Từ những buổi hẹn hò nhẹ nhàng đến những ngày khám phá Cố đô, bạn có thể tận hưởng khoảng thời gian của riêng mình trong một không gian được chăm chút tinh tế.
          </p>
        </ScrollReveal>

        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {trustItems.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={Math.floor(index / 2) * 120}
              duration={800}
              className="relative flex items-stretch h-48 sm:h-52 rounded-3xl overflow-hidden bg-[#FBF9F5] border border-[#E6DCCD] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <img
                src="/images/leaf-brown.png"
                alt=""
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 sm:w-28 h-auto opacity-20 pointer-events-none select-none"
              />
              <div className="w-2/5 shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 py-4 text-charcoal">
                <span className="font-display italic text-3xl text-peach/90 leading-none mb-2">{item.number}</span>
                <h3 className="font-bold uppercase tracking-wider text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
