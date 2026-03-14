import React from "react";
import Header from "../Shared/Components/Header";
import { Outlet } from "react-router";
import Footer from "../Shared/Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="overflow-auto grow flex-1">
        <main className="container mx-auto py-5 h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
