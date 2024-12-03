import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import resObj from "./data.json";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import About from "./src/components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const AppRouter = () =>{
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AppLayout />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter/> );
