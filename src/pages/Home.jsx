import React from "react";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/Filters";

function Home() {
    const [shoes, setShoes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);

    const [brandFilterVal, setBrandFilterVal] = useState("");
    const [colorFilterVal, setColorFilterVal] = useState("");
    const [sizeFilterVal, setSizeFilterVal] = useState("");

    useEffect(() => {
        axios
            .get("https://shoe-catalogue-api.onrender.com/api/shoes")
            .then((response) => {
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

    const setBrand = (val) => {
        setBrandFilterVal(val)
    };
    
    useEffect(()=>{
        applyFilter();
    },[brandFilterVal])

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
            axios
            .get("https://shoe-catalogue-api.onrender.com/api/shoes")
            .then((response) => {
                setShoes(response.data);
                // let brandsSet = new Set(response.data.map((shoe) => shoe.brand));
                // let colorsSet = new Set(response.data.map((shoe) => shoe.color));
                // setBrands([...brandsSet]);
                // setColors([...colorsSet]);
            })
            
        }
    };



    return (
        <>
            <div style={{ width: "90%" }} className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Filters onSetBrand={setBrand} brands={brands} colors={colors} />
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
