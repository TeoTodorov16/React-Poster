import { Outlet } from "react-router-dom";
import MainHeader from "../assets/components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
