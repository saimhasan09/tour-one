import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-lowlands-24787.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Insert successfully');
                    reset();
                }
            })
    };
    return (
        <div className='add-service'>
            <h1>Please add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder='Enter name' />
                <textarea {...register("description")} placeholder='Enter description' />
                <input {...register("img")} placeholder='Enter img ' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;