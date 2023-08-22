import React from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./layouts/main";

import Dashboard from "./pages/dashboard";
import Editor from "./pages/editor";
import Login from "./pages/login";
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
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default router;
