# Project Web Phim - Hoàn Thành

Bạn đã hoàn thành project web phim với đầy đủ tính năng. Dưới đây là tóm tắt những gì đã được hoàn thiện:

## ✅ Cấu trúc Project

```
src/
├── Movie/
│   ├── movieData.js           # Dữ liệu phim sample
│   ├── MovieDetail.jsx        # Trang chi tiết phim ✨ THÊMMỚI
│   ├── ListMovie.jsx          # Danh sách phim ✨ THÊMMỚI
│   ├── SchedulePage.jsx       # Trang lịch chiếu ✨ THÊMMỚI
│   ├── BookingPage.jsx        # Trang đặt vé ✨ THÊMMỚI
│   ├── CinemaPage.jsx         # Trang rạp chiếu ✨ THÊMMỚI
│   ├── PromotionPage.jsx      # Trang khuyến mãi ✨ THÊMMỚI
│   ├── AppPage.jsx            # Trang ứng dụng ✨ THÊMMỚI
│   └── SupportPage.jsx        # Trang hỗ trợ ✨ THÊMMỚI
│
├── feature/
│   ├── home/
│   │   └── Components/
│   │       └── HomePage.jsx
│   ├── sign-in/
│   │   ├── components/
│   │   │   └── SignInPage.jsx
│   │   ├── hooks/
│   │   │   └── useMutationSignIn.js
│   │   ├── services/
│   │   │   └── user.service.js
│   │   └── store/
│   │       └── auth.store.js
│   ├── register/
│   │   ├── components/
│   │   │   └── RegisterPage.jsx ✨ CẬP NHẬT
│   │   ├── hooks/
│   │   │   └── useMutationRegister.jsx ✨ CẬP NHẬT
│   │   ├── schema/
│   │   │   └── registerFormSchema.jsx ✨ CẬP NHẬT
│   │   └── service/
│   │       └── user.service.js
│   └── userProfile/
│       ├── components/
│       │   ├── UserProfilePage.jsx ✨ CẬP NHẬT
│       │   ├── HistoryBooking.jsx ✨ THÊMMỚI
│       │   └── UserInfo.jsx
│       ├── hooks/
│       │   └── useQueryUser.jsx
│       └── services/
│           └── user.service.js
│
├── layout/
│   ├── MainLayout.jsx ✨ CẬP NHẬT
│   └── AdminLayout.jsx
│
├── admin/
│   ├── DashBoard.jsx
│   ├── Movies.jsx
│   ├── Users.jsx
│   ├── Settings.jsx
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
│
├── store/
│   └── auth.slice.js
│
├── constant/
│   ├── path.js ✨ CẬP NHẬT
│   └── localStorageKeys.js
│
├── shared/
│   └── components/
│       ├── Header.jsx ✨ CẬP NHẬT
│       └── Footer.jsx
│
└── App.jsx ✨ CẬP NHẬT (Toàn bộ routing)
```

## 🎯 Các Trang Chính

### 1. **Trang Chủ (Home)** - `/trang-chu`
- Hiển thị banner chính về dịch vụ phim
- Giới thiệu ưu điểm nền tảng
- Danh sách phim đang hot
- Liên kết tới các trang khác

### 2. **Lịch Chiếu** - `/lich-chieu`
- Danh sách tất cả phim
- Hiển thị thông tin chi tiết phim
- Nút "Xem chi tiết" và "Đặt vé ngay"
- Giao diện lưới đáp ứng (responsive)

### 3. **Chi Tiết Phim** - `/phim/:id`
- Thông tin chi tiết về phim
- Lịch chiếu của phim
- Giá vé và loại phòng chiếu
- Nút đặt vé trực tiếp
- Nút quay lại lịch chiếu

### 4. **Đặt Vé** - `/dat-ve/:id`
- Chọn suất chiếu
- Chọn số lượng vé
- Tóm tắt đơn hàng (tính giá)
- Xác nhận đặt vé
- Thông báo thành công từ `sonner`

### 5. **Trang Rạp** - `/rap-chieu`
- Danh sách rạp chiếu
- Vị trí và tiện ích từng rạp

### 6. **Khuyến Mãi** - `/khuyen-mai`
- Các chương trình khuyến mãi hiện tại
- Chi tiết ưu đãi

