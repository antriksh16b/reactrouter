import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from "./Layout";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from "./components/User"
import Github from './components/Github';
const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
          path:"/",
          element: <Home></Home>
      },
      {
          path:"about",
          element: <About></About>
      },
      {
          path:"contact",
          element: <Contact></Contact>
      },
      {
          path:"user/:userId",
          element: <User></User>
      },
      {
          loader: ({request})=>{
            fetch("")
          },
          path:"github",
          element: <Github></Github>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
