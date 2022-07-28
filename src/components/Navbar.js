import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// This function returns a ul with nav bar components as list items.
const Navbar = () => {
    return (
        <>
            <header>
                <div className="container container-flex" >

                    <nav className="nav">       

                        <Link to="/" className="site-title"> About Me</Link>
                        <ul>
                            <li>
                                <Link to="/portofolio">Project</Link>
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

export default Navbar;