import React from "react";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";

function Filters({ onSetBrand, brands, colors }) {
 


    return (
        <>
            <h5 style={{ marginBottom: "0.6rem" }}>Filters</h5>

            <BrandFilter onSetBrand={onSetBrand} brands={brands} />
            <ColorFilter colors={colors} />
            <SizeFilter />
        </>
    );
}

export default Filters;
