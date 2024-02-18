import { NavLink, Outlet, useParams } from "react-router-dom";
import "./Navbar.css";
import Home from "../../Pages/Home/Home";

const Navbar = () => {
    const params = useParams()
    console.log(params)
    return(
        <>
        <header>
            <nav className="">
                <h1 className="nav-header">Quizzer</h1>
                <NavLink to={"quizzer"}>Quizzer</NavLink>
                <NavLink to={"/games"}>Games</NavLink>
            </nav>
        </header>
            <main>
                {/* REMOVE HOME */}
                <Home/>
                <Outlet/>
            </main>
        </>
    )
}

export default Navbar;