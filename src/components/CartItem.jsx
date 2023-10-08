import React from "react";

function CartItem({cartItem}) {
    return (
        <>
            <div style={{marginBottom: "1rem"}} className="row">
                <div className="col-5">
                    <div className="d-flex">
                        <img style={{ height: "8rem" }} src={cartItem.image_url} className="img-fluid" alt="" />
                        <div style={{ padding: "1rem" }}>
                            <h6 style={{ fontWeight: "600", marginBottom: "0", color: "#363636" }}>{cartItem.shoe_name}</h6>
                            <small style={{ color: "rgb(100, 100, 100)" }}>{cartItem.brand}</small>
                            <p style={{ marginTop: "0.6rem", color: "#585858" }}>
                                Size <span style={{ color: "#464646", fontWeight: "500" }}> {cartItem.size}</span>
                            </p>
                            <div style={{ height: "1rem", width: "1rem", borderRadius: "50%", border: "1px black solid" }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div style={{ marginTop: "2rem" }} className="row">
                        <div className="col-4">
                            <center>
                                <p style={{ color: "gray", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Price</p>
                                <p style={{ fontWeight: "600", margin: "0" }}>
                                    R <span>{cartItem.price}</span>
                                </p>
                            </center>
                        </div>
                        <div className="col-4">
                            <center>
                                <p style={{ color: "gray", fontSize: "0.9rem" }}>Quantity</p>

                                <div>
                                    <button style={{ border: "none" }} className="btn btn-outline-dark btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </button>
                                    <span style={{ padding: "0.5rem 0.8rem 0.5rem 0.8rem", border: "1px rgb(198, 198, 198) solid" }}>{cartItem.quantity}</span>
                                    <button style={{ border: "none" }} className="btn btn-outline-dark btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </center>
                        </div>

                        <div className="col-4">
                            <center>
                                <p style={{ color: "gray", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Subtotal</p>
                                <p style={{ fontWeight: "600", margin: "0" }}>
                                    R <span>{cartItem.price * cartItem.quantity}</span>
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
