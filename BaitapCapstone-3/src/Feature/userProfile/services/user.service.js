import { api } from "../../../library/axios"

export const userService = {
    getUserByToken: () => {
        return api.post('/QuanLyNguoiDung/ThongTinTaiKhoan')
    },
}
