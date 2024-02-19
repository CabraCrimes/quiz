import { NavLink, Outlet, useLocation} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname === "/")

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
                {/* This can be a component, the welcome message */}
                {location.pathname === "/" && <h2>Welcome to Quizzer. This is a learning platform that uses games to teach. Please click on Games to try out our fun educational games.</h2>}
                <Outlet/>
            </main>
        </>
    )
}

export default Navbar;