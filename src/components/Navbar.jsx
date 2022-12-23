import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <nav>
    <ul style={{display: "flex", width:'95%',height:"50px",lineDecoration:"none" ,backgroundColor:'yellow' ,justifyContent:"space-around"}}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
