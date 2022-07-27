import React from "react";
import Nav from "./Nav";


function Header() {
    return (

        <header class="header">
            <h1 id="name">Kais Al Balkhi </h1>
            <h1><span> Digital Marketing Specialist and Web Developer </span></h1>
            <div class="nav">
                <Nav />
            </div>

            <img src="./badass-pic.jpg" alt=""
                height="500"
                width="500"
            />
        </header >

    );
};

export default Header;