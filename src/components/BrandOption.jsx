import React from "react";

function BrandOption({ onSetBrand, option }) {

    const handleBrandFilter = (event) => {
        onSetBrand(option);
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
            <button onClick={handleBrandFilter} className="btn btn-outline-secondary btn-sm brand-options" style={{ borderRadius: "0", padding: "0.1rem 0.85rem", marginBottom: "0.4rem", marginLeft: "0.4rem" }}>
                {option}
            </button>
        </>
    );
}

export default BrandOption;
