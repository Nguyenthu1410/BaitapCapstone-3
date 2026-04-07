import React from 'react'

const MovieTable = ({ movies, onEdit, onDelete, onCreateSchedule }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hình Ảnh
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tên Phim
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mô tả
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ngày Khởi Chiếu
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Đánh Giá
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thao Tác
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {movies.map((movie) => (
            <tr key={movie.maPhim} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                  className="h-16 w-12 object-cover rounded"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/50x80?text=NoImage'}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {movie.tenPhim}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                {movie.moTa}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(movie.ngayKhoiChieu).toLocaleDateString('vi-VN')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  {movie.danhGia}/10
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                <button
                  onClick={() => onEdit(movie)}
                  className="text-blue-600 hover:text-blue-900 font-semibold"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onCreateSchedule(movie)}
                  className="text-green-600 hover:text-green-900 font-semibold"
                >
                  Lịch chiếu
                </button>
                <button
                  onClick={() => onDelete(movie.maPhim)}
                  className="text-red-600 hover:text-red-900 font-semibold"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieTable
