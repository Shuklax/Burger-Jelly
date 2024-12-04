import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import resObj from "./data.json";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";


const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path : "/contact",
    element: <Contact/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
