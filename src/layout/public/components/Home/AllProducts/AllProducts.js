import React from 'react';
import './AllProducts.css';

const AllProducts = ({ data }) => {
    
    return (
        <div className="all-products-container">
            {data.map((item,index) => (
                <div className="easter-basket-item" key={index}>
                    <div className="item-img">
                            <img src={`http://localhost:4000/${item.image}`} alt='item-img' className='item-img'></img>
                    </div>
                    <div className="item-title">
                        <h1 className="item-title-text">{item.title}</h1>
                    </div>
                    <div className="item-info">
                        <div className="item-price">
                            <h1 className="price-item-text">cena: {item.price} rsd</h1>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default AllProducts