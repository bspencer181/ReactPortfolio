import React, { useState, useEffect } from 'react';
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Beth <i className="fab fa-earlybirds" />
                </Link>
            </div> 
         </nav>
        </>
    )
}

export default Navbar