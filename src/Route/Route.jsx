import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../Error/ErrorPage";
import Campaigns from "../FunctionalPages/Campaigns";
import Private from "../FunctionalPages/Private";
import Login from "../AuthProvider/Login";
import SignUp from "../AuthProvider/SignUp";
import HideRoute from "../FunctionalPages/HideRoute";
import Dashboard from "../FunctionalPages/Dashboard";
import Forgot from "../AuthProvider/Forgot";
import EditProfile from "../AuthProvider/EditProfile";
import "animate.css";
import Help from "../AuthProvider/Help";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/private/:id",
        element: (
          <HideRoute>
            <Private></Private>
          </HideRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          console.log(singleData);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/forgot",
        element: <Forgot></Forgot>,
      },
      {
        path: "/editprofile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
    ],
  },
]);
export default router;
