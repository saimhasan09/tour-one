import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='row w-100 '>

                <div className="col-md-4 px-5 ">
                    <h1 className='text-center text-success'>TraverSia</h1>
                    <hr />
                    <p>The World Tourism rankings are compiled by the United Nations World Tourism Organization as part of their World Tourism Barometer publication, which is released three times throughout the year</p>

                    <p><i class="fas fa-map-marker-alt"></i> Street, 11000 Boikaly, Khulna</p>
                    <p><i class="fas fa-phone-alt"></i> +8989898989</p>
                    <p><i class="fas fa-envelope"></i> support@yahoo.com</p>

                    <a href="#"><i class="fab fa-facebook " ></i></a>
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div className="col-md-4 px-5 ">
                    <h1 className='text-center text-success'>Leatest service</h1>
                    <hr />
                    <i class="fas fa-arrow-circle-right"> Family Tour</i> <br />
                    <i class="fas fa-arrow-circle-right"> Wild Tour</i> <br />
                    <i class="fas fa-arrow-circle-right"> River Tour</i> <br />
                    <i class="fas fa-arrow-circle-right"> Hangout</i> <br />
                    <i class="fas fa-arrow-circle-right"> International Travel</i> <br />
                    <p>Travelling across the world is now much easier and fun. </p>
                </div>
                <div className="col-md-4 px-5">
                    <h1 className='text-center text-success'>Get In Touch</h1>
                    <hr />
                    <input type="text" className="form-control w-75" placeholder=" Enter Your Email" name="" id="" /><br />
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br />
                    <button className='btn btn-outline-success'>Massage</button>

                </div>
            </div>
            <hr />
            <p className='text-center text-secondary'> &copy; All Rights Reserved TraverSia.</p>
        </div>
    );
};

export default Footer;