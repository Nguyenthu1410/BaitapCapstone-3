import z from 'zod'

export const registerFormSchema = z.object({
    hoTen: z
        .string({
            error: 'Vui lòng nhập họ tên',
        })
        .min(1, 'Vui lòng nhập họ tên')
        .min(5, 'Họ tên phải có ít nhất 5 ký tự')
        .max(20, 'Họ tên không được vượt quá 20 ký tự')
        .regex(/^[a-zA-Z\s]+$/, 'Họ tên chỉ được chứa chữ cái và khoảng trắng'),

    email: z.string().min(1, 'Vui lòng nhập email'),
    taiKhoan: z.string().min(1, 'Vui lòng nhập tài khoản'),
    matKhau: z.string().min(1, 'Vui lòng nhập mật khẩu'),
    soDt: z.string().min(1, 'Vui lòng nhập số điện thoại'),
    maNhom: z.string().default('GP01'),
    maLoaiNguoiDung: z.string().default('QuanTri'),
})
