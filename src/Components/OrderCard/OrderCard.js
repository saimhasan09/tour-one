import React from 'react';

const OrderCard = ({order}) => {
    const {name, email, serviceName, status, _id} = order;


    const handleStatus = (status, id) =>{
        const newStatus = {status};
        fetch(`https://floating-lowlands-24787.herokuapp.com/update/status/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStatus)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(newStatus);
    }


    return (
        <div>
            <tr className='row'>
                <div className='col-md'>{name}</div>
                <div className='col-md'>{email}</div>
                <div className='col-md'>{serviceName}</div>
                <div className='col-md'>{status}</div>
                <button onClick={()=>handleStatus('Approved', _id)} className=' col-md-2 my-2 btn btn-success'>Approved</button>
            </tr>
        </div>
    );
};

export default OrderCard;