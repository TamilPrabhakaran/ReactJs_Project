import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Userdetail() {

    // const params = useParams();
    const {id}= useParams();

    const [data, setdata]=useState([])
    const [imgList , setImgList] = useState([]);


    useEffect(()=>{ singeluserdata(); }, [] )


const singeluserdata=()=>{

  axios.get(`https://dummyjson.com/products/${id}`)
  .then((res)=>{
    console.log(res.data);
    setdata(res.data)
    setImgList(data.images)
    console.log("==Image===",imgList)
    // console.log(data);
    // console.log(imgList);
    // console.log(imgList);


  })


}
   
  return (
    <div>
        {/* <h1>{params.id}</h1> */}
        <h1>{data.title}</h1>

        {/* {imgList.map((f)=>(
          <img src={f} />
        )) */}
        
      
    </div>
  )
}

export default Userdetail