import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filters";


function Home() {
    const [shoes, setShoes] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios
            .get("https://shoe-catalogue-api.onrender.com/api/shoes")
            .then((response) => {
                setShoes(response.data);
                let brandsSet = new Set((response.data).map((shoe) => shoe.brand));
                setBrands([...brandsSet]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const addToCart = (shoeId) => {
        if (localStorage.getItem("jwtToken")) {
            axios
                .post(`https://shoe-catalogue-api.onrender.com/api/cart/add-to-cart/${shoeId}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } })
                .then(() => {
                    //
                })
                .catch((error) => {
                    console.error("Error adding to cart:", error);
                });
        } else {
            alert("Token not found");
        }
    };

    return (
        <>
            <div style={{ width: "90%" }} className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Filters brands={brands} />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {shoes.map((shoe) => (
                                <ProductCard key={shoe.id} shoe={shoe} onAddToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
