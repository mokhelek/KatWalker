import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filters";
import HomePageLoader from "../components/HomePageLoader";

function Home() {
    const [shoes, setShoes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [brandFilterVal, setBrandFilterVal] = useState("");
    const [colorFilterVal, setColorFilterVal] = useState("");
    const [sizeFilterVal, setSizeFilterVal] = useState("");

    // jwtToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthdGxlaG8iLCJhZG1pblVzZXIiOmZhbHNlLCJpYXQiOjE2OTY3ODQyNjB9.L1USGy5JNtugYy7fiR_XRrhq8L31Q_BoHQyUkltkA_Q"
    localStorage.setItem("jwtToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthdGxlaG8iLCJhZG1pblVzZXIiOmZhbHNlLCJpYXQiOjE2OTY3ODQyNjB9.L1USGy5JNtugYy7fiR_XRrhq8L31Q_BoHQyUkltkA_Q")
    useEffect(() => {
        axios
            .get("https://shoe-catalogue-api.onrender.com/api/shoes")
            .then((response) => {
                setIsLoading(false);
                setShoes(response.data);
                let brandsSet = new Set(response.data.map((shoe) => shoe.brand));
                let colorsSet = new Set(response.data.map((shoe) => shoe.color));
                setBrands([...brandsSet]);
                setColors([...colorsSet]);
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

    const setBrand = (brand) => {
        setBrandFilterVal(brand);
    };

    const setColor = (color) => {
        let firstChar = color.slice(0, 1);
        if (firstChar == "#") {
            setColorFilterVal(color.slice(1));
        } else {
            setColorFilterVal(color);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [brandFilterVal, colorFilterVal]);

    function applyFilter() {
        if (colorFilterVal != "" && sizeFilterVal == "" && brandFilterVal == "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/color/${colorFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal == "" && sizeFilterVal != "" && brandFilterVal == "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/size/${sizeFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal == "" && sizeFilterVal == "" && brandFilterVal != "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal == "" && sizeFilterVal != "" && brandFilterVal != "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandFilterVal}/size/${sizeFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal != "" && sizeFilterVal != "" && brandFilterVal == "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/size/${sizeFilterVal}/color/${colorFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal != "" && sizeFilterVal == "" && brandFilterVal != "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandFilterVal}/color/${colorFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else if (colorFilterVal != "" && sizeFilterVal != "" && brandFilterVal != "") {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandFilterVal}/size/${sizeFilterVal}/color/${colorFilterVal}`).then((result) => {
                setShoes(result.data);
            });
        } else {
            axios.get("https://shoe-catalogue-api.onrender.com/api/shoes").then((response) => {
                setShoes(response.data);
            });
        }
    }

    return (
        <>
            <div style={{ width: "90%" }} className="container-fluid">
                <div className="row">
                    {isLoading && <HomePageLoader />}

                    {!isLoading && (
                        <>
                            <div className="col-3">
                                <Filters onSetBrand={setBrand} onSetColor={setColor} brands={brands} colors={colors} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    {shoes.map((shoe) => (
                                        <ProductCard key={shoe.id} shoe={shoe} onAddToCart={addToCart} />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
