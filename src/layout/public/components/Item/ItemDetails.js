import React, { useState, useEffect } from 'react';
import './ItemDetails.css';
import { useParams } from 'react-router-dom';
import ItemCarousel from './ItemCarousel';

const ItemDetails = ({ details, handleAddCart }) => {
    const { title } = useParams()

    const [price, setPrice] = useState(`${details.price1}`);
    const [count, setCount] = useState(1);
    const [precnik, setPrecnik] = useState(``);
    const [det, setDet] = useState({});
        

    useEffect(() => {
        const sum = price * count;
        const d = {
            _id: details._id,
            cena: sum,
            naziv: details.title,
            kolicina: count,
            color: 'pink',
            precnik: precnik
        }
        setDet(d);
    }, [details, count, precnik, price])


    const handlePrice = (e) => {
        if (e.target.value === `${details.size1}`) {
            setPrice(`${details.price1}`);
            setPrecnik(`${details.size1}`)
        }
        if (e.target.value === `${details.size2}`) {
            setPrice(`${details.price2}`);
            setPrecnik(`${details.size2}`)
        }
    }

    const handleCount = (e) => {
        if (e.target.value === '1') {
            setCount(1)
        }
        if (e.target.value === '2') {
            setCount(2)
        }
    }

    return (
        <div className="item-details-container" key={details._id}>
            <div className="item-details-top-container">
                <div className="item-details-top-left-container">
                    <ItemCarousel details={details} />
                </div>
                <duv className="item-details-top-right-container">
                    <h1>{details.title}</h1>
                    <h1 className="item-price-text">CENA: {price} rsd</h1>
                    <h2>OPIS: {details.desc}</h2>
                    <h2>velicina:</h2>
                    <div className="item-size-select-container">
                        <select className="item-size-select" onChange={(e) => { handlePrice(e) }}>
                            <option value={details.size1}>{details.size1}</option>
                            <option value={details.size2}>{details.size2}</option>
                        </select>
                        <p>cm</p>
                    </div>
                    <div className="item-count-select-container">
                        <select className="item-count-select" onChange={(e) => { handleCount(e) }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <p>cm</p>
                    </div>
                    <h2>IZABERI BOJU:</h2>
                    <div className="item-details-color-container">
                        <div className="yellow"></div>
                        <div className="red"></div>
                        <div className="pink"></div>
                        <div className="green"></div>
                        <div className="blue"></div>
                        <div className="purple"></div>
                    </div>
                    <button className="btn-add-cart" onClick={(e) => { handleAddCart(e,det)}}>Dodaj u korpu</button>
                </duv>
            </div>
        </div>
    )
}

export default ItemDetails