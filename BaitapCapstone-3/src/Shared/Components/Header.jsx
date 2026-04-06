import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { PUBLIC_PATH } from "../../constant/path";
import { APP_CONFIG } from "../../Config/appConfig";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth.slice";
import { LOCAL_STORAGE_KEYS } from "../../constant/localStorageKeys";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO);
    dispatch(authActions.clearCredentials());
    navigate(PUBLIC_PATH.SIGN_IN);
  }

  return (
    <div>
      <header
        className="shadow"
        style={{ minHeight: APP_CONFIG.HEADER_HEIGHT }}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between h-full gap-4">
          <h1 className="text-4xl font-bold p-5">
            <Link to={PUBLIC_PATH.HOME}>Movie</Link>
          </h1>

          <nav className="space-x-5">
            <NavLink to={PUBLIC_PATH.SCHEDULE}>Lịch Chiếu</NavLink>
            <NavLink to={PUBLIC_PATH.CINEMA}>Rạp Chiếu</NavLink>
            <NavLink to={PUBLIC_PATH.PROMOTION}>Khuyến Mãi</NavLink>
            <NavLink to={PUBLIC_PATH.APP}>Ứng Dụng</NavLink>
            <NavLink to={PUBLIC_PATH.SUPPORT}>Hỗ Trợ</NavLink>
          </nav>

          <div className="flex items-center gap-4 p-5">
            {userInfo ? (
              <>
                <NavLink to={PUBLIC_PATH.USER_PROFILE} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Hồ sơ
                </NavLink>
                <span className="hidden text-sm text-slate-600 md:inline">Xin chào, {userInfo.hoTen || userInfo.taiKhoan}</span>
                <Button color="red" variant="solid" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="blue"
                  variant="solid"
                  onClick={() => navigate(PUBLIC_PATH.SIGN_IN)}
                >
                  Đăng Nhập
                </Button>
                <Button
                  color="blue"
                  variant="outlined"
                  onClick={() => navigate(PUBLIC_PATH.REGISTER)}
                >
                  Đăng Ký
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
