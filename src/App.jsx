import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppWrapperComponent } from "./components/AppWrapperComponent/AppWrapperComponent";
import { Page } from "./components/Page/page";
import { Product } from "./components/Product/Product";
import { SingleProduct } from "./components/Product/SingleProduct";
import { Home } from "./components/Home/Home";
import { Blog } from "./components/Blog/Blog";
import { Products } from "./components/Product/Products";

function App() {
  ///////Everything is going to be rendered in APPWRAPPERCOMPONENT
  ///////Ovaj Route index element{home} je defaultna stranica
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route
              path="/contact"
              element={
                <Page
                  title={"Contact"}
                  description={"Lorem ipsum description"}
                />
              }
            />
            <Route path="/about" element={<Page title={"About us"} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
