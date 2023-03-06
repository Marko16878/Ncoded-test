import "./stylesheet.scss";
import { AiFillHome, AiFillDatabase, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function SmNavBar() {

    const location = useLocation()

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    useEffect(() => {
        setMenuIsOpen(false)
    }, [location.pathname])

    return (
        <div id="sm-nav-bar-container">
            {
                menuIsOpen ?
                    <AiOutlineClose size={20} onClick={() => { setMenuIsOpen(false) }} />
                    :
                    <AiOutlineMenu size={20} onClick={() => { setMenuIsOpen(true) }} />
            }
            {
                menuIsOpen &&
                <div id="menu">
                    <Link to={"/"} className={location.pathname === "/home" ? "sm-nav-bar-link active" : "sm-nav-bar-link"}>
                        <AiFillHome size={20} />
                        <span>HOME</span>
                    </Link>
                    <Link to={"/data"} className={location.pathname === "/data" ? "sm-nav-bar-link active" : "sm-nav-bar-link"}>
                        <AiFillDatabase size={20} />
                        <span>DATA</span>
                    </Link>
                </div>
            }
        </div>
    )
}

export default SmNavBar;