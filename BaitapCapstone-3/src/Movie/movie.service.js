import { api } from '@/library/axios'

export const movieService = {
  getMovieList: (maNhom = 'GP01') => {
    return api.get('/QuanLyPhim/LayDanhSachPhim', {
      params: { maNhom }
    })
  },
  
  getMovieDetail: (maPhim) => {
    return api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
  },
}

export default movieService
