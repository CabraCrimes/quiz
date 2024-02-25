import { NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    return(
        <>
        <header>
            <nav className="">
                <h1 className="nav-header">Quizzer</h1>
                <NavLink to={"quizzer"}>Quizzer</NavLink>
                <NavLink to={"/games"}>Games</NavLink>
            </nav>
        </header>
        </>
    )
}

export default Navbar;