import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import PICTURE from "../../../Assests/PICTURE";
import "../Cart/Cart.scss";

function Cart({ showCart,laptopOff}) {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  const hello=laptopOff;
  console.log("this is 1: ",hello)

  return (
    <div className="Cart">
      <div className={showCart ? "cart-section active" : "cart-section"}>
        <div className="cart-white">
          <div className="cart-tool">
            <div className="cart-heading">List of products choosed:</div>
            <div className="remove-icon">
              <CiCircleRemove size={30} onClick={toggleContentVisibility}></CiCircleRemove>
            </div>
          </div>
          <ul>
            <li>
              <div className={`cart-inform ${isContentVisible ? 'hidden' : ''}`}>
                <h1 className="cart-inform-heading">Your cart is Empty</h1>
              </div>
            </li>
            <li>
            <div className={`cart-item ${isContentVisible ? '' : 'hidden'}`}>
      <img src={PICTURE.laptop} className="cart-img" alt="Laptop" />
      <h3 className="cart-desc">Viewsonic VA2432-H-W 24" IPS 100Hz slim bezel monitor</h3>
      <h4 className="cart-desc">x2.550.000₫</h4>
    </div>
            </li>
            <li>
              <div className={`cart-item ${isContentVisible ? '' : 'hidden'}`}>
                <img src={PICTURE.GeForce_RTX4080} className="cart-img" alt="RTX 4080" />
                <h3 className="cart-desc">GeForce RTX4080</h3>
                <h4 className="cart-desc">x 5.550.000₫</h4>
              </div>
            </li>
            <li>
              <div className={`cart-item ${isContentVisible ? '' : 'hidden'}`}>
                <img src={PICTURE.GeForce_RTX4090} className="cart-img" alt="RTX 4090" />
                <h3 className="cart-desc">GeForce RTX4090</h3>
                <h4 className="cart-desc">x 3.550.000₫</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
