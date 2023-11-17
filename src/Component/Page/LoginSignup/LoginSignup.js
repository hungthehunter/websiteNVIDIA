import React, { useEffect, useState } from "react";
import PICTURE from "../../Assests/PICTURE";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Log In");

  useEffect(()=>{
    if(action==="Log In"){
    }
  })
  return (
    <div>
      <div className="box">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="login-container">
          {/* (title) */}
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

          {/* import section */}
          <div className="inputs">
            {action === "Log In" ? (
              <div></div>
            ) : (
              <div className="input" style={{ visibility: "visible" }}>
                <img src={PICTURE.email} alt="email"></img>
                <input type="text" placeholder="Email"></input>
              </div>
            )}
            <div className="input" style={{ display: "none" }}>
              <img src={PICTURE.email} alt="email"></img>
              <input type="text" placeholder="Email"></input>
            </div>

            <div className="input">
              <img src={PICTURE.user} alt="name"></img>
              <input type="text" placeholder="Name"></input>
            </div>

            <div className="input">
              <img src={PICTURE.password} alt="password"></img>
              <input type="text" placeholder="Password"></input>
            </div>

            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Forget password? <span>click here</span>
              </div>
            )}

            <div className="submit-container">
              <div
                className={action === "Log In" ? "submit gray" : "submit"}
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </div>
              <a href="/"> 
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => setAction("Log In")}
              >
                
                Log In
               
              </div>
              </a>
            </div>
            <div className="footer">
              <span>
                <a>Terms</a>
              </span>
              <span>
                <a>Privacy</a>
              </span>
              <span>
                <a>Docs</a>
              </span>
              <span className="contact">Contact Github Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;