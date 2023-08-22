import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header";

const MainLayout = () => (
  <section className="w-full h-full bg-[#000401]">
    <header className="w-full h-[48px] leading-12">
      <HeaderComponent />
    </header>
    <main
      className="w-full overflow-auto"
      style={{ height: "calc(100% - 48px)" }}
    >
      <Outlet />
    </main>
  </section>
);

export default MainLayout;
