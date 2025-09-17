import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./Pages/RestaurantList";
import CreateRestaurant from "./Pages/CreateRestaurant";
// import Home from "./Pages/Home";
// import Cart from "./Pages/Carts";
// import Help from "./Pages/Help";
// import Search from "./Pages/Search";
// import Restaurant from "./Pages/Restaurant";
// import PageNotFound from "./Pages/PageNotFound";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Carts"));
const Help = lazy(() => import("./Pages/Help"));
const Search = lazy(() => import("./Pages/Search"));
const Restaurant = lazy(() => import("./Pages/Restaurant"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

const urls = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            {" "}
            <Cart></Cart>
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            {" "}
            <Help></Help>
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            {" "}
            <Search></Search>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            {" "}
            <Restaurant></Restaurant>
          </Suspense>
        ),
      },
      {
        path: "/list",
        element: <RestaurantList></RestaurantList>,
      },
      {
        path: "/create",
        element: <CreateRestaurant></CreateRestaurant>,
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<h1 className="aas">Loading</h1>}>
            {" "}
            <PageNotFound></PageNotFound>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={urls}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
