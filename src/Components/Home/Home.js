import React from 'react';
import Blogs from '../Blogs/Blogs';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import MyMap from '../GoogleMap/MyMap';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Blogs></Blogs>
            <MyMap></MyMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;