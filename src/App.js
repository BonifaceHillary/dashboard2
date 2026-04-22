import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers"
import Product from "./pages/product/Product"
import New from "./pages/new/New"
import Single from "./pages/single/Single"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

   {
    path: "/customers/",
    element: <Customers/>
  },

   {
    path: "/products",
    element: <Product/>
  },

   {
    path: "/product/:Product/new",
    element: <New/>
  },

  {
    path: "/customers/:customerId/new",
    element: <New/>
  },

   {
    path: "/customers/:CustomersId",
    element: <Single/>
  },

    {
    path: "/products/:ProductId",
    element: <Sngle/>
  },

  {
    path: "/login/",
    element: <Login/>
  },

  {
    path: "/products",
    element: <Register/>
  }
])

function App() {
  return ( 
    <Router>
  <div className='app'>
    <RouterProvider router={router}/>
  </div>
  </Router>

  ) 
}

export default App;
