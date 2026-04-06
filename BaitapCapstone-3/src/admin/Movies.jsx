import React, { useEffect, useState } from 'react'
import MovieTable from './MovieTable'
import { api } from '../library/axios'
import { Skeleton } from 'antd'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingMovie, setEditingMovie] = useState(null)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      setLoading(true)
      const response = await api.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
      setMovies(response.data.content || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching movies:', err)
      setError('Failed to load movies')
    } finally {
      setLoading(false)
    }
  }

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
        await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
        setMovies(movies.filter(movie => movie.maPhim !== maPhim))
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
        await api.post('/QuanLyPhim/CapNhatPhim', movieData)
        setMovies(movies.map(movie => movie.maPhim === editingMovie.maPhim ? movieData : movie))
        alert('Cập nhật phim thành công')
      } else {
        const response = await api.post('/QuanLyPhim/ThemPhim', movieData)
        setMovies([...movies, response.data.content])
        alert('Thêm phim thành công')
      }
      setShowForm(false)
    } catch (error) {
      console.error('Error saving movie:', error)
      alert('Lỗi khi lưu phim')
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-6 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
        <button
          onClick={fetchMovies}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Retry
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

      {movies.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Không có phim nào</p>
        </div>
      ) : (
        <MovieTable
          movies={movies}
          onEdit={handleEditMovie}
          onDelete={handleDeleteMovie}
        />
      )}
    </div>
  )
}


const MovieForm = ({ movie, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    tenPhim: movie?.tenPhim || '',
    moTa: movie?.moTa || '',
    hinhAnh: movie?.hinhAnh || '',
    ngayKhoiChieu: movie?.ngayKhoiChieu ? movie.ngayKhoiChieu.split('T')[0] : '',
    danhGia: movie?.danhGia || 0,
    maNhom: 'GP01'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = movie ? { ...formData, maPhim: movie.maPhim } : formData
    onSave(dataToSend)
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
          <label className="block text-sm font-medium text-gray-700">URL Hình Ảnh</label>
          <input
            type="url"
            value={formData.hinhAnh}
            onChange={(e) => setFormData({...formData, hinhAnh: e.target.value})}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
