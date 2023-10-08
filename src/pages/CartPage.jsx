import React from "react";
import CartItem from "../components/CartItem.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://shoe-catalogue-api.onrender.com/api/cart/", { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } })
            .then((response) => {
                console.log(response);
                setCartItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        {cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))}
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
