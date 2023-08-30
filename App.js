import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import { Body } from "./src/component/Body";
import Footer from "./src/component/Footer";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./src/component/RestrauntMenu";
import Cart from "./src/component/Cart";
import Signup from "./src/component/Signnup";
import Profile from "./src/component/Profile";
import Shimmer from "./src/component/Shimmer";
import { Provider } from "react-redux";
import store from "./src/utils/store";

//import Instamart from "./src/component/Instamart";
const Instamart = lazy(() => import("./src/component/Instamart"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <Signup></Signup> */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          //nested routing
          {
            path: "profile", // path :- localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
