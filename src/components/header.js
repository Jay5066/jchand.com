import React from 'react';

const NavigationBar = () => {
    return (
        <nav className={"nav"}>
            <a className={"navbar-brand"} href="#">My Logo</a>
            <ul className={"nav justify-content-center ml-auto"}>
                <li className={"nav-item"}>
                    <a className={"nav-link active"} href="#">About me</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link active"} href="#">My work</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link active"} href="#">Say Hello</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;