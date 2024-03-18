import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainComponent } from "../MainComponent/MainComponent";
import { Outlet } from "react-router-dom";

export function AppWrapperComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
