import React from "react";
import PICTURE from "../../../../Assests/PICTURE"; // Replace with the actual path
import "../Cart.scss";

function CartGTX4090() {
  return (
    <div className="cart-item">
      <img src={PICTURE.laptop} className="cart-img" alt="Laptop" />
      <h3 className="cart-desc">Viewsonic VA2432-H-W 24" IPS 100Hz slim bezel monitor</h3>
      <h4 className="cart-desc">x2.550.000₫</h4>
    </div>
  );
}

export default CartGTX4090;