import React from "react";
import "./PlaceOrder.css";

function PlaceOrder() {
  return (
    <div className="placeOrder">
      <form className="master-form">
        <h1>Order Form</h1>
        <div className="order-date">
          <label htmlFor="Date">Date: </label>
          <input type="Date" name="date" />
        </div>
        <div className="order-cusname">
          <label htmlFor="Customer Name">Customer Name: </label>
          <input type="text" name="name" />
        </div>
        <div className="order-delivery">
          <label htmlFor="Order Type">Order Type: </label>
          <input type="checkbox" name="checkbox1" />
          <label htmlFor="checkbox1">Delivery </label>
          <input type="text" name="cusadd" placeholder="Customer Address" />
        </div>
        <div className="order-pickup">
          <input type="checkbox" name="checkbox2" />
          <label htmlFor="checkbox2">Pick-up</label>
        </div>

        <div className="order-details">
          <h3>Order Details</h3>
          <div className="fooditem">
            <label htmlFor="Food Item">Food Item: </label>
            <input type="text" name="item" />
            <div className="quantity">
              <label htmlFor="Quantity">Quantity: </label>
              <input type="text" name="quantity" />
            </div>
            <div className="price">
              <label htmlFor="Price">Price: </label>
              <input type="text" name="price" />
            </div>
            <label htmlFor="Total">Total Amount: </label>
            <input type="text" name="Total" placeholder="Total Amount" />
          </div>
          <button>Place Order</button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
