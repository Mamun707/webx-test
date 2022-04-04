import React from 'react'
import "./index.css"

function Product(props) {
    const { product, onAdd } = props;
    return (
        <div onClick={() => onAdd(product)} className="product-box">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            {/* <div>${product.price}</div> */}

        </div>
    );
}

export default Product