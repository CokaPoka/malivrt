import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './layout/public/PublicRoute';
import Home from './layout/public/components/Home/Home';
import './App.css';
import Navbar from './layout/public/components/Navbar/Navbar';
import EasterHome from './layout/public/components/Easter/EasterHome';
import EasterBasket from './layout/public/components/Easter/EasterBasket/EasterBaket';
import ItemDetails from './layout/public/components/Item/ItemDetails';
import { getItems } from './Service/Service';
import Cart from './layout/public/components/Cart/Cart';

const App = () => {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [details, setDetails] = useState({});
    const [sum, setSum] = useState('');

    useEffect(() => {
        getItems().then(res => res.data)
            .then(data => {
                let items = data.products.sort(function (a, b) {
                    return b.date - a.date
                })
                setItems(items)
                if (localStorage.getItem('cartItems')) {
                    setCartItems(JSON.parse(localStorage.getItem('cartItems')))
                }
            });
    }, [items, cartItems])

    const handleItemDetails = (e, item) => {
        setDetails({ ...item });
    }

    const handleAddCart = (e, det) => {
        let itemAlreadyInCart = false;
        cartItems.forEach(element => {
            if (element._id === det._id && element.color === det.color && element.precnik === det.precnik) {
                itemAlreadyInCart = true;
                element.kolicina = det.kolicina;
                element.cena = det.cena;
            }
        });
        if (!itemAlreadyInCart) {
            setCartItems(cartItems.push({ ...det }));
        }
        if (cartItems.length === 1) {
            cartItems.forEach(el => {
                if (el.cena === det.cena) {
                    let cena = det.cena
                    console.log(cena);
                    setSum(cena)
                }
            })
        }
        if (cartItems.length > 1) {
            var total = cartItems.reduce(function (prev, cur) {
                return prev + cur.cena;
            }, 0);
            console.log(total);
            setSum(total)
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }


    const handleRemoveFromCart = (e, item) => {
        const index = cartItems.filter(element => element._id === item._id && element.cena === item.cena && element.precnik===item.precnik).map(el => el._id).indexOf(item._id);
        if (index > -1) { cartItems.splice(index, 1); }
        setCartItems(cartItems)
        var total = cartItems.reduce(function (prev, cur) {
            return prev + cur.cena;
        }, 0);
        console.log(total);
        console.log(cartItems);
        setSum(total)
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }


    return (
        <>
            <Router>
                <Navbar cartItems={cartItems} />
                <Switch>
                    <PublicRoute exact path="/korpa">
                        <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} sumCart={sum} />
                    </PublicRoute>
                    <PublicRoute exact path="/proizvod/:title">
                        <ItemDetails details={details} handleAddCart={handleAddCart} />
                    </PublicRoute>
                    <PublicRoute exact path="/uskrs/korpe">
                        <EasterBasket data={items} handleItemDetails={handleItemDetails} />
                    </PublicRoute>
                    <PublicRoute path="/uskrs">
                        <EasterHome />
                    </PublicRoute>
                    <PublicRoute path="/">
                        <Home data={items} />
                    </PublicRoute>
                </Switch>
            </Router>
        </>
    );
}

export default App;
