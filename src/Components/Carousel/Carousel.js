import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'
const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">

                    <div class="carousel-item active slide-bg1 row">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1 className="text-white text-bolder">Are You <br />Looking A Best place For Travelling?</h1> <br />
                            <p className="text-white">If you are looking for a good Traveling site  this is for you.</p> <br />
                            <Link to='/services'><button className='btn btn-secondary'>See Our Service</button></Link> <br /> <br />
                        </div>
                    </div>

                    <div class="carousel-item slide-bg2">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1 className="text-white text-bolder">Are you Want to Travel <br />With your Family??</h1> <br />
                            <p className="text-white ">This is the most popular Travel site for you. Here you can Enjoy hole time with your Family.</p> <br />
                            <Link to='/services'><button className='btn btn-secondary'>See Our Service</button></Link> <br /> <br />
                        </div>
                    </div>
                    <div class="carousel-item slide-bg3">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1 className="text-white text-bolder">Move  for HangOut With Your Friend !</h1> <br />
                            <p className="text-white "> This is the best travel site for yoyr Family and friends.You can enjoy your good time with us to conform a ticcket. Lets contact with us</p> <br />
                            <Link to='/services'><button className='btn btn-secondary'>Our Services</button></Link> <br /> <br />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;