import React from "react";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";

function Filters({ brands, colors }) {
    return (
        <>
            <h5 style={{ marginBottom: "0.6rem" }}>Filters</h5>

            <BrandFilter brands={brands} />
            <ColorFilter colors={colors} />
            <SizeFilter />
        </>
    );
}

export default Filters;
