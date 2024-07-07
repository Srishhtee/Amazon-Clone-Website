import React from 'react';
import "./Airconditioners.css";

function Airconditioners() {
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Airconditioners">
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/31aoA6SbiJL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
          Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, Triple Display, Dew Clean Technology, Coanda Airflow, 2023 Model, MTKL50U, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,371</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">36,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹58,400</span>
              <span className="offerPercent">(37% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/41xtlhge82L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
          Lloyd 1.5 Ton 3 Star Fixed Speed Window Ac (Copper, 2023 Model, White With Silver Deco Strip, GlW18C3YWSEW)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,324</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">27,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹47,990</span>
              <span className="offerPercent">(42% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/314HZjxgjUL._SX679_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Lloyd 1.0 Ton 5 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I5FWBEV)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,431</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">34,490</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹57,990</span>
              <span className="offerPercent">(41% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/41LfQcWib6L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Voltas 1.5 Ton 3 Star, Fixed Speed Window AC (Copper, Turbo Mode, 2023 Model, 183 Vectra Pearl, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,177</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">28,649</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹41,990</span>
              <span className="offerPercent">(32% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/514eo-YCCNL._SX522_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Carrier 1 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling,Dual Filtration with HD & PM 2.5 Filter, Auto Cleanser, 2023 Model,ESTER Exi - CAI12ER3R33F0,White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,222</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">34,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹79,990</span>
              <span className="offerPercent">(56% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/61lH-8LkUfL._SX679_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Samsung 2 Ton 3 Star Wi-fi Enabled Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR24CYLZABE White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">645</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">49,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹83,990</span>
              <span className="offerPercent">(40% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/213-Yv7TrJL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Blue Star 0.8 Ton 3 Star Inverter Split Ac (Copper, Turbo Cool, Gold Fins, Comfort Sleep, Self Clean Technology, Multi Sensors, Eco Mode, Hidden Display, Stabiliser Free, 2023 Model,Ic309Rbtu,White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,170</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">27,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹42,500</span>
              <span className="offerPercent">(34% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/41Nz3ZsLgrL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Godrej 1.5 Ton 3 Star, Turbo Mode, Window AC (Copper, Anti Corrosive Blue Fin, 2023 Model, AC 1.5T WFC 18UTC3-WWA Window, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">249</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">27,699</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹41,990</span>
              <span className="offerPercent">(34% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/21S6fJqggfL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Voltas 1.5 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 183V Vectra Pride, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">69</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">34,390</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹62,990</span>
              <span className="offerPercent">(45% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/71yL9n+L4-L._SX679_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Samsung 1.5 Ton 5 Star (5-in-1 Convertible Wind-Free Cooling, 2023 Model, AR18CYNAMWK), Stabilizer Free Operation, Inverter Split AC, White
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">432</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">41,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹73,990</span>
              <span className="offerPercent">(43% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/41M7ocgxanL._SX522_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Voltas 2 Ton 5 Star, Inverter Split AC(Copper,4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 245V Vectra Plus, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">203</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">58,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹93,990</span>
              <span className="offerPercent">(37% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/21JbEjSUvoL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Daikin 1.5 Ton 3 Star Fixed Speed Split AC (Copper, PM 2.5 Filter, 2022 Model, FTL50U, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">641</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">40,890</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹55,660</span>
              <span className="offerPercent">(26% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/31RFvuDevHL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Haier 1.25 Ton 3 Star Twin Inverter Split AC (Copper, 5 in 1 Convertible, Anti Bacterial Filter, Cools at 54°C Temp, Long Air Throw - HSU15V-TMS3BE-INV,White,2024 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">38</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">30,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹60,991</span>
              <span className="offerPercent">(49% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/31xfGNcE9+L._SX342_SY445_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            LG 1.5 Ton 5 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter with Anti-Virus Protection, 2023 Model, RS-Q19YNZE, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,269</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">46,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹84,990</span>
              <span className="offerPercent">(45% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/317zgToEVpL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Blue Star 1.5 Ton 5 Star Convertible 5 in 1 Cooling Inverter Split Air Conditioner (IC518YNU, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,417</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">43,990</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹73,000</span>
              <span className="offerPercent">(40% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
      <div className="AirconditionersProductCard">
        <img className="AirconditionersProductImage" src="https://m.media-amazon.com/images/I/216XOxhLvXL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="AirconditionersProductDetails">
          <h2 className="AirconditionersProductName">
            Hitachi 1.5 Ton 3 Star ice Clean Xpandable Plus Inverter Split AC (100% Copper, Dust Filter, 2024 Model, iZen 3400FXL, R32-RAS.G318PCBISF, Dual Gold)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">65</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="AirconditionersPrice">36,499</span>
            <div className="AirconditionersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="AirconditionersPrice">₹63,000</span>
              <span className="offerPercent">(42% off)</span>
            </div>
          </div>
          <div className="deliverySection">
            <img className="primeLogo" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt=""/>
            <div className="deliveryDate">
              <span className="getItBy">Get it by</span>
              <span className="date">{calculateDeliveryDate()}</span>
              <span className="getItByAfter"></span>
            </div>
            <div className="deliveryType">FREE Delivery by Amazon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airconditioners;
