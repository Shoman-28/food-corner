
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import "./Orders.css";

const Orders = () => {

  const { user } = useContext(userContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://vast-ocean-51129.herokuapp.com/Order?email=" + user.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div className="OrderConatiner">
      <h1>Order Summary </h1>
      
      <div className="contantContainer">
        {order?.map((x, index) => (
          <div className="conatnt">
            <p>
              {index + 1}.&nbsp;{x.name} <span>Price:&nbsp; ${x.productPrice}</span>
              <span>Date:&nbsp; {new Date(x.date).toLocaleString()}</span>
            </p>
          </div>
        ))}

        {order.length === 0 && <span> No Order History </span>}
      </div>
    </div>
  );
};

export default Orders;