import React from "react";


// This is the Home page/ About Me page. It has my name, description and an avatar of me. 
function HomePage() {
    return (
        <>
            <header class="homepage-header">

                <h1 id="name">Qais M.Al Balkhi </h1>

                <h1 id="description"><span> Future CEO of Cyberlife Ltd. and Full Stack Software Developer</span></h1>

                <img class="kais-avatar" src="/images/badass-pic.png" alt="An Avatar of Kais M. AlBalkhi with a suit at 21 Years old." />

                <p id="welcome-message"> Hello and Welcome to my portofolio! Ever since I was a kid, I had a passion for Computers and Technology. I am a former University of Waterloo Mechanical Engineering Student but I decided to switch careers to Software Development. I am about to graduate from a coding Bootcamp at the University of Toronto. My Ultimate Goal is to solve the Alan Turning test before 2030 establishing Cyberlife Ltd., the biggest company to ever exist, and to utilize AI ot Humanity's benefit! Until then, I will keep improving my coding skills starting as a Junior Fullstack Developer. Please Feel free to browse my Projects Page and or fill out the Contact Form. You can also reach out to me on LinkedIn or GitHub by clicking on the icons in the footer. Thank you again for Visiting!</p>
            </header>
        </>
    );
};

export default HomePage;