import { Link } from "react-router-dom";

const Navigation=()=>{
    return (
        <nav>
            <Link to="/">Characters</Link> | <Link to="/episode">Episodes</Link> | <Link to="/about">About us</Link>
        </nav>
    ); 
};

export default Navigation;