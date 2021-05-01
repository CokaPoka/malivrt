import React from 'react';
import './EasterHome.css';

const EasterHome = () => {

    return (
        <div className="easter-home-container">
            <div className="easter-home-category-container">
                <a href="/uskrs/korpe" className="easter-home-album">
                    <h1 className="easter-home-album-title">KORPE</h1>    
                </a>
                <a href="uskrs/vencici" className="easter-home-album">
                    <h1 className="easter-home-album-title">VENČIĆI</h1>
                </a>
                <a href="uskrs/aranzmani" className="easter-home-album">
                    <h1 className="easter-home-album-title">ARANŽMANI</h1>
                </a>
            </div>

        </div>
    )
}

export default EasterHome;