import React from 'react'
import "./index.css"

function Product(props) {
    const { product, onAdd } = props;
    return (
        <div onClick={() => onAdd(product)}  >
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>

        </div>
    );
}

export default Product