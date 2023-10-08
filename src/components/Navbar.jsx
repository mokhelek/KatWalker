import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#about">
                                About
                            </a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link btn btn-sm btn-outline-warning" href="login.html">
                                Login
                            </a>
                        </li>
        
                    </ul>

                    <a className="navbar-brand" href="#">
                        <h1 className="logo">
                            Kat'Walker<span >//</span>
                        </h1>
                    </a>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#shoes"  className="btn nav-link nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </a>
                        </li>

                        <li className="nav-item">
                            <form>
                                <div className="d-flex">
                                    <input className="title-search-filter" type="search" placeholder="search shoes" aria-label="Search" />
                                    <button className="btn btn-outline-light nav-link nav-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </li>

                        <li className="nav-item">
                            <a href="cart.html" className="btn btn-sm position-relative nav-link">
                                <div>
                                    <svg fill="#eeeeee" width="23px" height="23px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3,22H21a1,1,0,0,0,1-1.077l-1-13A1,1,0,0,0,20,7H17A5,5,0,0,0,7,7H4a1,1,0,0,0-1,.923l-1,13A1,1,0,0,0,3,22ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4ZM4.926,9H7v2a1,1,0,0,0,2,0V9h6v2a1,1,0,0,0,2,0V9h2.074l.846,11H4.08Z" />
                                    </svg>
                                    <span className="position-absolute top-0 start-50 badge rounded-pill bg-secondary cartCounterLg" >
                                       0
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
