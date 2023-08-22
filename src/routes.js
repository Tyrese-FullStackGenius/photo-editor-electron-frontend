import React from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./layouts/main";

import Dashboard from "./pages/dashboard";
import Editor from "./pages/editor";
import Home from "./pages/home";
import Library from "./pages/library";

const router = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default router;
