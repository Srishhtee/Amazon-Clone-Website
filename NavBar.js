import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
       <div className="navBottom">
            <div>
                <img 
                className="menuIcon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o8jJ08gIj6XFLI9dIWo7YpOCF_3Ez3wS09XIsSkUoA&s"
                alt=""
                />
                <p>All</p>
            </div>
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </div>
  )
}

export default NavBar
