import React from "react";
import Header from "../Shared/Components/Header";
import { Navigate, Outlet, useLocation } from "react-router";
import Footer from "../Shared/Components/Footer";
import { useSelector } from "react-redux";
import { PRIVATE_PATH, PUBLIC_PATH } from "../constant/path";

const AUTH_ROUTES = [PUBLIC_PATH.SIGN_IN, PUBLIC_PATH.REGISTER]

export const MainLayout = () => {
  const userInfo = useSelector((s) => s.auth.userInfo)
  const { pathname } = useLocation()

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route))

  const isPrivateRoute = Object.values(PRIVATE_PATH)
    .filter((route) => typeof route === 'string' && route.length > 0)
    .some((route) => pathname.startsWith(route))

  const routeRender = () => {
    if (isAuthRoute && userInfo) {
      return <Navigate to={PUBLIC_PATH.HOME} replace />
    }

    if (isPrivateRoute && !userInfo) {
      return <Navigate to={`${PUBLIC_PATH.SIGN_IN}?from=${pathname}`} replace />
    }

    return null
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="overflow-auto grow flex-1">
        <main className="container mx-auto py-5 h-full">
          {routeRender()}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
