import { Outlet, useLocation } from "react-router-dom";
import "./RootLayout.css"
import Welcome from "../components/welcome/Welcome.js";
import Footer from "../components/footer/Footer.js";
import Navbar from "../components/navbar/Navbar.js";


const RootLayout = () => {
  const location = useLocation()

  return (
    <div className="root-layout">
      <header>
          <Navbar />
      </header>
      <main>
            {/*  Welcome message */}
            {location.pathname === "/" && <Welcome /> }
            <Outlet/>
        </main>
        <footer>
          {/* This can be a component, the footer */}
        {location.pathname !== "/" && location.pathname !== "/quizzer" && location.pathname !== "/games" ? "" : <Footer/>}
        </footer>
    </div>
  );
};

export default RootLayout;
