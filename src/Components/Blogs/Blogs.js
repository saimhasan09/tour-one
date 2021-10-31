import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='w-100'>
            <h1 className='text-center my-5'>Learn More</h1>
            <div className='blogs-container'>
                <div className='col-md-6'>
                    <h1>Weekend in Your Favorite Place</h1>
                    <p>So in no particular order, below you’ll find my favorite travel blogs for 2021. Follow them if you’d like to escape from reality for a while during your work break — and maybe get inspired for your next trip in the process!</p>
                    <button className='btn btn-outline-success'>View Details</button>
                </div>
                <div >
                    <img src="https://i.ibb.co/jDPmTQ2/Niagara-Falls-including-American-Falls-in-foreground-and-Horseshoe-Falls-in-background-with-autumn-l.jpg" alt="Niagara-Falls-including-American-Falls-in-foreground-and-Horseshoe-Falls-in-background-with-autumn-l" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;