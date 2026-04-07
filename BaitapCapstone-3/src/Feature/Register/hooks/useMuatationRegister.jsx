import { useMutation } from '@tanstack/react-query'
import userService from '../service/user.service'
import { toast } from 'sonner'
import { LOCAL_STORAGE_KEYS } from '../../../constant'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../store/auth.slice'

export const useMutationRegister = () => {
    const dispatch = useDispatch()

    const createUser = useMutation({
        mutationFn: (payload) => {
            console.log('Registration payload received:', payload)
            // Force admin role
            const adminPayload = { ...payload, maLoaiNguoiDung: 'QuanTri' }
            console.log('Mock registration payload with admin:', adminPayload)
            return Promise.resolve({
                data: {
                    content: {
                        taiKhoan: adminPayload.taiKhoan,
                        hoTen: adminPayload.hoTen,
                        email: adminPayload.email,
                        soDt: adminPayload.soDt,
                        maLoaiNguoiDung: 'QuanTri',
                        accessToken: 'mock-jwt-token-for-testing-' + Date.now()
                    }
                }
            })
        },
        onSuccess(response) {
            console.log('Mock đăng ký thành công:', response.data)
            console.log('User role:', response.data.content.maLoaiNguoiDung)
            toast.success('Đăng ký thành công (Admin Account)')

            // Save mock user data like real login
            const { accessToken, ...rest } = response.data.content

            localStorage.setItem(LOCAL_STORAGE_KEYS.USER_INFO, JSON.stringify(rest))
            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken)

            // Save to Redux store
            dispatch(authActions.setCredentials({ accessToken, userInfo: rest }))
        },
        onError(error) {
            console.error('Mock đăng ký thất bại:', error)
            toast.error('Đăng ký thất bại (Mock)')
        }
    })

    return { createUser }
}

export default useMutationRegister