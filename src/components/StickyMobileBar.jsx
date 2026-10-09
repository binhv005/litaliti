import React from 'react';
import { FACEBOOK_URL } from '../data/site';
import { MessageCircle, CalendarCheck } from 'lucide-react';

export default function StickyMobileBar() {
  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-beige/40 p-3 shadow-2xl flex items-center gap-3">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-2xl bg-beige-light border border-beige/60 text-charcoal font-bold text-xs flex items-center justify-center gap-2 hover:bg-beige/40 transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-peach-dark" />
        <span>Nhắn Facebook</span>
      </a>

      <button
        onClick={scrollToBooking}
        className="flex-[1.4] py-3 px-4 rounded-2xl bg-peach hover:bg-peach-dark text-ivory font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors uppercase tracking-wide"
      >
        <CalendarCheck className="w-4 h-4" />
        <span>Đặt phòng ngay</span>
      </button>
    </div>
  );
}
