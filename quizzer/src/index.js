import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import AnimalTwoMC from "./Pages/Games/matching-cards/maching-cards-animals-2/AnimalTwoMC";
import VegetablesMC from "./Pages/Games/matching-cards/maching-cards-vegitables/VegetablesMC";
import FuitMC from "./Pages/Games/matching-cards/maching-cards-fruits/FruitMC";
import ClothesMC from "./Pages/Games/matching-cards/maching-cards-clothes/ClothesMC";
import AnimalMC from "./Pages/Games/matching-cards/maching-cards-animals/AnimalMC";
import reportWebVitals from "./reportWebVitals";
import GamesList from "./Pages/games-list-page/GamesList";

import Home from "./Pages/Home/Home";
//layout
import RootLayout from "./layout/RootLayout";
import NotFound from "./Pages/NotFound/NotFound";
//components

const router = createBrowserRouter(
  // Maybe move all the routes to App.js so it easier to work with
  [
    {
      path: "/",
      element: <RootLayout />,
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
          path: "/games/animals 1",
          element: <AnimalMC />,
        },
        {
          path: "/games/clothes",
          element: <ClothesMC />,
        }
        ,
        {
          path: "/games/fruit",
          element: <FuitMC />,
        },
        {
          path: "/games/vegetables",
          element: <VegetablesMC /> ,
        },
        {
          path: "/games/animals 2",
          element: <AnimalTwoMC /> ,
        },

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
