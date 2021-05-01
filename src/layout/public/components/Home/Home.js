import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import DemoCarousel from './Carousel/DemoCarousel';
import Categories from './Categories/Categories';
import './Home.css';

const Home = ({data}) => {
    return (
        <div className="home-container">
            <DemoCarousel />
            <Categories />
            <AllProducts data={data} />
        </div>

    )
}

export default Home