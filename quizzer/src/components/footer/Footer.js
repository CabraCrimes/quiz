import "./Footer.css"
import { NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerHeader">
                <h3>© 2024 Quizzer. All rights reserved. | Privacy Policy | Terms of Service | Designed with love for teaching English</h3>
            </div>
            <div className="footerMain">
                <div className="footerNavigation">
                    <h3>Navigation</h3>
                    <NavLink to={"quizzer"}>Quizzer</NavLink>
                    <NavLink to={"/games"}>Games</NavLink>
                </div>
                <div className="footerContact">
                    <h3>Contact</h3>
                    <p></p>
                    <p></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;