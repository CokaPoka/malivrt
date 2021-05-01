import React from 'react';
import "./MiddleNavbar.css";
import Logo from '../../../../../img/logo.jpg';
import Instagram from '../../../../../img/instagram.png';
import Facebook from '../../../../../img/facebook.png';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

const MiddleNavbar = () => {
    return (
        <div className="middle-navbar-container">
            <div className="logo-container-navbar">
                <a href="/">
                    <img className="logo-img" src={Logo} alt="logo-img" />
                </a>
            </div>
            <div className="search-container">
                <div className="search-icon-container">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                >
                </InputBase>
            </div>
            {/* <div className="search-container-navbar">
                <input className="input-search-navbar" type="text" placeholder="Pretraga"></input>
                <button className="search-button-navbar">🔍</button>
            </div> */}
            <div className="socialmeadia-container-navbar">
                <h3>ZAPRATITE NAS</h3>
                <div className="socialmedia-icons-container">
                    <a href="https://www.instagram.com/radionicamalivrt/?hl=en">
                        <img className="img-socialmedia" src={Instagram} alt="instagram-icon" />
                    </a>
                    <a href="https://www.facebook.com/radionicamalivrt">
                        <img className="img-socialmedia" src={Facebook} alt="facebook-icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default MiddleNavbar;