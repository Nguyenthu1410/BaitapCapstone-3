import React from "react";
import { Link } from "react-router";
import { PUBLIC_PATH } from "../../../constant/path";
import { useMovieList } from "../../../Movie/hooks/useMovies";
import { Skeleton } from "antd";

const highlights = [
  {
    title: "Lịch chiếu nhanh",
    description: "Tìm suất chiếu mới nhất, đặt vé ngay trong vài giây.",
  },
  {
    title: "Rạp gần bạn",
    description: "Xem rạp và không gian hiện có tại khu vực của bạn.",
  },
  {
    title: "Ưu đãi hấp dẫn",
    description: "Giảm giá vé, combo và quà tặng dành riêng cho bạn.",
  },
];

const trendingMovies = [
  {
    title: "Black Panther: Wakanda Forever",
    category: "Hành động",
  },
  {
    title: "Everything Everywhere All at Once",
    category: "Kỳ ảo",
  },
  {
    title: "Spider-Man: No Way Home",
    category: "Siêu anh hùng",
  },
];

const HomePage = () => {
  const { data: movies = [], isLoading, isError } = useMovieList();
  return (
    <div className="space-y-16 pb-10">
      <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.78), rgba(15,23,42,0.78)), url('https://images.unsplash.com/photo-1517604931442-7b53b8b266f1?auto=format&fit=crop&w=1400&q=80')",
          }}
        >
          <div className="container mx-auto px-6 py-20 lg:px-12 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Rạp chiếu phim
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Xem phim mới nhất, đặt vé nhanh chóng.
              </h1>
              <p className="text-lg text-slate-200 sm:text-xl">
                Trải nghiệm lịch chiếu, rạp và khuyến mãi trong một nền tảng thân thiện.
                Chọn bộ phim yêu thích và giữ chỗ ngay hôm nay.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to={PUBLIC_PATH.SCHEDULE}
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-base font-semibold text-white transition hover:bg-orange-400"
                >
                  Xem lịch chiếu
                </Link>
                <Link
                  to={PUBLIC_PATH.PROMOTION}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/20"
                >
                  Khuyến mãi ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Tại sao chọn Movie?
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Giao diện thân thiện, tìm kiếm nhanh và thông tin rạp chi tiết. Tất cả đều trong một nơi cho trải nghiệm xem phim hoàn thiện.
            </p>
          </div>
          <Link
            to={PUBLIC_PATH.CINEMA}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Khám phá rạp</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-2xl sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">Phim đang hot</h2>
              <p className="mt-3 text-slate-300">
                Những bộ phim đang được yêu thích nhất trên hệ thống. Cập nhật liên tục theo lịch chiếu và đánh giá người xem.
              </p>
            </div>
            <Link
              to={PUBLIC_PATH.SCHEDULE}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Xem tất cả phim
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="rounded-3xl bg-slate-800 p-6 shadow-xl">
                  <Skeleton.Image active className="h-48 rounded-3xl" />
                  <Skeleton active paragraph={{ rows: 2 }} className="mt-5" />
                </div>
              ))
            ) : isError ? (
              <div className="col-span-full text-center py-12">
                <p className="text-red-400 font-semibold">Không thể tải danh sách phim</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Thử lại
                </button>
              </div>
            ) : (
              movies.slice(0, 6).map((movie) => (
                <div key={movie.maPhim} className="rounded-3xl bg-slate-800 p-6 shadow-xl transition hover:-translate-y-1">
                  <div className="h-48 rounded-3xl bg-orange-500 p-4 text-white shadow-inner overflow-hidden">
                    <img
                      src={movie.hinhAnh}
                      alt={movie.tenPhim}
                      className="w-full h-full object-cover rounded-3xl"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=NoImage'
                      }}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{movie.tenPhim}</h3>
                  <p className="mt-3 text-slate-400">
                    {movie.moTa.length > 100 ? `${movie.moTa.substring(0, 100)}...` : movie.moTa}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-orange-400 font-medium">
                      ⭐ {movie.danhGia}/10
                    </span>
                    <Link
                      to={`/movie/${movie.maPhim}`}
                      className="text-sm text-orange-300 hover:text-orange-200 font-medium"
                    >
                      Chi tiết →
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg sm:p-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Cập nhật ưu đãi mới nhất</h2>
              <p className="mt-4 text-slate-600">
                Nhận thông báo khi có vé giảm giá, combo ăn uống và sự kiện đặc biệt tại rạp.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={PUBLIC_PATH.PROMOTION}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >Xem khuyến mãi</Link>
              <Link
                to={PUBLIC_PATH.SIGN_IN}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >Đăng nhập</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
