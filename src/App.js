import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers";
import Product from "./pages/product/Product";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/customers",
    element: <Customers/>
  },
  {
    path: "/products",
    element: <Product/>
  },
  {
    path: "/products/new",
    element: <New/>
  },
  {
    path: "/customers/:customerId",
    element: <Single/>
  },
  {
    path: "/products/:productId",
    element: <Single/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;