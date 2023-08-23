import React from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
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
    <button className="absolute bottom-0 right-0 h-[50px] w-[50px] hover:opacity-50">
      <Icon icon="ph:question-fill" className="w-[30px] h-[30px] m-[10px]" />
    </button>
  </section>
);

export default MainLayout;
