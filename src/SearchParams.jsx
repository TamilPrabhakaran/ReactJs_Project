import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function SearchParams() {

    const [searchparams, setsearchparams]= useSearchParams (
        // {filter: "active"}
    )
    const isactive = searchparams.get("filter") === "active"

  return (
    <div>
        <h1>SearchParams</h1>

        <Button variant='success' onClick={()=> setsearchparams({filter: "active"})}>Active</Button>  {" "}  
        <Button variant='warning' onClick={()=> setsearchparams({})}>Reset</Button>
        
        {isactive ? <h1>Show Active User</h1> : <h1>Show All User</h1>}
    </div>
  )
}

export default SearchParams