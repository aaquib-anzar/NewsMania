import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/MainNavigation";
import { useTheme } from "../hooks/ColorScheme";

function RootPage() {
  const [isDark] = useTheme();
  return (
    <>
      <NavBar />
      <main className={`${isDark ? 'dark' : 'light'}`}>
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
