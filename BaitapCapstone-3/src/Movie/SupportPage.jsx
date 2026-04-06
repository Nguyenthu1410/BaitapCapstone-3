import React from 'react'

const SupportPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Hỗ trợ</h1>
        <p className="mt-3 text-slate-300">Hỗ trợ nhanh chóng cho mọi thắc mắc về vé, rạp chiếu và chính sách đổi trả.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Câu hỏi thường gặp', description: 'Thông tin về quy định đặt vé và chính sách hoàn trả.' },
          { title: 'Liên hệ hỗ trợ', description: 'Gọi hotline, email hoặc chat trực tiếp để được hỗ trợ.' },
          { title: 'Giờ làm việc', description: 'Hỗ trợ từ 8:00 đến 22:00 mỗi ngày trong tuần.' },
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

export default SupportPage
