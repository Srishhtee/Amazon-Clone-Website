import React from 'react'
import "./NavbarPanel.css";

function NavbarPanel() {
  return (
    <div className="navbarPanel">
        <button 
            class="btn allMenu" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasExample" 
            aria-controls="offcanvasExample"
            >
            <img
                className="menuIcon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsPWM1MRT-FYe7O_g3hbkQssazsiwmJ_dNaIxEmpREg&s"
                alt="Menu Icon"
            />
            <span className="menuText"> All</span>
        </button>
        <div 
            class="offcanvas offcanvas-start" 
            tabindex="-1" 
            id="offcanvasExample" 
            aria-labelledby="offcanvasExampleLabel"
            >
            <div className="menuProfile">
                <img
                    className="userIcon"
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    alt="User Icon"
                />
                <div className="userName">Hello, sign in</div>
            </div>

            <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close"
            ></button>
            <div className="menuConatinerWrapper">
                <div className="menuConatiner">
                    <ul className="menuSection">
                        <li className="heading">Trending</li>
                        <li className="menuContent">Best Sellers</li>
                        <li className="menuContent">New Releases</li>
                        <li className="menuContent">Movers And Shakers</li>
                    </ul>
                    <hr/>
                    <ul className="menuSection">
                        <li className="heading">Digital Content and Devices</li>
                        <li className="menuContent">Amazon miniTv-Free entertainment</li>
                        <li className="menuContent">Echo & Alexa</li>
                        <li className="menuContent">Kindle E-Readers & eBooks</li>
                        <li className="menuContent">Audible Audiobooks</li>
                        <li className="menuContent">Amazon Prime Video</li>
                        <li className="menuContent">Amazon Prime Music</li>
                    </ul>
                    <hr/>
                    <ul className="menuSection">
                        <li className="heading">Shop By Category</li>
                        <li className="menuContent">Mobiles, Computers</li>
                        <li className="menuContent">TV, Appliances,Electronics</li>
                        <li className="menuContent">Men's Fashion</li>
                        <li className="menuContent">Women's Fashion</li>
                    </ul>
                    <hr/>
                    <ul className="menuSection">
                        <li className="heading">Programs & Features</li>
                        <li className="menuContent">Amazon Pay</li>
                        <li className="menuContent">Gift Cards & Mobile Recharges</li>
                        <li className="menuContent">Amazon Launchpad</li>
                        <li className="menuContent">Handloom and Handicrafts</li>
                    </ul>
                    <hr/>
                    <ul className="menuSection">
                        <li className="heading">Help & Settings</li>
                        <li className="menuContent">Your Account</li>
                        <li className="menuContent">Customer Services</li>
                        <li className="menuContent">Sign Out</li>
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
        
        <div className="panelContent">
            <span className="panelText">Fresh</span>
            <span className="panelText">Amazon miniTV</span>
            <span className="panelText">Sell</span>
            <span className="panelText">Best Sellers</span>
            <span className="panelText">Today's Deals</span>
            <span className="panelText">Mobiles</span>
            <span className="panelText">Electronics</span>
            <span className="panelText">Customer Service</span>
            <span className="panelText">Prime</span>
            <span className="panelText">New Releases</span>
            <span className="panelText">Gift Ideas</span>
            <span className="panelText">Home & Kitchen</span>
            <span className="panelText">Fashion</span>
            <span className="panelText">Amazon Pay</span>
            <span className="panelText">Computers</span>
            <span className="panelText">Books</span>
        </div> 
    </div>
  )
}

export default NavbarPanel
