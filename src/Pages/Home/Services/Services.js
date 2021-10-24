import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handledelete = id =>{
        fetch(`http://localhost:5000/services/${id}`,{
            method:"DELETE"
        })
.then(res=> res.json())
.then(data =>{
const lastvalue = services.filter(service=>service._id !==id)
setServices(lastvalue)

})
    }
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        handledelete={handledelete}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;