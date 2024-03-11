import { Outlet, useLocation } from "react-router-dom";
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
            {/* This can be a component, the welcome message */}
            {location.pathname === "/" && <h2>Welcome to Quizzer. This is a learning platform that uses games to teach. Please click on Games to try out our fun educational games.</h2>}
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
