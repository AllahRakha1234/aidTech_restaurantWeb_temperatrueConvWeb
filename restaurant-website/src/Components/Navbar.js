
import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from "../assets/images/logoBg.png";


export function Navbar() {

    // ********* RENDER **********

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='logoImgBox'>
                        <Link to="/">
                            <img src={logo} className='logoImg' alt="logo" />
                        </Link>
                    </div>
                    <div className='navbarOptionsBox'>
                        <ul className='navbarOptions mt-3'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}