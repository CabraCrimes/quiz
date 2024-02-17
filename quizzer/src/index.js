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
import GamesList from './Pages/games-list-page/GamesList';
import App from './App';
import Home from "./Pages/Home/Home";
//layout
import NotFound from './Pages/NotFound/NotFound';
//components
import Navbar from './components/navbar/Navbar';

const router = createBrowserRouter([
  {
    path:"/", 
    element:<Home />,
    errorElement: <NotFound/>,
  },
  { 
    path:"/games", 
    element: <GamesList />,
    children={[
      {
        //Create all url routes to games here
      }
    ]}
  },
  {
    path: "/games/:gameId",
    element: <GamesList />,
    
  },

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
