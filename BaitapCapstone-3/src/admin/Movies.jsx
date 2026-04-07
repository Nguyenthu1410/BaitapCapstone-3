import React, { useState } from 'react'
import MovieTable from './MovieTable'
import { Skeleton } from 'antd'
import { useAdminMovies, useDeleteMovie, useAddMovieWithImage, useUpdateMovieWithImage, useCreateScheduleMovie, useGetCinemaClusters } from './hooks/useAdminMovies'

const Movies = () => {
  const [showForm, setShowForm] = useState(false)
  const [editingMovie, setEditingMovie] = useState(null)
  const [selectedScheduleMovie, setSelectedScheduleMovie] = useState(null)
  const [scheduleForm, setScheduleForm] = useState({
    maRap: '',
    ngayChieuGioChieu: '',
    giaVe: 0,
    maNhom: 'GP01',
  })
  const [cinemaSystemCode, setCinemaSystemCode] = useState('')

  const { data: movies = [], isLoading, isError, refetch } = useAdminMovies()
  const deleteMovieMutation = useDeleteMovie()
  const addMovieMutation = useAddMovieWithImage()
  const updateMovieMutation = useUpdateMovieWithImage()
  const createScheduleMovieMutation = useCreateScheduleMovie()

  const {
    data: cinemaClusters = [],
    isLoading: isCinemaLoading,
    refetch: fetchCinemaClusters,
  } = useGetCinemaClusters(cinemaSystemCode)

  const handleAddMovie = () => {
    setEditingMovie(null)
    setShowForm(true)
  }

  const handleEditMovie = (movie) => {
    setEditingMovie(movie)
    setShowForm(true)
  }

  const handleDeleteMovie = async (maPhim) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa phim này?')) {
      try {
        await deleteMovieMutation.mutateAsync(maPhim)
        await refetch()
        alert('Xóa phim thành công')
      } catch (error) {
        console.error('Error deleting movie:', error)
        alert('Lỗi khi xóa phim')
      }
    }
  }

  const handleSaveMovie = async (movieData) => {
    try {
      if (editingMovie) {
        await updateMovieMutation.mutateAsync(movieData)
        alert('Cập nhật phim thành công')
      } else {
        await addMovieMutation.mutateAsync(movieData)
        alert('Thêm phim thành công')
      }
      setShowForm(false)
      await refetch()
    } catch (error) {
      console.error('Error saving movie:', error)
      alert('Lỗi khi lưu phim')
    }
  }

  const handleOpenScheduleForm = (movie) => {
    setSelectedScheduleMovie(movie)
    setScheduleForm({
      maRap: '',
      ngayChieuGioChieu: '',
      giaVe: 0,
      maNhom: 'GP01',
    })
  }

  const handleCloseScheduleForm = () => {
    setSelectedScheduleMovie(null)
  }

  const handleScheduleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedScheduleMovie) return

    try {
      await createScheduleMovieMutation.mutateAsync({
        maPhim: selectedScheduleMovie.maPhim,
        maRap: scheduleForm.maRap,
        ngayChieuGioChieu: scheduleForm.ngayChieuGioChieu,
        giaVe: Number(scheduleForm.giaVe),
        maNhom: scheduleForm.maNhom,
      })

      alert('Tạo lịch chiếu thành công')
      setSelectedScheduleMovie(null)
    } catch (error) {
      console.error('Error creating schedule:', error)
      alert('Lỗi khi tạo lịch chiếu')
    }
  }

  const handleCinemaSystemSearch = async () => {
    if (!cinemaSystemCode.trim()) {
      alert('Vui lòng nhập mã hệ thống rạp')
      return
    }

    try {
      await fetchCinemaClusters()
    } catch (error) {
      console.error('Error fetching cinema clusters:', error)
      alert('Lỗi khi lấy thông tin cụm rạp')
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-6 text-center">
        <p className="text-red-600 font-semibold">Không thể tải danh sách phim.</p>
        <button
          onClick={refetch}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Thử lại
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý Phim</h1>
        <button
          onClick={handleAddMovie}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
        >
          + Thêm Phim
        </button>
      </div>

      {showForm && (
        <MovieForm
          movie={editingMovie}
          onSave={handleSaveMovie}
          onCancel={() => setShowForm(false)}
        />
      )}

      {selectedScheduleMovie && (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Tạo lịch chiếu cho: {selectedScheduleMovie.tenPhim}</h2>
          <form onSubmit={handleScheduleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mã Rạp</label>
              <input
                type="text"
                value={scheduleForm.maRap}
                onChange={(e) => setScheduleForm({ ...scheduleForm, maRap: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ngày Giờ Chiếu</label>
              <input
                type="datetime-local"
                value={scheduleForm.ngayChieuGioChieu}
                onChange={(e) => setScheduleForm({ ...scheduleForm, ngayChieuGioChieu: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Giá Vé</label>
              <input
                type="number"
                min="0"
                value={scheduleForm.giaVe}
                onChange={(e) => setScheduleForm({ ...scheduleForm, giaVe: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mã Nhóm</label>
              <input
                type="text"
                value={scheduleForm.maNhom}
                onChange={(e) => setScheduleForm({ ...scheduleForm, maNhom: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold"
              >
                Lưu lịch chiếu
              </button>
              <button
                type="button"
                onClick={handleCloseScheduleForm}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 font-semibold"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Lấy thông tin cụm rạp</h2>
        <div className="grid gap-4 sm:grid-cols-3 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mã hệ thống rạp</label>
            <input
              type="text"
              value={cinemaSystemCode}
              onChange={(e) => setCinemaSystemCode(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="VD: CGV"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="button"
              onClick={handleCinemaSystemSearch}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 font-semibold"
            >
              Tìm cụm rạp
            </button>
          </div>
        </div>

        <div className="mt-4">
          {isCinemaLoading ? (
            <p className="text-gray-600">Đang tải thông tin cụm rạp...</p>
          ) : cinemaClusters.length > 0 ? (
            <div className="space-y-3">
              {cinemaClusters.map((cluster) => (
                <div key={cluster.maCumRap || cluster.tenCumRap} className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <p className="font-semibold text-gray-900">{cluster.tenCumRap || cluster.maCumRap}</p>
                  {cluster.diaChi && <p className="text-gray-600">{cluster.diaChi}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Chưa có dữ liệu cụm rạp. Nhập mã hệ thống rạp và bấm tìm.</p>
          )}
        </div>
      </div>

      {movies.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Không có phim nào</p>
        </div>
      ) : (
        <MovieTable
          movies={movies}
          onEdit={handleEditMovie}
          onDelete={handleDeleteMovie}
          onCreateSchedule={handleOpenScheduleForm}
        />
      )}
    </div>
  )
}


const MovieForm = ({ movie, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    tenPhim: movie?.tenPhim || '',
    moTa: movie?.moTa || '',
    ngayKhoiChieu: movie?.ngayKhoiChieu ? movie.ngayKhoiChieu.split('T')[0] : '',
    danhGia: movie?.danhGia || 0,
    maNhom: 'GP01'
  })
  const [selectedFile, setSelectedFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const submitData = new FormData()
    submitData.append('tenPhim', formData.tenPhim)
    submitData.append('moTa', formData.moTa)
    submitData.append('ngayKhoiChieu', formData.ngayKhoiChieu)
    submitData.append('danhGia', formData.danhGia)
    submitData.append('maNhom', formData.maNhom)

    if (selectedFile) {
      submitData.append('File', selectedFile)
    } else if (movie?.hinhAnh && !selectedFile) {
      // If editing and no new file selected, keep existing image
      submitData.append('hinhAnh', movie.hinhAnh)
    }

    if (movie) {
      submitData.append('maPhim', movie.maPhim)
    }

    onSave(submitData)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">{movie ? 'Chỉnh sửa Phim' : 'Thêm Phim Mới'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tên Phim</label>
          <input
            type="text"
            value={formData.tenPhim}
            onChange={(e) => setFormData({...formData, tenPhim: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mô tả</label>
          <textarea
            value={formData.moTa}
            onChange={(e) => setFormData({...formData, moTa: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Hình Ảnh</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={!movie} // Required only for new movies
          />
          {movie?.hinhAnh && !selectedFile && (
            <p className="mt-2 text-sm text-gray-600">Hình ảnh hiện tại sẽ được giữ nếu không chọn file mới</p>
          )}
          {selectedFile && (
            <p className="mt-2 text-sm text-green-600">Đã chọn: {selectedFile.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ngày Khởi Chiếu</label>
          <input
            type="date"
            value={formData.ngayKhoiChieu}
            onChange={(e) => setFormData({...formData, ngayKhoiChieu: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Đánh Giá</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={formData.danhGia}
            onChange={(e) => setFormData({...formData, danhGia: parseFloat(e.target.value)})}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            type="submit" 
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Lưu
          </button>
          <button 
            type="button" 
            onClick={onCancel} 
            className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 font-semibold"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  )
}

export default Movies
