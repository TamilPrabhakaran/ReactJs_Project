import React from 'react'
import './searchcss.css'
function Search() {
    document.title="Search"
  return (
    <>
      <div className='container d-flex justify-content-center mt-5 '> 
    <div className='searchcontainer border-2 rounded-1 p-2 m-2 border-1 border d-flex  justify-content-between  '>

    <input type="text" placeholder='Search for restaurants and food'  className='searchinput pe-2 '/>
    
    <img src="./images/search.png" alt="" width={25}  />
    </div>
      </div>
      <div className='container mt-5 d-grid  '>

      <h3 className='fw-bold '>Popular Cuisines</h3>

      <div className='container bg-secondar overflow-x-scroll bg-blac   scroll-line'>
          <div className='d-flex  gap-3  overflow-hidde  '>

             <div> <img src="/images/asset 11.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 12.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 13.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 14.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 15.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 0.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 1.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 2.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 3.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 4.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 5.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 6.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 7.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 8.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 9.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 10.jpeg" alt="" width={150} height={180}/></div>
             <div> <img src="/images/asset 16.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 17.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 18.jpeg" alt="" width={150} height={180}/></div>  
             <div> <img src="/images/asset 19.jpeg" alt="" width={150} height={180}/></div>  

           </div>
        </div>
      </div>

    </>

  )
}

export default Search