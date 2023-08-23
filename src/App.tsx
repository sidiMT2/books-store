// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Books from "./pages/Books/Books";
import LayoutPage from "./LayoutPage";
import Signup from "./pages/Signup";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: 'books',
        element: <Books />
      },
      {
        path: 'category',
        element: <Category />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
