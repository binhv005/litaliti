import React, { useState, useEffect } from 'react';
import { roomsData } from '../data/rooms';
import BookingSuccessModal from './BookingSuccessModal';
import ScrollReveal from './ScrollReveal';

export default function BookingSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    roomType: roomsData[0].id,
    checkinTime: '',
    notes: ''
  });

  const [submittedBooking, setSubmittedBooking] = useState(null);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        ...prefilledData
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomObj = roomsData.find((r) => r.id === formData.roomType);

    setSubmittedBooking({
      ...formData,
      roomName: roomObj?.name
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="booking">
      <ScrollReveal direction="up" duration={850} className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-beige/60 shadow-xl overflow-hidden rounded-none items-stretch">
        {/* Left Column: Full-bleed image with no rounded corners, no gap */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
          <img
            src="/images/litaliti/web/booking.jpg"
            alt="Góc phòng ấm cúng tại Litaliti Homestay"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none block"
            loading="lazy"
          />
        </div>

        {/* Right Column: The Booking Form - snug fit with brown italic quote */}
        <div className="lg:col-span-7 px-6 py-6 sm:px-10 sm:py-8 lg:px-10 lg:py-8 bg-white flex flex-col justify-center">
          {/* Warm Brown Bold Italic Quote - 3 lines aligned to the right */}
          <div className="mb-4 pb-3 border-b border-beige/35 flex justify-end">
            <blockquote className="font-serif italic font-bold text-[#6B4F3A] text-base sm:text-lg md:text-xl leading-snug sm:leading-normal text-right">
              <span className="block">“Tìm không gian phù hợp</span>
              <span className="block">cho chuyến đi</span>
              <span className="block">của bạn.”</span>
            </blockquote>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Họ và tên của bạn <span className="text-peach">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Minh Anh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Số điện thoại / Zalo <span className="text-peach">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại của bạn"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Hình thức lưu trú
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none cursor-pointer"
                >
                  {roomsData.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Ngày & Giờ dự kiến nhận phòng <span className="text-peach">*</span>
                </label>
                <input
                  type="datetime-local"
                  required
                  value={formData.checkinTime}
                  onChange={(e) => setFormData({ ...formData, checkinTime: e.target.value })}
                  className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                Ghi chú thêm (nếu có)
              </label>
              <textarea
                rows={2}
                placeholder="Số lượng khách, yêu cầu đặc biệt,..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-xl border border-beige bg-ivory/60 text-sm focus:border-peach focus:ring-1 focus:ring-peach p-3 text-charcoal outline-none transition-all"
              ></textarea>
            </div>

            {/* Price note */}
            <div className="p-4 rounded-2xl bg-[#F3EDE4] border border-beige/60">
              <p className="text-xs text-charcoal-light">Combo theo giờ chỉ từ:</p>
              <p className="font-serif font-bold text-xl text-peach-dark">150K</p>
              <p className="text-[11px] text-charcoal-light mt-1">
                Giá cụ thể và tình trạng phòng sẽ được xác nhận khi liên hệ.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg uppercase"
              >
                Đặt phòng / Nhận tư vấn
              </button>
              <p className="text-center text-[11px] text-charcoal-light mt-2">
                * Biểu mẫu chưa gửi dữ liệu đi. Sau khi điền, vui lòng nhắn tin qua Facebook của Litaliti Homestay để được tư vấn và xác nhận.
              </p>
            </div>
          </form>
        </div>
      </ScrollReveal>

      {submittedBooking && (
        <BookingSuccessModal
          bookingData={submittedBooking}
          onClose={() => setSubmittedBooking(null)}
        />
      )}
    </section>
  );
}
