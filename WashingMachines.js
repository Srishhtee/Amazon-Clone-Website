import React from 'react';
import "./WashingMachines.css";

function WashingMachines() {
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="WashingMachines">
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41yCc3uKF6L._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Whirlpool 7 Kg 5 Star Royal Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL 7.0 GENX, Grey, Hard Water Wash, ZPF Technology)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">13,175</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">15,390</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹18,950</span>
              <span className="offerPercent">(19% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41I7MkfzqjL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          LG 9 Kg 5 Star Inverter Fully-Automatic Top Load Washing Machine (THD09NPF, Middle Free Silver, AIDD Technology)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17,929</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">24,990</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹35,990</span>
              <span className="offerPercent">(31% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41lEyYkN4gL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          LG 7 Kg 5 Star Wind Jet Dry Semi-Automatic Top Loading Washing Machine (P7020NGAZ, Dark Gray, Rat Away Feature)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,530</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">11,490</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹16,090</span>
              <span className="offerPercent">(29% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/31Px3b+xRkL._SY445_SX342_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,753</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">16,190</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹21,000</span>
              <span className="offerPercent">(23% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/71hNjwzeXUL._SX522_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          LG 8 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine (T80SKSF1Z, Waterfall Circulation, Digital Display, Middle Free Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17,942</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">18,990</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹29,990</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41Du9-t2+VL._SY445_SX342_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Samsung 8 kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4441BGTL, Light Gray)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">16,157</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">19,990</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹27,000</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/411nZVj1MeL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          LG 6.5 Kg 5 Star Inverter Direct Drive Fully Automatic Front Load Washing Machine Appliance (FHM1065SDW, Steam Wash, In-Built Heater, Touch Panel, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,687</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">24,490</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹37,990</span>
              <span className="offerPercent">(36% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41u7XFd7KAL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          IFB 6.5 Kg 5 Star Fully Automatic Top Load Washing Machine Aqua Conserve (TL-REW 6.5KG AQUA, White, Hard Water Wash, 4 Years Comprehensive Warranty)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,205</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">16,890</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹19,990</span>
              <span className="offerPercent">(16% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/71QnhNCgxKL._SY550_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Samsung 7 kg, 5 Star, AI Control, Wi-Fi, Digital Inverter, Motor, Fully-Automatic Front Load Washing Machine (WW70T502NAN1TL, Hygiene Steam, Inox)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,391</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">32,490</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹48,500</span>
              <span className="offerPercent">(33% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/61KW+W-vqWL._SX466_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Whirlpool 7.5 Kg 5 Star Ace Supreme Semi-Automatic Top Loading Washing Machine (ACE 7.5 SUPREME, Grey Dazzle, Fast Drying)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,586</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">11,590</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹14,400</span>
              <span className="offerPercent">(20% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/31g28R49rAL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Panasonic 6 Kg 5 Star Fully-Automatic Top Load Washing Machine ( NA-F60LF1HRB, Grey, Durable Metal Body, 8 Wash Program, Aquabeat wash technology, One touch smart wash, 2022 model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6,361</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">13,790</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹20,00</span>
              <span className="offerPercent">(31% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/71xoqUmj6yL._SY500_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Samsung 6.5 kg, 5 star, Semi-Automatic Washing Machine (WT65R2200LL/TL, Air Turbo Drying, LIGHT GRAY)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">985</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">9,490</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹12,500</span>
              <span className="offerPercent">(24% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/51J0Pfye79L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Bosch 7 kg 5 Star Fully-Automatic Front Loading Washing Machine (WAJ2416SIN, Silver, AI active water plus, In-Built Heater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,285</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">30,490</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹48,590</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41KAv4E69+L._SX342_SY445_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Godrej 9 Kg 5 Star Active Soak Technology Semi-Automatic Top Load Washing Machine (WS EDGEPRO 90 5.0 PPB3 WNRD, Wine Red, With Rain Shower Spin)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">103</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">14,790</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹22,000</span>
              <span className="offerPercent">(33% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/51AupNeW1RL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          LG 11 Kg 5 Star Wind Jet Dry Rat Away Technology Semi-Automatic Top Loading Washing Machine (P1155SKAZ, Roller Jet Pulsator, Punch + 3, Middle Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,189</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">19,990</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹25,990</span>
              <span className="offerPercent">(23% off)</span>
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
      <div className="WashingMachinesProductCard">
        <img className="WashingMachinesProductImage" src="https://m.media-amazon.com/images/I/41rpAWULE0L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="WashingMachinesProductDetails">
          <h2 className="WashingMachinesProductName">
          Bosch 9 KG /6 KG Inverter Front Load Washer Dryer (WNA14408IN, Silver, Inbuilt Heater 1400 RPM)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">46</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="WashingMachinesPrice">54,990</span>
            <div className="WashingMachinesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="WashingMachinesPrice">₹72,190</span>
              <span className="offerPercent">(24% off)</span>
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

export default WashingMachines;
