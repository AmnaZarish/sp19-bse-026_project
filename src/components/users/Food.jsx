import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Food = () => {
  const [user, setUser] = useState({
    name: "",
    description: "",
    price: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/menu">
        back to Menu
      </Link>
      <h1 className="display-4">Food Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">description: {user.description}</li>
        <li className="list-group-item">price: {user.price}</li>
      </ul>
    </div>
  );
};

export default Food;