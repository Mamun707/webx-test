import React from 'react'
import Product from "../products/Index";
import "./index.css"

function Right(props) {
    const { products, onAdd } = props;
    return (
        <div className="right-container ">

            <div className=" right-main">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>

                ))}
            </div>
        </div>
    );
}

export default Right