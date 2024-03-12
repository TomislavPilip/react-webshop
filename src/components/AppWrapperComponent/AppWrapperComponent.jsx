import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainComponent } from "../MainComponent/MainComponent";

export function AppWrapperComponent() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}
