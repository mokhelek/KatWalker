import React from "react";

function ProductCard({ shoe, onAddToCart }) {

    
    const handleAddToCart = () => {
        onAddToCart(shoe.id);
    };

    return (
        <>
            <div style={{ padding: "0.4rem" }} className="col-lg-4 col-md-3 col-6 shoe-box-wrapper">
                <div className="shoe-box card">
                    <img style={{ height: "15rem" }} className="img-fluid" src={shoe.image_url} alt="" />
                    <div className="shoe-card-body card-body">
                        <h6 style={{ marginBottom: "0rem", fontWeight: "600" }}>{shoe.shoe_name}</h6>
                        <small style={{ color: "gray" }}>{shoe.brand}</small>

                        <div className="row">
                            <div className="col-sm-7">
                                <p style={{ fontSize: "0.9rem" }}>
                                    R <span> 2000</span>
                                </p>
                            </div>
                            <div className="col-sm-5">
                                <p style={{ color: "rgb(190, 123, 0)", fontSize: "0.9rem" }}>
                                    <span>{shoe.stock_quantity}</span> in stock
                                </p>
                            </div>
                        </div>

                        <div>
                            <button onClick={handleAddToCart} style={{ width: "100%", borderRadius: "0" }} className="btn btn-dark btn-block btn-sm">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
