import React from "react";
import { useState } from "react";


function SizeFilter() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="shoe-sizes" style={{ marginBottom: "0.7rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a onClick={toggleDropdown} style={{ textDecoration: "none" }}>
                        <div style={{ fontSize: "0.87rem", color: "gray", margin: "0" }}>
                            Sizes
                            <span style={{ float: "right", marginRight: "1rem" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
                {isOpen && (
                    <div style={{ backgroundColor: "rgb(252, 252, 252)", width: "95%", padding: "0.5rem" }}>
                        <div className="">
                            <button className="btn color-options" style={{ marginBottom: "0.15rem" }}>
                                <div id="all-sizes" style={{ height: "1.9rem", width: "1.9rem", fontSize: "0.85rem", border: "1px black solid", borderRadius: "5px", padding: "0.1rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </button>
                         
                            {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((size,index) => {
                                return (
                                    <button key={index} className="btn" style={{ marginBottom: "0.15rem" }}>
                                        <div style={{ height: "2rem", width: "2rem", borderRadius: "5px", border: "1px #747474 solid" }}> {size} </div>
                                    </button>
                                );
                            })}

                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SizeFilter;
