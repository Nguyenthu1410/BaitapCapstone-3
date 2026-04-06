import { api } from '@/library/axios'

export const cinemaService = {
  getCinemaSystem: () => {
    return api.get('/QuanLyRap/LayThongTinHeThongRap')
  },

  getCinemaSchedule: (maNhom = 'GP01') => {
    return api.get('/QuanLyRap/LayThongTinLichChieuHeThongRap', {
      params: { maNhom }
    })
  },

  getMovieSchedule: (maPhim) => {
    return api.get('/QuanLyRap/LayThongTinLichChieuPhim', {
      params: { MaPhim: maPhim }
    })
  },

  bookTickets: (bookingData) => {
    return api.post('/QuanLyDatVe/DatVe', bookingData)
  },
}

export default cinemaService
