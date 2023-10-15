import React from "react";

function BrandOption({ onSetBrand, option }) {
    
    const handleBrandFilter = () => {
        onSetBrand(option);
    };

    return (
        <>
            <button onClick={handleBrandFilter} className="btn btn-outline-secondary btn-sm" style={{ borderRadius: "0", padding: "0.1rem 0.85rem", marginBottom: "0.4rem", marginLeft: "0.4rem" }}>
                {option}
            </button>
        </>
    );
}

export default BrandOption;
