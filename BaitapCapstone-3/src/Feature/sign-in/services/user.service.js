import { api } from "../../../library/axios";


export const userService = {
    dangNhap: (payload)=> api.post('/QuanLyNguoiDung/DangNhap', payload)
}