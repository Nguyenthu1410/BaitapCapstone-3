import React from 'react'

const CinemaPage = () => {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Rạp chiếu</h1>
        <p className="mt-3 text-slate-300">Khám phá hệ thống rạp, vị trí và trải nghiệm xem phim tốt nhất.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { name: 'Galaxy Cinema', location: 'Vincom Center', description: 'Rạp hiện đại với màn hình lớn và âm thanh sống động.' },
          { name: 'CGV', location: 'Nguyễn Chí Thanh', description: 'Tiện nghi cao cấp và ghế êm ái.' },
          { name: 'BHD Star', location: 'Bitexco', description: 'Địa điểm thuận tiện, phù hợp cho gia đình và bạn bè.' },
        ].map((cinema) => (
          <div key={cinema.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">{cinema.name}</h2>
            <p className="mt-2 text-slate-600">{cinema.location}</p>
            <p className="mt-4 text-slate-500">{cinema.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CinemaPage
