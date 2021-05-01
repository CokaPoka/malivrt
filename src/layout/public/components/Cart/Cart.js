import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleRemoveFromCart, sumCart }) => {
    return (
        <div className="cart-container">
            {cartItems.map(item =>             
                <div key={item._id}>
                    <h1>{item.naziv}</h1>
                    <h1>{item.cena}</h1>
                    <h2>{item.kolicina}</h2>
                    <h2>{item.precnik}</h2>
                    <button className="btn-remove-item-cart" onClick={(e) => { handleRemoveFromCart(e, item) }}>x</button>
                </div>
            )}
            <h3>{sumCart}</h3>
        </div>
    )
}

export default Cart