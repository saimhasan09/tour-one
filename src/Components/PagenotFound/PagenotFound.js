import React from 'react';
import { Link } from 'react-router-dom';

const PagenotFound = () => {
    return (
        <div className='text-center my-5'>
            <h1 className='text-center'>Page Not Found</h1>
            <Link to='/home'>
                <button className='btn btn-outline-success'>Home</button>
            </Link>
        </div>
    );
};

export default PagenotFound;