import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import './App.css';
//pages
import Home from "./Pages/Home/Home";
import Memory from "./Pages/Memory/Memory";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Quizzer</h1>
        <NavLink to={"/"}>Quizzer</NavLink>
        <NavLink to={"memory"}>Games</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/memory" element={<Memory/>} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
