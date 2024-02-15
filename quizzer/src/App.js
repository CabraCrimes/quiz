import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
//pages
import Home from "./Pages/Home/Home";
import Memory from "./Pages/Memory/Memory";
//layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/memory" element={<Memory />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
