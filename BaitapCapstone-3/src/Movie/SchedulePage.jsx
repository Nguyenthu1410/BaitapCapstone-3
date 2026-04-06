import React from 'react'
import { Link } from 'react-router'
import { PUBLIC_PATH } from '../constant/path'
import { useMovieList } from './hooks/useMovies'
import { Skeleton } from 'antd'

const SchedulePage = () => {
  const { data: movies = [], isLoading, isError } = useMovieList()

  if (isLoading) {
    return (
      <div className="space-y-10">
        <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold">Lịch chiếu phim</h1>
            <p className="text-slate-300">Đang tải dữ liệu...</p>
          </div>
        </section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <Skeleton active paragraph={{ rows: 4 }} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="space-y-10">
        <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold">Lịch chiếu phim</h1>
          </div>
        </section>
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="text-red-600 font-semibold">Không thể tải lịch chiếu</p>
          <p className="text-sm text-red-500 mt-2">Vui lòng thử lại sau</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold">Lịch chiếu phim</h1>
          <p className="text-slate-300">
            Xem lịch chiếu mới nhất và chọn suất phù hợp cho bạn. Chọn phim, xem rạp và đặt vé nhanh chóng.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <article key={movie.maPhim} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950 p-5 text-white h-48 overflow-hidden">
                  <img 
                    src={movie.hinhAnh} 
                    alt={movie.tenPhim}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x300?text=' + movie.tenPhim?.slice(0, 10)
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-slate-900 line-clamp-2">{movie.tenPhim}</h2>
                  <p className="text-slate-600 text-sm line-clamp-3">{movie.moTa}</p>
                </div>
                <div className="grid gap-2 text-sm text-slate-600">
                  <p><strong>Đánh giá:</strong> {movie.danhGia || '8.5'}/10</p>
                  <p><strong>Ngày phát hành:</strong> {new Date(movie.ngayKhoiChieu).toLocaleDateString('vi-VN')}</p>
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={PUBLIC_PATH.MOVIE_DETAIL.replace(':id', movie.maPhim)}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Xem chi tiết
                  </Link>
                  <Link
                    to={PUBLIC_PATH.BOOKING.replace(':id', movie.maPhim)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Đặt vé ngay
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-slate-600">Hiện chưa có phim nào</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SchedulePage
