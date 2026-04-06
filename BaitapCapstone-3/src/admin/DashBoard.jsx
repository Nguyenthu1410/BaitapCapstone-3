import React, { useEffect, useState } from 'react'
import { api } from '../library/axios'

const DashBoard = () => {
  const [stats, setStats] = useState({
    totalMovies: 0,
    totalUsers: 0,
    totalBookings: 0,
    revenue: 0
  })

  useEffect(() => {
    // Giả sử có API để lấy thống kê
    // Ở đây dùng dữ liệu giả
    setStats({
      totalMovies: 150,
      totalUsers: 2500,
      totalBookings: 12000,
      revenue: 50000000
    })
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Movies</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalMovies}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalUsers}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Bookings</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.totalBookings}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-red-600">{stats.revenue.toLocaleString()} VND</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">New movie "Avengers: Endgame" added</p>
          <p className="text-sm text-gray-600">User John Doe booked tickets</p>
          <p className="text-sm text-gray-600">Movie "Spider-Man" updated</p>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
