import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
function Header() {

  const [selectedItem, setSelectedItem] = useState("All");
  const [boxShadow, setBoxShadow] = useState("none");
  const inputRef = useRef(null);

  const handleDropdownClick = (item) => {
    setSelectedItem(item);
  };

  const handleClick = () => {
    setBoxShadow("0 0 1px 3px #ffab3d");
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setBoxShadow("none");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="leftSection">
            <Link to="/" className="logoContainer">
              <div className="logoBox">
                <Link to="/">
                  <img
                    className="headerLogo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                  />
                </Link>
                <span className="logoText">.in</span>
              </div>
            </Link>
            <div className="locationContainer">
              <div className="locationIcon">
                <img
                  className="locationLogo"
                  src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png"
                  alt="Location Icon"
                />
              </div>
              <div className="userInfoBox">
                <span className="deliverTo">Deliver to user</span><br />
                <span className="deliveryLocation">UpdateLocation</span>
              </div>
            </div>
          </div>
          <div className="searchBar" style={{ boxShadow: boxShadow }}>
            <div className="dropdown categories-dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedItem}&nbsp;
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("All Categories")}>All Categories</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("Alexa Skills")}>Alexa Skills</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("Amazon Devices")}>Amazon Devices</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("Amazon Fashion")}>Amazon Fashion</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("Amazon Fresh")}>Amazon Fresh</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownClick("Amazon pharmacy")}>Amazon pharmacy</button></li>
              </ul>
            </div>
            <input className="searchInput" type="text" placeholder="Search Amazon.in"
              onClick={handleClick}
              ref={inputRef}
            />
            <img
              className="searchImage"
              src="https://img.freepik.com/premium-vector/magnifying-glass-icon-yellow-background_322958-1735.jpg"
              alt="Search Icon"
            />
          </div>
          <div className="rightSection">
            <div className="languageContainer">
              <div className="languageDropdown">
                <div className="language-dropdown language">
                  <button className="btn dropdown-toggle languageBtn" type="button" aria-expanded="false">
                    <img
                      className="flagIcon"
                      src="https://upload.wikimedia.org/wikipedia/en/archive/a/ae/20190917170935%21Flag_of_the_United_Kingdom.svg"
                      alt="Flag Icon"
                    />
                    <span className="languageCode">EN</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="accountContainer">
              <span className="blockOne">Hello, user sign in</span><br />
              <span className="blockTwo">Accounts & Lists</span>
            </div>
            <div className="ordersContainer">
              <span className="blockOne">Returns</span><br />
              <span className="blockTwo">& Orders</span>
            </div>
            <div className="cartContainer">
              <div className="cartContent">
                <span className="cartCount">4</span>
                <img
                  className="cartIcon"
                  src="https://as1.ftcdn.net/v2/jpg/02/04/95/36/1000_F_204953687_77A6a5w97NUAyUmJwQ1IbKab8nQQD8FB.jpg"
                  alt="Cart Icon"
                />
              </div>
              <div className="cartTextContainer">
                <span className="cartText">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
