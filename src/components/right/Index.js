import React from 'react'
import Product from "../products/Index";
import "./index.css"

function Right(props) {
    const { products, onAdd } = props;
    return (
        <main className="block col-2 ">
            <h2>Products</h2>
            <div className="row right-main">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>

                ))}
            </div>
        </main>
    );
}

export default Right