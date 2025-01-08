import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
