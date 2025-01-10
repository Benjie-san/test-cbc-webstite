import React from 'react'
import '../styles/components/navbar.css'

function Navbar() {
  return (
    <div id="navbar">
        <div className="logo" >
            <img style={{width: "70%",  height: "70%"}} src={require("../assets/logo/cbc-white.png")} alt="cbc" />
        </div>
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Ministry</li>
                <li>Testimony</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="join-btn">
            <button>Join Us</button>
        </div>
    </div>
  )
}

export default Navbar
