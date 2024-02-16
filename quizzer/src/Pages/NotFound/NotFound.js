import { Link } from "react-router-dom";

const NotFound = () => {
    return(
    <div className="flex flex-col gap-2">
        <p>404 Not Found</p>
        <Link to={"/"}>Home</Link>
    </div>
    );
};

export default NotFound;