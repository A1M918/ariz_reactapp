import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

    return (
        <div>
            <nav className=" mask rgba-indigo-light d-flex navbar-expand-md navbar-dark scrolling-navbar p-2">
                <Link class="navbar-brand" to="#"><strong>Navbar</strong></Link>
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/Home" ><strong>Home</strong> <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/About"><strong>About</strong></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Profile"><strong>Profile</strong></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );


}
export default Menu;