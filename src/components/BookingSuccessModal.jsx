import React from 'react';
import { MessageCircle, X, Calendar, Home, Phone, User } from 'lucide-react';
import { FACEBOOK_URL } from '../data/site';

export default function BookingSuccessModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  const rows = [
    { Icon: User, label: 'Họ tên:', value: bookingData.fullName },
    { Icon: Phone, label: 'Liên hệ:', value: bookingData.phone },
    { Icon: Home, label: 'Hình thức:', value: bookingData.roomName },
    { Icon: Calendar, label: 'Dự kiến nhận:', value: bookingData.checkinTime }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-beige/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-beige-light transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-sage/30 text-sage-dark flex items-center justify-center">
            <MessageCircle className="w-9 h-9" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal">Thông tin yêu cầu của bạn</h3>
          <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Yêu cầu <strong className="text-charcoal">chưa được gửi đi</strong>. Vui lòng nhắn tin qua Facebook chính thức của Litaliti Homestay kèm thông tin bên dưới để được tư vấn và xác nhận tình trạng phòng.
          </p>
        </div>

        <div className="bg-beige-light/60 p-4 rounded-2xl border border-beige/40 space-y-2.5 text-xs sm:text-sm">
          {rows.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between gap-4 py-1 border-b border-beige/30 last:border-0">
              <span className="text-charcoal-light flex items-center gap-1.5 shrink-0">
                <Icon className="w-4 h-4 text-peach" />
                <span>{label}</span>
              </span>
              <span className="font-semibold text-charcoal text-right">{value}</span>
            </div>
          ))}
          {bookingData.notes && (
            <p className="pt-1 text-charcoal-light">Ghi chú: <span className="text-charcoal">{bookingData.notes}</span></p>
          )}
        </div>

        <div className="mt-6 space-y-3">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-peach hover:bg-peach-dark text-ivory font-bold text-sm tracking-wide transition-all shadow-md"
          >
            Nhắn tin Facebook
          </a>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl text-charcoal font-semibold text-sm hover:bg-beige-light transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
