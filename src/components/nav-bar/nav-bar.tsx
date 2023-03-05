import "./stylesheet.css";
import { AiFillHome, AiFillDatabase, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {

    const location = useLocation()

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    useEffect(()=>{
        setMenuIsOpen(false)
    },[location.pathname])

    return (
        <>
            <div className="nav-bar lg">
                <Link to={"/"} className={location.pathname === "/home" ? "nav-bar-link active" : "nav-bar-link"}>
                    <AiFillHome size={20} />
                    <span>HOME</span>
                </Link>
                <Link to={"/data"} className={location.pathname === "/data" ? "nav-bar-link active" : "nav-bar-link"}>
                    <AiFillDatabase size={20} />
                    <span>DATA</span>
                </Link>
            </div>
            <div className="nav-bar sm">
                {
                    menuIsOpen ?
                        <AiOutlineClose size={20} onClick={() => { setMenuIsOpen(false) }} />
                        :
                        <AiOutlineMenu size={20} onClick={() => { setMenuIsOpen(true) }} />
                }
                {
                    menuIsOpen &&
                    <div id="menu">
                        <Link to={"/"} className={location.pathname === "/home" ? "nav-bar-link active" : "nav-bar-link"}>
                            <AiFillHome size={20} />
                            <span>HOME</span>
                        </Link>
                        <Link to={"/data"} className={location.pathname === "/data" ? "nav-bar-link active" : "nav-bar-link"}>
                            <AiFillDatabase size={20} />
                            <span>DATA</span>
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}

export default NavBar;