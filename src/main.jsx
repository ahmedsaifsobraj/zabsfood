import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/SigningForm/Login/Login.jsx';
import Registration from './Pages/SigningForm/Registration/Registration.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/checkout",
        element:<Checkout></Checkout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
