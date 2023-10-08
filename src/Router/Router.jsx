import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorElement from "../components/error/ErrorElement";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Features from "../pages/Features/Features";
import Teams from "../pages/Teams/Teams";
import Description from "../pages/Description/Description";

  const router=createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("/tech.json")
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
            {path:'/features',
            element:<PrivateRoute><Features></Features></PrivateRoute>

            },
            {
              path:'/teams',
              element:<PrivateRoute><Teams></Teams></PrivateRoute>
            },
            {
              path:'/description/:id',
              element:<PrivateRoute><Description></Description></PrivateRoute>
            }
        ]
      },
])
export default router;