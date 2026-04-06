import { useMutation } from '@tanstack/react-query'
import userService from '../service/user.service'
import { toast } from 'sonner'

export const useMutationRegister = () => {
    const createUser = useMutation({
        mutationFn: (payload) => userService.dangKy(payload),
        onSuccess() {
            toast.success('Đăng ký thành công')
        },
        onError() {
            toast.error('Đăng ký thất bại')
        }
    })

    return { createUser }
}

export default useMutationRegister