import React from 'react';
import "./budget.css";

function Budget() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="budget">
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/61qg0aPbKHL._AC_UY327_FMwebp_QL65_.jpg" alt="TECNO Spark GO 2024 (Gravity Black,8GB* RAM, 128GB ROM)"/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
            TECNO Spark GO 2024 (Gravity Black,8GB* RAM, 128GB ROM)| Segment First 90Hz Dot-in Display with Dynamic Port & Dual Speakers with DTS| 5000mAh| 10W Type-C| Fingerprint Sensor| Octa-Core Processor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">807</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,599</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹8,499</span>
              <span className="offerPercent">(11% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41PbblSVPOL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Redmi 12 (Moonstone Silver,6GB RAM, 128GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">168</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">9,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹15,999</span>
              <span className="offerPercent">(38% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/81H7FJtH4SL._SX425_.jpg" alt="" />
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">873</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">9,599</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,999</span>
              <span className="offerPercent">(28% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/4180tJsogaL._SX300_SY300_QL70_FMwebp_.jpg" alt=" "/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,848</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,699</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹11,999</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41xPScR3xkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          POCO C65 Pastel Blue 8GB RAM 256GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">171</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">8,249</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,499</span>
              <span className="offerPercent">(39% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/71d1ytcCntL._SX569_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,848</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">8,499</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,999</span>
              <span className="offerPercent">(39% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41o61kBDGdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          POCO C65 Matte Black 4GB RAM 128GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">171</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">6,799</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹10,999</span>
              <span className="offerPercent">(38% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41hVmODWJQL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,848</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,699</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹11,999</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41dYx0y8ehL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          POCO C65 Pastel Green 4GB RAM 128GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">171</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">6,799</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹10,999</span>
              <span className="offerPercent">(38% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/71HXFYWBuvL._SX569_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Motorola G24 Power (Glacier Blue, 8GB RAM, 128GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">31</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">9,349</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹12,999</span>
              <span className="offerPercent">(28% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41o61kBDGdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          POCO C65 Matte Black 8GB RAM 256GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">171</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">8,249</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,499</span>
              <span className="offerPercent">(39% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/411IzEa4aaL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          Lava O2 (Royal Gold, 8GB RAM, UFS 2.2 128GB Storage) |AG Glass Back|T616 Octacore Processor|18W Fast Charging|6.5 inch 90Hz Punch Hole Display|50MP AI Dual Camera|Upto 16GB Expandable RAM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">37</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹9,999</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41U49NAvYdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          TECNO POP 8 (Gravity Black,(8GB*+64GB)| 90Hz Punch Hole Display with Dynamic Port & Dual Speakers with DTS| 5000mAh Battery |10W Type-C| Side Fingerprint Sensor| Octa-Core Processor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,344</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">6,799</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹7,799</span>
              <span className="offerPercent">(13% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/71DSxfKzkJL._SX569_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz Smooth Display
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">16,373</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">8,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹10,999</span>
              <span className="offerPercent">(18% off)</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41I2yq6Q0JL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
           Samsung Galaxy M14 4G (Arctic Blue,4GB,64GB) | 50MP Triple Cam | 5000mAh Battery | Snapdragon 680 Processor | 2 Gen. OS Upgrade & 4 Year Security Update | 8GB RAM with RAM Plus | Without Charger
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">87</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,999</span>
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
      <div className="budgetProductCard">
        <img className="budgetProductImage" src="https://m.media-amazon.com/images/I/41nPoH+DIIL._SY300_SX300_.jpg" alt=""/>
        <div className="budgetProductDetails">
          <h2 className="budgetProductName">
          vivo Y18e (Space Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers | Without Charger
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">807</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">7,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹11,999</span>
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
    </div>
  );
}

export default Budget;
