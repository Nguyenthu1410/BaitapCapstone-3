import React from 'react'

const PromotionPage = () => {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Khuyến mãi</h1>
        <p className="mt-3 text-slate-300">Cập nhật khuyến mãi vé phim, combo và ưu đãi dành riêng cho bạn.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Mua 1 tặng 1', detail: 'Áp dụng cho một số suất chiếu buổi tối.' },
          { title: 'Combo 2 vé', detail: 'Giảm 15% cho combo 2 vé kèm bỏng và nước.' },
          { title: 'Thẻ thành viên', detail: 'Nhận ưu đãi đặc biệt khi đăng ký tài khoản.' },
        ].map((promo) => (
          <div key={promo.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">{promo.title}</h2>
            <p className="mt-3 text-slate-600">{promo.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromotionPage
