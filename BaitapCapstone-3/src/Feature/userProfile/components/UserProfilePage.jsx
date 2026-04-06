import React from 'react'
import { useQueryUser } from '../hooks'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'
import { HistoryBooking } from './HistoryBooking'

export const UserProfile = () => {
  const { data: user, isLoading } = useQueryUser()
  const currentUser = useSelector((state) => state.auth.userInfo)

  if (isLoading) {
    return <div className="text-center py-10">Đang tải thông tin người dùng...</div>
  }

  const profile = user || currentUser || {}

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <h1 className="text-4xl font-bold">Hồ sơ của bạn</h1>
        <p className="mt-3 text-slate-300">Quản lý thông tin cá nhân và lịch sử đặt vé của bạn.</p>
      </section>

      <Tabs
        items={[
          {
            key: 'info',
            label: 'Thông tin cá nhân',
            children: (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                <div className="space-y-4 text-slate-600">
                  <p><strong>Họ tên:</strong> {profile.hoTen || 'Chưa có thông tin'}</p>
                  <p><strong>Email:</strong> {profile.email || 'Chưa có thông tin'}</p>
                  <p><strong>Tài khoản:</strong> {profile.taiKhoan || profile.tenDangNhap || 'Chưa có thông tin'}</p>
                  <p><strong>Số điện thoại:</strong> {profile.soDT || 'Chưa có thông tin'}</p>
                  <p><strong>Loại người dùng:</strong> {profile.maLoaiNguoiDung || profile.role || 'Khách hàng'}</p>
                </div>
              </div>
            ),
          },
          {
            key: 'booking',
            label: 'Lịch sử đặt vé',
            children: <HistoryBooking profile={profile} />,
          },
        ]}
      />
    </div>
  )
}
