import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from 'axios';


function Home() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        axios
            .get("https://shoe-catalogue-api.onrender.com/api/shoes")
            .then((response) => {
                setShoes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div style={{width:"90%"}} className="container-fluid">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <div className="row">
                            {shoes.map((shoe) => (
                                <ProductCard shoe={shoe} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
