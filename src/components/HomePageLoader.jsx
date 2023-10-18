import React from "react";

function HomePageLoader() {
    return (
        <>
            <div className="col-4">
                <div className="container">
                    <div style={{ height: "3rem", marginBottom: "1rem", width: "80%" }} className="row loading-container"></div>
                    <div style={{ height: "3rem", marginBottom: "1rem", width: "80%" }} className="row loading-container"></div>
                    <div style={{ height: "3rem", marginBottom: "1rem", width: "80%" }} className="row loading-container"></div>
                    <div style={{ height: "3rem", marginBottom: "1rem", width: "80%" }} className="row loading-container"></div>
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    {[0, 0, 0, 0, 0, 0].map((index) => {
                        return (
                            <div key={index} className="col-4">
                                <div className="loading-container" style={{ height: "12rem", marginBottom: "1rem" }}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePageLoader;
