import { useQuery, useMutation } from '@tanstack/react-query'
import { cinemaService } from '../services/cinema.service'

export const useCinemaSystem = () => {
  return useQuery({
    queryKey: ['cinemaSystem'],
    queryFn: () => cinemaService.getCinemaSystem().then(res => res.data),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
  })
}

export const useCinemaSchedule = (maNhom = 'GP01') => {
  return useQuery({
    queryKey: ['cinemaSchedule', maNhom],
    queryFn: () => cinemaService.getCinemaSchedule(maNhom).then(res => res.data),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10, 
  })
}

export const useMovieSchedule = (maPhim) => {
  return useQuery({
    queryKey: ['movieSchedule', maPhim],
    queryFn: () => cinemaService.getMovieSchedule(maPhim).then(res => res.data),
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10,
    enabled: !!maPhim, 
  })
}

export const useBookTickets = () => {
  return useMutation({
    mutationFn: (bookingData) => cinemaService.bookTickets(bookingData).then(res => res.data),
  })
}
