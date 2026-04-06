import React from 'react'

export const HistoryBooking = ({ profile }) => {
  const bookings = profile?.thongTinDatVe || profile?.bookings || []

  if (!bookings || bookings.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg text-center text-slate-600">
        <p>Chưa có lịch sử đặt vé. Hãy bắt đầu đặt vé ngay hôm nay.</p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg space-y-4">
      {bookings.map((ticket, idx) => (
        <div key={idx} className="rounded-3xl bg-slate-100 p-4 border border-slate-200">
          <p className="font-semibold text-slate-900">{ticket.tenPhim || 'Tên phim'}</p>
          <p className="text-sm text-slate-600">Ngày đặt: {ticket.ngayDat || ticket.createdAt || 'N/A'}</p>
          <p className="text-sm text-slate-600">Số lượng vé: {ticket.danhSachGhe?.length || 0}</p>
          <p className="text-xs text-slate-500 mt-2">Mã đặt vé: {ticket.maVe || 'N/A'}</p>
        </div>
      ))}
    </div>
  )
}
