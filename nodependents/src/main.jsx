import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Signup from "./views/signup";
import UserSignup from "./views/signup/user";
import WorkerSignup from "./views/signup/worker";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup/user",
    element: <UserSignup />,
  },
  {
    path: "/signup/worker",
    element: <WorkerSignup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
