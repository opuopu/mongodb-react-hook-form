import axios from 'axios';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/adduser',data)
      .then(res=>{
          reset()
      })
  };

    return (
        <div>
            <h2 className="mt-2">add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}  Placeholder="name" /> <br /> <br />
      <input {...register("desc", { })}   Placeholder="your description" /> <br /> <br />
      <input {...register("img", { })} placeholder="img-url" /> <br /> <br />
      <input type="number" {...register("price",)}  placeholder="price" /> <br /> <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Addservice;