import React from "react";
import { Link } from "react-router";
import { PUBLIC_PATH } from "../../../Constant/path";

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
            {trendingMovies.map((movie) => (
              <div key={movie.title} className="rounded-3xl bg-slate-800 p-6 shadow-xl transition hover:-translate-y-1">
                <div className="h-48 rounded-3xl bg-orange-500 p-4 text-white shadow-inner">
                  <div className="flex h-full items-end justify-start">
                    <span className="text-xs uppercase tracking-[0.24em] text-orange-100/80">{movie.category}</span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{movie.title}</h3>
                <p className="mt-3 text-slate-400">Cập nhật lịch chiếu, rạp và đánh giá sớm cho bộ phim này.</p>
              </div>
            ))}
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
