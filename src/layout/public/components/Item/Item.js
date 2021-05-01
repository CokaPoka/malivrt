import React from 'react';
import { useHistory } from 'react-router-dom';
import './Item.css'

const Item = ({ item, handleItemDetails }) => {
    const history = useHistory();

    return (
        <div className="item" key={item._id}>
            <div className="item-img">
                <button className="btn-item-details" onClick={(e) => {
                    handleItemDetails(e, item)
                    history.push(`/proizvod/${item.title}`)
                }} >
                    <img src={`http://localhost:4000/${item.image[0]}`} alt='item-img' className='item-img'></img>
                </button>
            </div>
            <div className="item-title">
                <h1 className="item-title-text">{item.title}</h1>
            </div>
            <div className="item-info">
                <div className="item-price">
                    <h1 className="price-item-text">cena: {item.price1} rsd</h1>
                </div>
            </div>
        </div>
    )
}

export default Item