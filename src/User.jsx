import React, { useEffect,useState } from 'react'
import {Container,Col,Row,Card,Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function User() {
    const [userdata, setuserdata]=useState([])

    useEffect(()=>{ fetchUserdata(); }, [] )

    const navigate = useNavigate();

    const fetchUserdata=()=>{

        // console.log("====Fuction Called====");
        axios.get("https://dummyjson.com/users")
        .then((res)=>{
            console.log(res.data.users);
            setuserdata(res.data.users);
        })
        .catch((err)=>{

        })
 }
    const redirect=(v)=>{
        // navigate('/users/${id}')
    navigate("/user/" + v);
    }

  return (
    <div>
        <Container>
          <Row>
          {userdata.map((u)=>(<Col key={u.id}>
     <Card style={{ width: '18rem'}} onClick={()=> redirect(u.id)} >
      <Card.Img variant="top" src={u.image} />
      <Card.Body>
        <Card.Title>{u.firstName}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={()=> redirect(u.id)} >Go somewhere</Button>
      </Card.Body>
       </Card>
            </Col>
            ))}
            </Row>
            </Container>
    </div>
  )
}

export default User