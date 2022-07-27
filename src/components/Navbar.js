import React from "react";
import logo from '../images/cyberlife-logo.jpg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {

    return (
        <>
            <header>
                <div className="container container-flex">
                    {/* <img src={logo} alt="logo" className="logo"/> */}


                    <nav className="nav">

                        <Link to="/" className="site-title"> Site Name</Link>
                        <ul>
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>

                            <li>
                                <Link to="/portofolio">Portofolio</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>

                            <li>
                                <Link to="/resume">Resume</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
        </>
    )
}

function CustomLink({to, children, ...props }) {
    const path = window.location.pathname
      const resolvedPath = useResolvedPath(to)
      const isActive =useMatch({path:resolvedPath.pathname, end: true})
    return(
        <li className={isActive? "active" : ""}>
        <Link to={to} {...props}>
            {children}
            </Link>
            </li>
    )
}

export default Navbar;