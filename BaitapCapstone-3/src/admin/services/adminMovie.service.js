import { api } from '@/library/axios'

export const adminMovieService = {
  fetchMovies: () => {
    return api.get('/QuanLyPhim/LayDanhSachPhim', {
      params: { maNhom: 'GP01' }
    })
  },

  deleteMovie: (maPhim) => {
    return api.delete('/QuanLyPhim/XoaPhim', {
      params: { MaPhim: maPhim }
    })
  },

  addMovieWithImage: (formData) => {
    return api.post('/QuanLyPhim/ThemPhimUploadHinh', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  updateMovieWithImage: (formData) => {
    return api.post('/QuanLyPhim/CapNhatPhimUpload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  createScheduleMovie: (scheduleData) => {
    return api.post('/QuanLyDatVe/TaoLichChieu', scheduleData)
  },

  getCinemaClusters: (maHeThongRap) => {
    return api.get('/QuanLyRap/LayThongTinCumRapTheoHeThong', {
      params: { maHeThongRap }
    })
  },
}

export default adminMovieService
