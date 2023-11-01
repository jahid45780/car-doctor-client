import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./Pages/Home/Home/Home";
import ErrorPage from "./Pages/Shared/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import BookService from "./Pages/BookService/BookService";
import Bookings from "./Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AboutMe from "./Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element: <PrivateRoute> <BookService></BookService> </PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
        },
        {
          path:'/booking',
          element: <PrivateRoute> <Bookings></Bookings> </PrivateRoute>
        },
        {
          path:'/about',
          element:<AboutMe></AboutMe>
        }
      ]
      
    },
  ]);

  export default router 