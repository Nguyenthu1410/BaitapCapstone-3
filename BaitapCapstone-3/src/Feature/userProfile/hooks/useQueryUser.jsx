import { useQuery } from '@tanstack/react-query'
import { userService } from '../services'


export const useQueryUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => userService.getUserByToken(),
        staleTime: 30 * 60 * 1000,
        gcTime: 60 * 60 * 1000,
        select: response => response.data.content
    })
}