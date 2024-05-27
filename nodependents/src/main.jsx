import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkerSignup from "./views/signup/worker";
import "./index.css";
import ConsumerDashboard from "./views/consumer/ConsumerDashboard";
import WorkerDashboard from "./views/worker/WorkerDashboard";
import Pharmacy from "./views/consumer/booking/Pharmacy";
import Transportation from "./views/consumer/booking/Transportation";
import Home from "./views/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  // {
  //   path: "/signup/user",
  //   element: <UserSignup />,
  // },
  {
    path: "/signup/worker",
    element: <WorkerSignup />,
  },
  // {
  //   path: "/consumer",
  //   element: <ConsumerDashboard />,
  // },
  {
    path: "/consumer",
    element: <ConsumerDashboard />,
  },
  {
    path: "/consumer/booking/pharmacy",
    element: <Pharmacy />,
  },
  {
    path: "/consumer/booking/transportation",
    element: <Transportation />,
  },
  {
    path: "/worker",
    element: <WorkerDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
