import React from 'react';
import "./Refrigerators.css";

function Refrigerators() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Refrigerators">
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41iy-XwHW-L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
          Haier 165L 1-Star Direct Cool Single Door Refrigerator (2024 Model, HED-171RS-P, Red Mono)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,701</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">10,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹14,990</span>
              <span className="offerPercent">(27% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41OJYnAxw3L._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
          Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1824CR/HL, Red, Camellia Purple, Base Stand Drawer, 2024 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,127</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">16,390</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹22,990</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31vu6qqnkNL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
          Haier 190L 4-Star Direct Cool Single Door Refrigerator (2024 Model, HED-204DS-P, Dazzle Steel)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,601</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">14,790</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹20,990</span>
              <span className="offerPercent">(30% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31n4Z2AjYFL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
          Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue,2023 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,245</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">12,590</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹15,400</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41veq0TQ9YL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
          Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1724CU/HL, Camellia Blue, 2024 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,305</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">15,890</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹21,999</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41xJSWwvOJL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ABEU, Blue Euphoria, Base stand with drawer)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,931</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">17,690</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹22,199</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/314A7pqIP5L._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Samsung 183 L, 3 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1723S8/HL, Silver, Elegant Inox, 2024 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,659</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">14,980</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹18,999</span>
              <span className="offerPercent">(21% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31D65qgd9cL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,321</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">25,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹37,099</span>
              <span className="offerPercent">(30% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41oUw2LvoNL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
           Godrej 180 L 2 Star Advanced Capillary Technology, With Jumbo Vegetable Tray Direct Cool Single Door Refrigerator(2023 Model, RD EDGE 205B WRF PP BL, Pep Blue)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,270</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">12,690</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹17,500</span>
              <span className="offerPercent">(27% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/21y7fMkF2LL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Haier 190L 5-Star Direct Cool Single Door Refrigerator (2024 Model, HED-205DS-P, Dazzle Steel)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">807</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">15,890</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹22,490</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/316mj6xrrjL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            LG 185 L 4 Star Inverter Direct-Cool Single Door Refrigerator (2023 Model, GL-D199OSEY, Scarlet Euphoria, Base stand with drawer)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">593</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">16,390</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹21,099</span>
              <span className="offerPercent">(22% off)</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31CT-dWPSyL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">TECNO Spark GO 2
            Samsung 653 L, 3 Star, Frost Free, Double Door, Convertible 5-in-1 Digital Inverter, Side By Side AI Enabled Smart Refrigerator with WiFi (RS76CG8003S9HL, Silver, Refined Inox, 2024 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,829</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">79,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹1,13,000</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31oyB1FrNnL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S WINE BLOOM-Z, 2023 Model)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">601</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">13,790</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹17,000</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/31ZdYRoVuOL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Godrej 244 L 3 Star Convertible Freezer 6-In-1, 30 Days Farm Freshness, Frost Free Inverter Double Door Refrigerator(2023 Model, RF EON 265C RCIF FS ST, Fossil Steel)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">874</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">23,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹31,500</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/41n8eM4wdNL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Haier 602L Frost Free Side by Side Refrigerator (2024 Model, HRS-682KS, Black Steel)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">231</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">62,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹1,03,990</span>
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
      <div className="RefrigeratorsProductCard">
        <img className="RefrigeratorsProductImage" src="https://m.media-amazon.com/images/I/21pDh19orTL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="RefrigeratorsProductDetails">
          <h2 className="RefrigeratorsProductName">
            Midea 591L Side By Side Refrigerator with Inverter (MRF5920WDSSF, Silver, SS Finish, Water Dispenser)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">157</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="RefrigeratorsPrice">49,990</span>
            <div className="RefrigeratorsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="RefrigeratorsPrice">₹87,990</span>
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
    </div>
  );
}

export default Refrigerators;
