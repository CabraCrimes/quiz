import { Link } from "react-router-dom";

const NotFound = () => {
    return(
    <div className="flex flex-col gap-2">
        <p style={{fontSize: '40px'}}>404 Not Found</p>
        <Link style={{textDecoration: "none", fontSize: '40px'}} to={"/"}>Back Home</Link>
    </div>
    );
};

export default NotFound;