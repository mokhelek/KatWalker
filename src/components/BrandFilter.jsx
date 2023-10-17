import React from "react";
import { useState } from "react";
import BrandOption from "./BrandOption";

function BrandFilter({ onSetBrand, brands }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const handleBrandFilter = (event) => {
        onSetBrand("");
        selectedBrand(event.target);
    };

    const selectedBrand = (element) => {
        let elem = document.querySelectorAll(".brand-options");
        for (let i of elem){
            i.classList.remove("selected-brand");
        }
        element.classList.add("selected-brand");
    };
    return (
        <>
            <div className="brand-filter" style={{ marginBottom: "0.5rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a onClick={toggleDropdown} style={{ textDecoration: "none" }}>
                        <div style={{ fontSize: "0.87rem", color: "gray", margin: "0" }}>
                            Brands
                            <span style={{ float: "right", marginRight: "1rem" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>

                {isOpen && (
                    <div style={{ width: "95%", padding: "0.6rem" }}>
                        <button  onClick={handleBrandFilter} id="all-brands" className="btn btn-outline-secondary btn-sm brand-options" style={{ borderRadius: "0", padding: "0.1rem 0.85rem", marginBottom: "0.4rem", marginLeft: "0.4rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                            &nbsp; All Shoes
                        </button>
                        {brands.map((item, index) => {
                            return <BrandOption key={index} onSetBrand={onSetBrand} option={item} />;
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default BrandFilter;
