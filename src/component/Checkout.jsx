import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful!");
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="row">
        <div className="col-md-8">
          {state.map((product) => {
            return (
              <div key={product.id} className="row my-3">
                <div className="col-md-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.qty}</p>
                  <p>Total: ${product.qty * product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="creditCard">Credit Card Number</label>
              <input
                type="text"
                id="creditCard"
                name="creditCard"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expDate">Expiration Date</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
