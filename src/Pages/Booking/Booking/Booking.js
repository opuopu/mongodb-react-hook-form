import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [single,setsingle] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setsingle(data))

    },[serviceId])
    console.log(single);
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h5>{single?.name}</h5>
            <p>{single?.desc}</p>
            <img src={single?.img} alt="" />
        </div>
    );
};

export default Booking;