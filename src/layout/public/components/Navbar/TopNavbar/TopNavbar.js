import React from 'react';
import './TopNavbar.css';
import { useHistory } from 'react-router-dom';
import { Badge, Button } from '@material-ui/core';
import { ShoppingCart, AccountCircleRounded, RateReviewRounded } from '@material-ui/icons';

const TopNavbar = ( {cartItems} ) => {

    const history = useHistory();

    return (
        <nav className="top-navbar">
            <div className="top-navbar-container">
                <div className="log-in-container-navbar">
                    <Button>
                        <div className="log-in-icon-navbar">
                            <AccountCircleRounded />
                        </div>
                        <div className="log-in-text-navbar">
                           <h2 className="top-nav-title">PRIJAVA</h2>
                        </div>
                    </Button>
                </div>
                <div className="registration-container-navbar">
                    <Button>
                        <div className="registration-icon-navbar">
                            <RateReviewRounded />
                        </div>
                        <div className="registration-text-navbar">
                            <h2 className="top-nav-title">REGISTRACIJA</h2>
                        </div>
                    </Button>
                </div>
                <div className="basket-container-navbar">
                    <Button aria-label="Show cart items" onClick={(e) => {
                        history.push(`/korpa`)
                    }} >
                        <div className="basket-icon-navbar">
                            <Badge badgeContent={cartItems.length} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </div>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default TopNavbar;