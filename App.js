import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import resObj from "./data.json";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantInfo from "./src/components/RestaurantInfo";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const Grocery = lazy(() => import("./src/components/Grocery"));

const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        )
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
