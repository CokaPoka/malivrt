import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../../../../img/slide-img1.png';
import Img2 from '../../../../../img/slide-img2.png';
import './Carousel.css';


const properties = {
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false, 
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    emulateTouch: true, 
    autoFocus: false,
    thumbWidth: 100,
    interval: 5000,
    transitionTime: 1000,
    pauseOnHover: true,
}

const DemoCarousel = () => {
    return (
        <div className="home-carousel-container">
            <Carousel {...properties}>
                <div className="carousel-slide-container">
                    <img className="img-carousel" src={Img1} alt="demo-img1" />
                    <a href="/" className="legend">saznaj više</a>
                </div>
                <div className="carousel-slide-container">
                    <img className="img-carousel" src={Img2} alt="demo-img2" />
                    <a href="/" className="legend">saznaj više</a>
                </div>
            </Carousel>

        </div>
    )
}

export default DemoCarousel

