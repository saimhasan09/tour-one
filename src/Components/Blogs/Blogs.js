import React from 'react';
import img from '../Images/tour-4.jpg'
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='w-100'>
            <h1 className='text-center my-5'>Learn More</h1>
            <div className='blogs-container'>
            <div className='col-md-6'>
<h1>Weekend in Europe, London</h1>
<p>For a long time, London was a small city. All its people lived inside the walls that were built by the Romans. This area is still called the City of London. There were many villages around it and gradually they joined.</p>
<button className='btn btn-outline-success'>View Details</button>
            </div>
            <div >
                <img src={img } className='img-fluid' />
            </div>
        </div>
        </div>
    );
};

export default Blogs;