import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const GamesList = () => {
    

    return(
        <div>
            <Navbar/>
            <header>
                <main>
                    <div className="">
                        <div>
                            <NavLink to={"memory"}> <img src="" alt="Memory"/>Memory</NavLink> 
                        </div>
                    </div>
                </main>
            </header>
            <footer>

            </footer>
        </div>
    );
};

export default GamesList;