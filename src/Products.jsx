import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
        <nav>
            <Link to="rating ">4 Ratings</Link>
            <Link to="featured">Featured</Link>
        </nav>
    </>
    
  )
}

export default Products