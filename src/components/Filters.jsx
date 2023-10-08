import React from "react";

function Filters() {
    return (
        <>
            <h5 style={{ marginBottom: "0.6rem" }}>Filters</h5>

            <div className="brand-filter" style={{ marginBottom: "0.5rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a style={{ textDecoration: "none" }}>
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

                <div style={{ width: "95%", padding: "0.6rem" }}>
                    <button id="all-brands" className="btn btn-outline-secondary btn-sm" style={{ borderRadius: "0", padding: "0.1rem 0.85rem", marginBottom: "0.4rem", marginLeft: "0.4rem" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                        &nbsp; All Shoes
                    </button>
                    <template x-for="brand in shoes.brandsList">
                        <button className="btn btn-outline-secondary btn-sm" style={{ borderRadius: "0", padding: "0.1rem 0.85rem", marginBottom: "0.4rem", marginLeft: "0.4rem" }}></button>
                    </template>
                </div>
            </div>

            <div className="brand-color" style={{ marginBottom: "0.7rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a style={{ textDecoration: "none" }}>
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
                <div style={{ backgroundColor: "rgb(252, 252, 252)", width: "95%", padding: "0.5rem" }}>
                    <div className="">
                        <button id="colors" className="btn color-options" style={{ marginBottom: "0.4rem" }}>
                            <div id="all" style={{ height: "1.9rem", width: "1.9rem", fontSize: "0.85rem", border: "1px black solid", borderRadius: "5px", padding: "0.1rem" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </div>
                        </button>
                        <template x-for="color in shoes.colorsList">
                            <button className="btn color-options" style={{ marginBottom: "0.4rem" }}>
                                <div style={{ height: "2rem", width: "2rem", borderRadius: "5px", border: "1px black solid" }}></div>
                            </button>
                            <br />
                        </template>
                    </div>
                </div>
            </div>

            <div className="shoe-sizes" style={{ marginBottom: "0.7rem" }}>
                <div style={{ border: "1px gray solid", padding: "0.4rem", width: "83%", marginBottom: "0rem" }}>
                    <a style={{ textDecoration: "none" }}>
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
                <div style={{ backgroundColor: "rgb(252, 252, 252)", width: "95%", padding: "0.5rem" }}>
                    <div className="">
                        <button className="btn color-options" style={{ marginBottom: "0.15rem" }}>
                            <div id="all-sizes" style={{ height: "1.9rem", width: "1.9rem", fontSize: "0.85rem", border: "1px black solid", borderRadius: "5px", padding: "0.1rem" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </div>
                        </button>
                        <template x-for="size in [4, 5, 6, 7, 8, 9, 10, 11]">
                            <button className="btn" style={{ marginBottom: "0.15rem" }}>
                                <div style={{ height: "2rem", width: "2rem", borderRadius: "5px", border: "1px #747474 solid" }}></div>
                            </button>
                        </template>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filters;