### 7. **Ứng Dụng** - `/ung-dung`
- Thông tin về ứng dụng mobile

### 8. **Hỗ Trợ** - `/ho-tro`
- Câu hỏi thường gặp
- Thông tin liên hệ

### 9. **Hồ Sơ Người Dùng** - `/profile` (PRIVATE)
- **Tab 1: Thông tin cá nhân**
  - Họ tên, email, tài khoản
  - Số điện thoại
  - Loại người dùng
  
- **Tab 2: Lịch sử đặt vé**
  - Danh sách các lần đặt vé
  - Thông tin phim, ngày đặt, số lượng vé

## 🔐 Xác Thực & Phân Quyền

### Đăng Nhập - `/sign-in`
- Form nhập tài khoản & mật khẩu
- Tích hợp API `/QuanLyNguoiDung/DangNhap`
- Lưu token và user info trong:
  - **LocalStorage** (access_token, user_info)
  - **Zustand store** (useAuthStore)
  - **Redux store** (auth.slice)
- Thông báo thành công/thất bại từ `sonner`
- Redirect tới trang mà người dùng yêu cầu (query param `?from=...`)

### Đăng Ký - `/register`
- Form nhập: Họ tên, Email, Tài khoản, Mật khẩu, Số điện thoại, Mã nhóm
- Validation sử dụng **Zod** schema
- Tích hợp API `/QuanLyNguoiDung/DangKy`
- Thông báo kết quả, redirect sang đăng nhập khi thành công

### Header Động
- **Chưa đăng nhập**: Hiển thị nút "Đăng Nhập" & "Đăng Ký"
- **Đã đăng nhập**: Hiển thị "Hồ sơ" & "Đăng xuất"
- Tên người dùng hiển thị sau "Xin chào"

### Bảo Vệ Route
- **ProtectedRoute**: Kiểm tra user role (ADMIN/QUANTRI/MANAGER)
- **MainLayout**: Redirect auth pages nếu đã login
- Private routes chỉ truy cập khi đã login

## 🎨 Giao Diện & Styling

### Tailwind CSS
- Toàn bộ project dùng Tailwind utility classes
- Responsive design (sm:, md:, lg:)
- Cards, buttons, forms được style đẹp

### Antd Components
- Input, Button, Tabs, Table (cho admin)
- Consistent UI components

## 📦 Công Nghệ Sử Dụng

```json
{
  "react": "^19.2.0",
  "react-router": "^7.13.1",
  "react-hook-form": "^7.71.2",
  "@hookform/resolvers": "^5.2.2",
  "zod": "^4.3.6",
  "@tanstack/react-query": "^5.90.21",
  "react-redux": "^9.2.0",
  "@reduxjs/toolkit": "^2.11.2",
  "zustand": "^5.0.12",
  "axios": "^1.13.6",
  "antd": "^6.3.2",
  "sonner": "^2.0.7",
  "tailwindcss": "^4.2.1"
}
```

## 🚀 Chạy Project

```bash
# Dev
npm run dev

# Build
npm run build

# Preview
npm run preview
```

Server sẽ chạy tại: **http://localhost:5173**

## 🔗 API Endpoints

- **Đăng nhập**: `POST /QuanLyNguoiDung/DangNhap`
- **Đăng ký**: `POST /QuanLyNguoiDung/DangKy`
- **Thông tin tài khoản**: `POST /QuanLyNguoiDung/ThongTinTaiKhoan`
- **Danh sách người dùng**: `GET /QuanLyNguoiDung/LayDanhSachNguoiDung`
- **Xóa người dùng**: `DELETE /QuanLyNguoiDung/XoaNguoiDung`

## ✨ Tính Năng Nổi Bật

✅ Routing đầy đủ cho tất cả trang  
✅ Xác thực & đăng nhập/đăng ký  
✅ Phân quyền admin  
✅ Hồ sơ người dùng với lịch sử đặt vé  
✅ Đặt vé phim nhanh chóng  
✅ Form validation với Zod  
✅ State management (Redux + Zustand)  
✅ API integration với React Query  
✅ Responsive UI với Tailwind CSS  
✅ Toast notifications (Sonner)  
✅ Build thành công với Vite

---

**Dự án hoàn chỉnh và sẵn sàng triển khai! 🎬**
