import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="nav-header">Quizzer</h1>
          
          <NavLink to={"memory"}>Games</NavLink>
        </nav>
      </header>
    <main>
        <Outlet />
    </main>

    </div>
  );
};

export default RootLayout;
