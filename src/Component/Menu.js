import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

    return (
      
            <nav className=" mask rgba-indigo-strong d-flex navbar-expand-md navbar-dark scrolling-navbar p-2">
                <Link class="navbar-brand " to="#"><strong>Navbar</strong></Link>
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link fas fa-home" to="/Home" > <strong>Home</strong> <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link fas fa-info-circle" to="/About"> <strong>About</strong></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link fas fa-user" to="/Profile"> <strong>Profile</strong></Link>
                    </li>
                </ul>
            </nav>
       
    );


}
export default Menu;