import React from "react";

// This is the resume Section. The user click at the link and will be directed to my google Drive to download the Resume as a pdf file.

function Resume() {
    return (
        <>
            <div>
                <a class="resume-link" href="https://drive.google.com/file/d/1PV7wfPnf7a0gDkZ0NpZ3-Yq2vmIdjiAq/view">Click at the link to Download the Resume</a>
                <h1>Skills:</h1>
                <ul>
                    <li>
                        HTML
                    </li>

                    <li>
                        CSS
                    </li>

                    <li>
                        Java
                    </li>

                    <li>
                        SQL
                    </li>

                    <li>
                        NoSQL
                    </li>

                    <li>
                        Insomnia
                    </li>

                    <li>
                        MongoDB
                    </li>

                    <li>
                        Databases
                    </li>

                    <li>
                        React.js
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Resume;