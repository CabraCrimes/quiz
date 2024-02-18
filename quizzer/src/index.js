import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Memory from "./Pages/Games/memory/Memory";
import PictureMultpleChoice from "./Pages/Games/picture-multple-choice/PictureMultpleChoice";
import reportWebVitals from "./reportWebVitals";
import GamesList from "./Pages/games-list-page/GamesList";
import "./App.css";
import Home from "./Pages/Home/Home";
//layout
import NotFound from "./Pages/NotFound/NotFound";
//components
import Navbar from "./components/navbar/Navbar";

const router = createBrowserRouter(
  // Maybe move all the routes to App.js so it easier to work with
  [
    {
      path: "/",
      element: <Navbar />,
      errorElement: <NotFound />,
      children : [
        {
          path: "/quizzer",
          element: <Home />,
        },
        {
          path: "/games",
          element: <GamesList />,
          
        },
        {
          path: "/games/1",
          element: <Memory />,
        },
        {
          path: "/games/2",
          element: <PictureMultpleChoice />,
        }
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
