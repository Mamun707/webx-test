import React, { useState } from 'react'
import "./index.css"

function Left(props) {
    const [Q, setQ] = useState('')
    const { cartItems, onAdd, onRemove, onDelete } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const odertax = itemsPrice * 0.14;
    const discount = itemsPrice > 2000 ? 20 : 0;
    const totalPrice = itemsPrice
    const totalPaid = itemsPrice + odertax + discount;
    return (
        <div className='left-container' >

            <div className="table-left"><p>Products</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Subtototal</p>
                <p>Action</p></div>
            <div className='table-left-data'>
                {cartItems.length === 0 && <div className='no-product'>No Product is selected</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="table-data-left">
                        <div >{item.name}</div>

                        <div >   {item.price.toFixed(2)}</div>
                        <div className='qty-input' >
                            <input name="Q" value={item.qty} type="number" onChange={(e) => { setQ(e.target.value) }} />

                        </div>
                        <div >

                            <div >{item.qty * item.price.toFixed(2)}</div>
                        </div>

                        <div>
                            {/* <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button> */}
                            <button onClick={() => onDelete(item)} className="delete">
                                X
                            </button>

                        </div>
                    </div>
                ))}

                {/* {cartItems.length !== 0 && ( */}
                <div className='footer-left'>

                    <div className='count-price item-design'>
                        <div className='items-count'>
                            <div><p>Items</p></div>
                            <div className='item-value-align'><p>{props.count}</p></div>
                        </div>
                        <div className='items-count'>
                            <div >
                                <p>Total Price</p>
                            </div>
                            <div className='item-value-align2' >
                                <p>{totalPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='count-price order-design'>
                        <div className='items-count'>
                            <div >Order Tax</div>
                            <div className='item-value-align'>{odertax.toFixed(2)}</div>
                        </div>
                        <div className='items-count'>
                            <div >Discount</div>
                            <div className='item-value-align2'>
                                {discount.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className='count-price total-pay'>
                        <div><p>Toatal Payable</p></div>
                        <div className='total-paidable'><p>{totalPaid.toFixed(2)}</p></div>
                    </div>
                    <div className='footer-final'>
                        <div className='footer-final-1'>
                            <div className='footer-suspend'>Suspend</div>
                            <div className='footer-cancel'>Cancel</div>
                        </div>
                        <div className='footer-final-2'>
                            <div className='footer-order' onClick={() => alert('The Order is Saved Successfully"')}>Order</div>
                            <div className='footer-bill'>Bill</div>
                        </div>
                        <div className='footer-final-3'>Payment</div>
                    </div>

                    {/* <div >
                        <button onClick={() => alert('The Order is Saved Successfully"')}>
                            Submit Order
                        </button>
                    </div> */}
                </div>
                {/* )} */}
            </div>
        </div >
    );
}

export default Left