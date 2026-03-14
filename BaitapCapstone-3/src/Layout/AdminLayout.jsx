import React from "react";

const AdminLayout = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="flex min-h-screen">
        <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
          <div className="p-6 text-2xl font-bold text-center border-b border-slate-700">
            <span className="text-red-500">MOVIE</span>PANEL
          </div>
          <nav className="flex-1 mt-6 px-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 bg-red-600 rounded-lg transition"
                >
                  <i className="fas fa-th-large w-6" /> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-slate-800 rounded-lg transition text-gray-400 hover:text-white"
                >
                  <i className="fas fa-film w-6" /> Quản lý phim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-slate-800 rounded-lg transition text-gray-400 hover:text-white"
                >
                  <i className="fas fa-list w-6" /> Danh mục/Thể loại
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-slate-800 rounded-lg transition text-gray-400 hover:text-white"
                >
                  <i className="fas fa-users w-6" /> Người dùng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 hover:bg-slate-800 rounded-lg transition text-gray-400 hover:text-white"
                >
                  <i className="fas fa-comment w-6" /> Bình luận
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-slate-700">
            <button className="w-full flex items-center p-3 text-gray-400 hover:text-red-400">
              <i className="fas fa-sign-out-alt w-6" /> Đăng xuất
            </button>
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
            <div className="relative w-96">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                placeholder="Tìm tên phim, diễn viên..."
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-700">
                  Nguyễn Admin
                </p>
                <p className="text-xs text-gray-500">Quản trị viên</p>
              </div>
              <img
                className="h-10 w-10 rounded-full border-2 border-red-500 p-0.5"
                src="https://ui-avatars.com/api/?name=Admin&background=random"
                alt="User"
              />
            </div>
          </header>
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Danh sách phim cập nhật
              </h1>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-red-200 transition">
                <i className="fas fa-plus mr-2" /> Thêm phim mới
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold">
                  Tổng số phim
                </p>
                <p className="text-3xl font-bold text-gray-800">1,245</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold">
                  Lượt xem tháng này
                </p>
                <p className="text-3xl font-bold text-blue-600">85.4K</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase font-bold">
                  Thành viên mới
                </p>
                <p className="text-3xl font-bold text-green-600">+128</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Phim
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Thể loại
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Ngày đăng
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Trạng thái
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        src="https://via.placeholder.com/45x60"
                        className="rounded shadow-sm"
                      />
                      <div>
                        <div className="font-bold text-gray-800 text-sm">
                          Doctor Strange 2
                        </div>
                        <div className="text-xs text-gray-400">
                          128 phút | HD
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Hành động, Viễn tưởng
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      12/03/2026
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                        Công khai
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700 transition">
                        <i className="fas fa-edit" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition">
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        src="https://via.placeholder.com/45x60"
                        className="rounded shadow-sm"
                      />
                      <div>
                        <div className="font-bold text-gray-800 text-sm">
                          Spider-Man: No Way Home
                        </div>
                        <div className="text-xs text-gray-400">
                          148 phút | 4K
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Phiêu lưu
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      10/03/2026
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-600 rounded-full">
                        Chờ duyệt
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700 transition">
                        <i className="fas fa-edit" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition">
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
