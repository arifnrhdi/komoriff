import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Gunadarma from "../pages/Gunadarma";


export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about-gunadarma",
        element: <Gunadarma />,
      },
    ],
  },
]);
