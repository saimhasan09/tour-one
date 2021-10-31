import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { _id, Name, description, img } = service;

    const url = `/placeOrder/${_id}`;

    return (
        <div className="col-md-4 ">

            <div className="service-container">
                <img src={img} alt="" className="img-fluid" />
                <h3>{Name}</h3>
                <p className="px-3">{description}</p>
                <Link to={url}><button className='btn btn-outline-success mb-3 '>Purchase Now </button></Link>
            </div>
        </div>
    );
};

export default Service;