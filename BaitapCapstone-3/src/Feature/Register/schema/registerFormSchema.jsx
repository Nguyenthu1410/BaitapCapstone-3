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

    email: z.string().email('Vui lòng nhập email hợp lệ'),
    taiKhoan: z.string().min(1, 'Vui lòng nhập tài khoản'),
    matKhau: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    soDt: z.string().optional(),
    maNhom: z.string().optional(),
})
