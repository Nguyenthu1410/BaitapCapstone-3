import { api } from "../../../library/axios";


export const userService = {
    dangKy: (payload) => api.post('/QuanLyNguoiDung/DangKy',payload)
}

export default userService