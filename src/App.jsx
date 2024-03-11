import { useState } from "react";

import "./App.css";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
