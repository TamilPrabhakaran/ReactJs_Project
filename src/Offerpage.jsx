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
      Offerpage
      {show.map((v) => (
        <div key={v.hotelId}>
          <span>Id: {v.hotelId}</span> <br />
          <span>Name: {v.hotelName}</span> <br />
          <span>Rating: {v.rating}</span> <br />
          <span>Address: {v.dish[0].price}</span>
          {/* <img
            src="C:/Users/tamil/eclipse-workspace/Loginpage/src/main/resources/images/asset 1.jpeg"
            width={100}
            alt="jfdlk.jpg"
          />
          {v.dish[0].imageName} */}
          <img
            src={"http://localhost:1010/images/" + v.dish[0].imageName}
            width={100}
          />
          <p>{v.dish[0].imageName}</p>
        </div>
      ))}
      {/* <div className='col-lg-3 col-md-6 col-sm-12 mainCard '>
            <Link to='' style={{textDecoration:'none'}}>
      <Card style={{background:'white', borderColor:'white'}} className=' image '>
      <Card.Img variant="top" src="/images/asset 20.jpeg" className='position-relative' style={{maxHeight:'200px', borderRadius:'20px'}} />
      <Card.Body className='position-absolute '>
        <Card.Title className='card-detail '>ITEMS AT &#8377;179 </Card.Title>
      </Card.Body>

        <Card.Text className='bg-warnin pt-2 px-3 '>
        <span style={{fontSize:'1.2rem', color:'02060c', fontWeight:'bold'}}> Chinese Wok</span>
        <br />
        <img src="./images/star.png" alt="" width={20} height={20} className="d-inline-block"/> <span style={{color:'212529', fontWeight:'bold'}}>4 |20-30 mins</span> <br />

        <span style={{color:'#02060c', opacity:'60.0%', fontWeight:'400'}}>Chinese, Asian, Tibetan, Desserts, Old Keelavasel Road Madurai</span>
        </Card.Text>
    </Card>
    </Link>
            </div> */}
    </div>
  );
}

export default Offerpage;
