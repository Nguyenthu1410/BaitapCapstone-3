import { useQuery } from '@tanstack/react-query'
import { movieService } from '../movie.service'

export const useMovieList = (maNhom = 'GP01') => {
  return useQuery({
    queryKey: ['movies', maNhom],
    queryFn: () => movieService.getMovieList(maNhom),
    select: (response) => response.data.content || [],
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

export const useMovieDetail = (maPhim) => {
  return useQuery({
    queryKey: ['movie', maPhim],
    queryFn: () => movieService.getMovieDetail(maPhim),
    select: (response) => response.data.content,
    enabled: !!maPhim,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  })
}
