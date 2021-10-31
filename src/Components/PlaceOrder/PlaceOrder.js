import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './PlaceOrder.css'
import useAuth from '../Hooks/useAuth';
const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const onSubmit = data => {

        const newOrder = {
            name: user.displayName,
            email: user.email,
            address: data.address,
            serviceName: service.Name,
            serviceImg: service.img,
            serviceDescription: service.description,
            status: 'Panding'
        }
        console.log(newOrder);

        const url = `https://wicked-crypt-49514.herokuapp.com/placeOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => console.log(res));
        alert('added in database..');
    };


    useEffect(() => {
        fetch(`https://wicked-crypt-49514.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='service-details'>
            <img name='serviceImg' src={service.img} alt="" className='img-fluid ' />
            <h2 name='serviceName'>{service.Name}</h2>
            <p name='serviceDescription'>{service.description}</p>
            <h6><i class="fas fa-user"></i>  {user.displayName}</h6>
            <h6><i class="fas fa-envelope"></i>  {user.email}</h6>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("address", { required: true, maxLength: 20 })} placeholder='Enter your address' /><br />
                <input type="date" /> <br />
                <input type="submit" value="conform Now" />
            </form>
        </div>
    );
};

export default PlaceOrder;