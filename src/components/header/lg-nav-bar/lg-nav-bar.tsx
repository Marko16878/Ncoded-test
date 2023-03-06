import "./stylesheet.scss";
import { AiFillHome, AiFillDatabase} from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";

function LgNavBar() {

    const location = useLocation()

    return (
        <div id="lg-nav-bar-container">
            <Link to={"/"} className={location.pathname === "/" ? "lg-nav-bar-link active" : "lg-nav-bar-link"}>
                <AiFillHome size={20} />
                <span>HOME</span>
            </Link>
            <Link to={"/data"} className={location.pathname === "/data" ? "lg-nav-bar-link active" : "lg-nav-bar-link"}>
                <AiFillDatabase size={20} />
                <span>DATA</span>
            </Link>
        </div>
    )
}

export default LgNavBar;