import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ItemCarousel.css';

const properties = {
    showStatus: false,
    infiniteLoop: true,
    showThumbs: true,
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

const ItemCarousel = ({ details }) => {
    const images = details.image
    return (
        <div className="item-carousel-container">
            <Carousel {...properties}>
                {images.map((element) =>
                    <div className="item-details-carousel-slide-container" key={details._id}>
                        <img className='item-details-img' src={`http://localhost:4000/${element}`} alt='demo' />
                    </div>)}
            </Carousel>
        </div>
    )
}

export default ItemCarousel;

