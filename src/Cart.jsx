import React from "react";
import "./Cartcss.css";
import { Link } from "react-router-dom";
function Cart() {
  document.title =
    "Order Online From India's Best Food Delivery Service | Foodie's Pradies}";

  return (
    <>
      <div className="container bg-warnin h-100 d-flex justify-content-center  align-items-center">
        <div className=" text-center bg-dange pt-5">
          <img
            src="./images/bgimages.png"
            alt=""
            width={320}
            height={300}
            className="target-image"
          />{" "}
          <br /> <br />
          <span
            style={{ color: "gray", fontWeight: "bolder", fontSize: "1.5rem" }}
            className=" pt-4"
          >
            Your Card is empty
          </span>{" "}
          <br />
          <span
            style={{
              color: "GrayText",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          >
            You can go to home page to view more restaruant
          </span>{" "}
          <br /> <br />
          <Link to="/" className="target-link">
            <p className="target-p">SEE RESTAURANTS NEAR YOU</p>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
