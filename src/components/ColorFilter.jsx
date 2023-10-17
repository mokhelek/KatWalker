import React from "react";
import { useState } from "react";
import ColorOption from "./ColorOption";


function ColorFilter({onSetColor, colors }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleColorFilter = (event) => {
        onSetColor("");
        selectedColor(event.target);
    };

    const selectedColor = (element) => {
        let elem = document.querySelectorAll(".selected");
        for (let i of elem){
            i.classList.remove("selected");
        }
        element.classList.add("selected");
    };

    return (
        <>
            <div className="brand-color" style={{ marginBottom: "0.7rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a onClick={toggleDropdown} style={{ textDecoration: "none" }}>
                        <div style={{ fontSize: "0.87rem", color: "gray", margin: "0" }}>
                            Color
                            <span style={{ float: "right", marginRight: "1rem" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </span>
                        </div>
                    </a>

                    <h6 className="d-none" style={{ color: "#202020", fontWeight: "600", marginBottom: "0" }}>
                        All Colors
                    </h6>
                </div>
                {isOpen && (
                    <div style={{ backgroundColor: "rgb(252, 252, 252)", width: "95%", padding: "0.5rem" }}>
                        <div className="">
                            <button id="colors" onClick={handleColorFilter} className="btn color" style={{ marginBottom: "0.4rem" }}>
                                <div id="all" style={{ height: "1.9rem", width: "1.9rem", fontSize: "0.85rem", border: "1px black solid", borderRadius: "5px", padding: "0.1rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </button>

                            {colors.map((color, index) => {
                                return (
                                    <ColorOption key={index} onSetColor={onSetColor} option={color} />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ColorFilter;
