import { useQuery, useMutation } from '@tanstack/react-query'
import { cinemaService } from '../services/cinema.service'

export const useCinemaSystem = () => {
  return useQuery({
    queryKey: ['cinemaSystem'],
    queryFn: () => cinemaService.getCinemaSystem().then(res => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}

export const useCinemaSchedule = (maNhom = 'GP01') => {
  return useQuery({
    queryKey: ['cinemaSchedule', maNhom],
    queryFn: () => cinemaService.getCinemaSchedule(maNhom).then(res => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}

export const useMovieSchedule = (maPhim) => {
  return useQuery({
    queryKey: ['movieSchedule', maPhim],
    queryFn: () => cinemaService.getMovieSchedule(maPhim).then(res => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!maPhim, // Only fetch when maPhim is provided
  })
}

export const useBookTickets = () => {
  return useMutation({
    mutationFn: (bookingData) => cinemaService.bookTickets(bookingData).then(res => res.data),
  })
}
