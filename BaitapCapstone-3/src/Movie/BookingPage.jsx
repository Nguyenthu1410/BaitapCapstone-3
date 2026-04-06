import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PUBLIC_PATH } from '../constant/path'
import { useMovieDetail } from './hooks/useMovies'
import { toast } from 'sonner'
import { Skeleton } from 'antd'

const BookingPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: movie, isLoading, isError } = useMovieDetail(id)
  const [tickets, setTickets] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton active paragraph={{ rows: 3 }} />
        <div className="grid gap-8 lg:grid-cols-2">
          <Skeleton active paragraph={{ rows: 4 }} />
          <Skeleton active paragraph={{ rows: 3 }} />
        </div>
      </div>
    )
  }

  if (isError || !movie) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
        <h2 className="text-2xl font-semibold text-red-700">Phim không tìm thấy</h2>
        <p className="mt-3 text-red-600">Vui lòng quay lại trang lịch chiếu để chọn phim.</p>
      </div>
    )
  }

  const ticketPrice = 120000
  const totalPrice = tickets * ticketPrice

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedDate || !selectedTime) {
      toast.error('Vui lòng chọn ngày và suất chiếu')
      return
    }
    toast.success(`Đặt ${tickets} vé cho ${movie.tenPhim} thành công!`)
    setTimeout(() => navigate(PUBLIC_PATH.SCHEDULE), 1500)
  }

  // Danh sách ngày trong 7 ngày tới
  const dateOptions = [...Array(7)].map((_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      value: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('vi-VN', { weekday: 'short', month: 'short', day: 'numeric' })
    }
  })

  const timeOptions = ['09:00', '12:00', '15:00', '18:00', '21:00']

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Đặt vé cho: {movie.tenPhim}</h1>
        <p className="mt-3 text-slate-300">Chọn ngày, suất chiếu và số vé để hoàn tất đặt chỗ.</p>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Thông tin suất chiếu</h2>
          
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden">
              <img src={movie.hinhAnh} alt={movie.tenPhim} className="w-full h-64 object-cover" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Chọn ngày chiếu</label>
              <select
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              >
                <option value="">-- Chọn ngày --</option>
                {dateOptions.map((date) => (
                  <option key={date.value} value={date.value}>{date.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Chọn suất chiếu</label>
              <select
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">-- Chọn suất --</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Số vé</label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={tickets}
                  onChange={(e) => setTickets(Number(e.target.value))}
                  className="w-20 rounded-2xl border border-slate-300 px-3 py-2 text-center text-slate-900"
                />
                <span className="text-slate-600">
                  {tickets} vé x 120.000 VND
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg h-fit">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Tóm tắt đơn hàng</h2>
          
          <div className="space-y-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex justify-between text-slate-600">
              <span>Phim:</span>
              <span className="font-semibold text-slate-900">{movie.tenPhim}</span>
            </div>
            {selectedDate && (
              <div className="flex justify-between text-slate-600">
                <span>Ngày:</span>
                <span className="font-semibold text-slate-900">{new Date(selectedDate).toLocaleDateString('vi-VN')}</span>
              </div>
            )}
            {selectedTime && (
              <div className="flex justify-between text-slate-600">
                <span>Giờ:</span>
                <span className="font-semibold text-slate-900">{selectedTime}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600">
              <span>Số vé:</span>
              <span className="font-semibold text-slate-900">{tickets} vé</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-semibold text-slate-700">Tổng tiền:</span>
            <span className="text-3xl font-bold text-orange-500">{totalPrice.toLocaleString('vi-VN')} VND</span>
          </div>

          <div className="space-y-3">
            <button 
              type="submit"
              className="w-full rounded-full bg-orange-500 px-6 py-3 text-white text-lg font-semibold transition hover:bg-orange-400"
            >
              Xác nhận đặt vé
            </button>

            <button
              type="button"
              onClick={() => navigate(PUBLIC_PATH.SCHEDULE)}
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-900 text-lg font-semibold transition hover:bg-slate-100"
            >
              Quay lại lịch chiếu
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BookingPage
