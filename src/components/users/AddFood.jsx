import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
const AddFood = () => {
    let history = useHistory();
    const [user, setUser] = useState({
      name: "",
      description: "",
      price: ""
    });
  
    const { name, description, price} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3003/users", user);
      history.push("/menu");
    };
    return ( 
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Food</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Food Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Food Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Food Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>       
          <button className="btn btn-primary btn-block">Add Food</button>
        </form>
      </div>
    </div>
    );
}
export default AddFood;