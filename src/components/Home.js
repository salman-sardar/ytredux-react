import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://grademobile.co.uk/cdn/shop/files/iphone-14-pro-5g-deep-purple_03c6911e-49fc-406d-9e75-edc63125408b.png?v=1684250236" />
        </div>
        <div className="text-wrapper item">
          <span>Iphone</span>
          <span> Price : $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
