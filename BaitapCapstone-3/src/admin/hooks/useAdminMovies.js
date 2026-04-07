import { useQuery, useMutation } from '@tanstack/react-query'
import { adminMovieService } from '../services/adminMovie.service'

export const useAdminMovies = () => {
  return useQuery({
    queryKey: ['adminMovies'],
    queryFn: () => adminMovieService.fetchMovies().then(res => res.data.content || []),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })
}

export const useDeleteMovie = () => {
  return useMutation({
    mutationFn: (maPhim) => adminMovieService.deleteMovie(maPhim).then(res => res.data),
  })
}

export const useAddMovieWithImage = () => {
  return useMutation({
    mutationFn: (formData) => adminMovieService.addMovieWithImage(formData).then(res => res.data),
  })
}

export const useUpdateMovieWithImage = () => {
  return useMutation({
    mutationFn: (formData) => adminMovieService.updateMovieWithImage(formData).then(res => res.data),
  })
}

export const useCreateScheduleMovie = () => {
    return useMutation({
        mutationFn: (formData) => adminMovieService.createScheduleMovie(formData).then(res => res.data),
    })
}

export const useGetCinemaClusters = (maHeThongRap) => {
    return useQuery({
        queryKey: ['cinemaClusters', maHeThongRap],
        queryFn: () => adminMovieService.getCinemaClusters(maHeThongRap).then(res => res.data.content || []),
        enabled: false,
    })
}

