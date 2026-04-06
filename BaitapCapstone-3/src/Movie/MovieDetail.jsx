import React from 'react'
import { Link, useParams } from 'react-router'
import { PUBLIC_PATH } from '../constant/path'
import { movies } from './movieData'

const MovieDetail = () => {
  const { id } = useParams()
  const movie = movies.find((item) => item.id === id)

  if (!movie) {
    return (
      <div className="rounded-3xl border border-red-200 bg-white p-8 text-center text-red-700 shadow">
        <h2 className="text-2xl font-semibold">Phim không tìm thấy</h2>
        <p className="mt-3 text-slate-600">Vui lòng quay lại trang lịch chiếu để chọn phim.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-orange-300">{movie.genre}</p>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="max-w-3xl text-slate-300">{movie.description}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <p>Thời lượng: {movie.duration}</p>
            <p>Đánh giá: {movie.rating}</p>
            <p>Ngày chiếu: {movie.releaseDate}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900">Thông tin phim</h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <p><strong>Rạp:</strong> {movie.cinema}</p>
            <p><strong>Lịch chiếu:</strong> {movie.schedule.join(', ')}</p>
            <p><strong>Mô tả:</strong> {movie.description}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900">Đặt vé</h2>
          <p className="mt-4 text-slate-600">Chọn ngày và suất phù hợp, sau đó thực hiện đặt vé.</p>
          <div className="mt-6 space-y-4">
            <p><strong>Giá vé:</strong> 120.000 VND/vé</p>
            <p><strong>Phòng chiếu:</strong> Thường</p>
          </div>
          <div className="mt-8 space-y-3">
            <Link
              to={PUBLIC_PATH.BOOKING.replace(':id', movie.id)}
              className="block rounded-full bg-orange-500 px-6 py-3 text-center text-white transition hover:bg-orange-400"
            >
              Đặt vé ngay
            </Link>
            <Link
              to={PUBLIC_PATH.SCHEDULE}
              className="block rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-slate-900 transition hover:bg-slate-100"
            >
              Quay lại lịch chiếu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
