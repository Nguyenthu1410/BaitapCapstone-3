import { Navigate, Route, Routes } from "react-router";
import AdminLayout from "./layout/AdminLayout";
import MainLayout from "./layout/MainLayout";
import { PRIVATE_PATH, PUBLIC_PATH } from "./constant/path";
import ProtectedRoute from "./admin/ProtectedRoute";
import { SignInPage } from "./feature/sign-in";
import HomePage from "./feature/home/Components/HomePage";
import DashBoard from "./admin/DashBoard";
import Movies from "./admin/Movies";
import Users from "./admin/Users";
import Settings from "./admin/Settings";
import RegisterPage from "./feature/register/components/RegisterPage";
import SchedulePage from "./Movie/SchedulePage";
import CinemaPage from "./Movie/CinemaPage";
import PromotionPage from "./Movie/PromotionPage";
import AppPage from "./Movie/AppPage";
import SupportPage from "./Movie/SupportPage";
import MovieDetail from "./Movie/MovieDetail";
import BookingPage from "./Movie/BookingPage";
import { UserProfile } from "./feature/userProfile";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to={PUBLIC_PATH.HOME} replace />} />
        <Route path={PUBLIC_PATH.HOME} element={<HomePage />} />
        <Route path={PUBLIC_PATH.SCHEDULE} element={<SchedulePage />} />
        <Route path={PUBLIC_PATH.CINEMA} element={<CinemaPage />} />
        <Route path={PUBLIC_PATH.PROMOTION} element={<PromotionPage />} />
        <Route path={PUBLIC_PATH.APP} element={<AppPage />} />
        <Route path={PUBLIC_PATH.SUPPORT} element={<SupportPage />} />
        <Route path={PUBLIC_PATH.MOVIE_DETAIL} element={<MovieDetail />} />
        <Route path={PUBLIC_PATH.BOOKING} element={<BookingPage />} />
        <Route path={PUBLIC_PATH.USER_PROFILE} element={<UserProfile />} />
        <Route path={PUBLIC_PATH.SIGN_IN} element={<SignInPage />} />
        <Route path={PUBLIC_PATH.REGISTER} element={<RegisterPage />} />
      </Route>

      <Route
        path={PRIVATE_PATH.ADMIN}
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashBoard />} />
        <Route path={PRIVATE_PATH.ADMIN_MOVIES} element={<Movies />} />
        <Route path={PRIVATE_PATH.ADMIN_USERS} element={<Users />} />
        <Route path={PRIVATE_PATH.ADMIN_SETTING} element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
