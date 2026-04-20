import { createBrowserRouter, RouterProvider, Router  } from "react-router-dom";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

function App() {
  return <div className='app'>
    <RouterProvider router={router}/>
  </div>

   
}

export default App;
