import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { APP_CONFIG } from '../Config/appConfig'
import { PUBLIC_PATH } from '../constant/path'
import { LOCAL_STORAGE_KEYS } from '../constant'

const AdminLayout = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-xl font-semibold">
            <NavLink to={PRIVATE_PATH.ADMIN}>Movie Admin</NavLink>
          </h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to={PRIVATE_PATH.ADMIN_DASHBOARD}
            end
            className={(isActive) => `block rounded px-3 py-2 text-sm font-medium ${isActive? "bg-slate-800": ""}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to={PRIVATE_PATH.ADMIN_MOVIES}
            end
            className={(isActive) => `block rounded px-3 py-2 text-sm font-medium ${isActive? "bg-slate-800": ""}`}
          >
            Movies
          </NavLink>
          <NavLink
             to={PRIVATE_PATH.ADMIN_USERS}
            end
            className={(isActive) => `block rounded px-3 py-2 text-sm font-medium ${isActive? "bg-slate-800": ""}`}
          >
            Users
          </NavLink>
          <NavLink
             to={PRIVATE_PATH.ADMIN_SETTING}
            end
            className={(isActive) => `block rounded px-3 py-2 text-sm font-medium ${isActive? "bg-slate-800": ""}`}
          >
            Settings
          </NavLink>
        </nav>
        <div className="px-4 py-5 border-t border-slate-800">
          <button
            type="button"
            className="w-full rounded bg-red-600 px-3 py-2 text-sm font-medium hover:bg-red-700"
            onClick={() => {
              localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)
              localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO)
              navigate(PUBLIC_PATH.SIGN_IN)
            }}
          >
            Đăng xuất
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header
          className="shadow-sm bg-white"
          style={{ minHeight: APP_CONFIG.HEADER_HEIGHT }}
        >
          <div className="container mx-auto h-full flex items-center justify-between px-4">
            <h2 className="text-lg font-semibold">Bảng điều khiển</h2>
            <span className="text-sm text-slate-500">Xin chào, Admin</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout