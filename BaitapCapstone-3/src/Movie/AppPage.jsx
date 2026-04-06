import React from 'react'

const AppPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Ứng dụng Movie</h1>
        <p className="mt-3 text-slate-300">Tải ứng dụng để đặt vé nhanh hơn, lưu lịch chiếu và nhận thông báo ưu đãi.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {[
          { title: 'Đặt vé mọi lúc', description: 'Đặt vé dễ dàng chỉ với vài thao tác trên điện thoại.' },
          { title: 'Thông báo khuyến mãi', description: 'Nhận thông tin ưu đãi mới nhất ngay khi cập nhật.' },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppPage
