import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch(`https://wicked-crypt-49514.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    })
    return (
        <div>
            <hr />
            <h3 className="text-center py-3">Manage all Orders</h3>
            <hr />

            <tr className='row text-center'>
                <th className='col-md'>Customer Name</th>
                <th className='col-md'>Email</th>
                <th className='col-md'>Service</th>
                <th className='col-md'>Status</th>
                <th className='col-md'>Action</th>

            </tr>
            <hr />

            {
                orders && orders.map(order => <OrderCard order={order} key={order._id}></OrderCard>)
            }
        </div>
    );
};

export default ManageAllOrder;