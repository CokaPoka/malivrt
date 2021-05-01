import React from 'react';
import './EasterBasket.css';
import Item from '../../Item/Item';

const EasterBasket = ({ data, handleItemDetails }) => {

    return (
        <div className="easter-basket-container">
            {data.filter((item) => item.category.toLowerCase() === 'uskrs' && item.subcategory.toLowerCase() === 'korpa').map((item, index) => (
               <Item item={item} key={item._id} index={index} handleItemDetails={handleItemDetails} />
            ))}
        </div>
    )
}

export default EasterBasket