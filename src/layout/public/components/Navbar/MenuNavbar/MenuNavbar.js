import React from 'react';
import "./MenuNavbar.css";
import { Button } from '@material-ui/core';

const MenuNavbar = () => {

    return (
        <div className="menu-container-navbar">
            <nav className="main-navigation">
                <ul className="menu">
                    <li className="menu-item-has-children"><a className="title-a" href="/uskrs">
                        <Button>
                            <h1 className="nav-category-title">USKRS</h1>
                        </Button>
                    </a>
                        <ul className="sub-menu">
                            <li><a className="submenu-title" href="/uskrs/korpe">KORPE</a></li>
                            <li><a href="/">ARANŽMANI</a></li>
                            <li><a href="/">VENČIĆI</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a className="title-a" href="/">
                        <Button>
                            <h2 className="nav-category-title">NOVA GODINA</h2>
                        </Button>
                    </a>
                        <ul className="sub-menu">
                            <li><a href="/">KORPE</a></li>
                            <li><a href="/">ARANŽMANI</a></li>
                            <li><a href="/">VENČIĆI</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a className="title-a" href="/">
                        <Button>
                            <h2 className="nav-category-title">DOM</h2>
                        </Button>
                    </a>
                        <ul className="sub-menu">
                            <li><a href="/">KORPE</a></li>
                            <li><a href="/">ARANŽMANI</a></li>
                            <li><a href="/">VENČIĆI</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><a className="title-a" href="/">
                        <Button>
                            <h2 className="nav-category-title">DEKORACIJE</h2>
                        </Button>
                    </a>
                        <ul className="sub-menu">
                            <li><a href="/">ROĐENDANA</a></li>
                            <li><a href="/">VENČANJA</a></li>
                            <li><a href="/">KRŠTENJA</a></li>
                            <li><a href="/">BALONIMA</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">
                        <Button>
                            <h2 className="nav-category-title">KONTAKT</h2>
                        </Button></a></li>
                </ul>
                {/* <div className="drawer-toggle-button" onClick={props.buttonMenuClickHandler}>
                    <div id="nav-icon3" className={navIcon3}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> */}
            </nav>
        </div>
    )
}

export default MenuNavbar;