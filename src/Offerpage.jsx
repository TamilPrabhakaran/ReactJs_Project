import axios from "axios";
import React, { useState, useEffect } from "react";

function Offerpage() {
  document.title = "Offer for You";

  const [show, setshow] = useState([]);

  useEffect(() => {
    product();
  }, []);

  const product = () => {
    axios
      .get("http://localhost:1010/dish/viewall")
      .then((a) => {
        console.log(a.data);
        setshow(a.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      
      {show.length > 0 ? (
        show.map((v) => (
          <div key={v.hotelId}>
            <span>Id: {v.hotelId}</span> <br />
            <span>Name: {v.hotelName}</span> <br />
            <span>Rating: {v.rating}</span> <br />
            <span>Address: {v.dish[0].price}</span>
            <img
              src={"http://localhost:1010/images/" + v.dish[0].imageName}
              width={100}
            />
            {/* <p>{v.dish[0].imageName}</p> */}
          </div>
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
}

export default Offerpage;
