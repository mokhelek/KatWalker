import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar.jsx";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <ul className="menu-options-left">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html#about">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <div className="logo">
                                <h2>
                                    Kat'Walker<span style={{ color: "orange", letterSpacing: 0 }}>//</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-4">
                            <ul className="menu-options-right">
                                <li className="nav-item">
                                    <a href="#shoes" type="submit" style={{marginLeft: "0.5rem", border: "none", borderRadius: "0"}} className="btn nav-link nav-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <SearchBar />
                                </li>

                                <li className="nav-item">
                                    <Link to="/cart" className="btn btn-sm position-relative nav-link">
                                        <div>
                                            <svg fill="#eeeeee" width="23px" height="23px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3,22H21a1,1,0,0,0,1-1.077l-1-13A1,1,0,0,0,20,7H17A5,5,0,0,0,7,7H4a1,1,0,0,0-1,.923l-1,13A1,1,0,0,0,3,22ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4ZM4.926,9H7v2a1,1,0,0,0,2,0V9h6v2a1,1,0,0,0,2,0V9h2.074l.846,11H4.08Z" />
                                            </svg>
                                            <span className="position-absolute top-0 start-50 badge rounded-pill bg-secondary cartCounterLg" style={{fontSize:"0.65rem", marginLeft: "0.6rem"}}>
                                                0
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
