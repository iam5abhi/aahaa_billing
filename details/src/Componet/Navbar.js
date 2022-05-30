import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";



const NavBar =()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark ">
            <div class="container-fluid ">
                <button class="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <NavLink class="nav-link"  to='/' >home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" to='/create'>CreateAccount</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link" to='/statement'>Statement</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}


export default NavBar;