import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//pages
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from "./Pages/Home/Home";
import Memory from "./Pages/Memory/Memory";
//layout
import RootLayout from "./layout/RootLayout";
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path:"/", 
    element:<Home />,
    errorElement: <NotFound/>,
  },
  { 
    path:"/memory", 
    element: <Memory />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
