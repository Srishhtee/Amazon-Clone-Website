import React from 'react';
import "./Microwaves.css";

function Microwaves() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Microwaves">
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41uZi4l+8-L._SX342_SY445_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
          Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,644</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">5,899</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹7,490</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/31XYKds4lHL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Samsung 28L, Convection Microwave Oven with Curd Making(MC28A5013AK/TL, Black, 10 Yr warranty)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,351</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">12,490</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹15,590</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41gncX9hAUL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Panasonic 20L Solo Microwave Oven (NN-SM25JBFDG,Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,168</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">5,690</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹6,790</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41022mFmsPL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit), Standard
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,697</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">15,490</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹19,390</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41VJsIAwzFL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            LG 28 L Convection Microwave Oven (MC2846BV, Black, Quartz Heater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,118</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">12,589</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹16,999</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/31wZiraOgnL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Samsung 21L, Convection Microwave Oven with Triple Distribution System(CE73JD-B1/XTL, Black, 10 Yr warranty, Gift for Every Occasion)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">648</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">10,490</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹12,990</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/713r4JDmsQL._SX522_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            LG 20 L Grill Microwave Oven (MH2044DB, Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">781</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">7,990</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹10,199</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41Kyp0ixlRL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
           IFB 25 L Solo Microwave Oven (25PM2S, IFBJ0, Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,378</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">7,290</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹9,490</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/71ITInjy-FL._SX342_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Bajaj MTBX 2016 20L Grill Microwave Oven, Black
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,527</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">5,790</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹7,775</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/31zlTvsXGtL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Samsung 32L, Slim Fry, Convection Microwave Oven with Tandoor and Curd making(MC32A7035CT/TL, Stainless Steel, 10 Yr warranty, Gift for Every Occasion)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,741</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">16,990</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹20,00</span>
              <span className="offerPercent">(15% off)</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41fErliIk9L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Whirlpool 29 Litres Convection Microwave Oven With 300 Plus Auto Cook Menus (Magicook Pro 31CES-E, Black, Air Fryer)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">540</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">11,790</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹20,700</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41zypXbOFJL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            LG 32 L Convection Microwave Oven (MC3286BRUM, Black, 360° Motorised Rotisserie & Diet Fry)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,610</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">17,990</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹23,999</span>
              <span className="offerPercent">(25% off)</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/51dSnCR26NL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            LG 28 L Charcoal Convection Microwave Oven (MJEN286UI, Black, 360° Motorised Rotisserie & Charcoal Lighting Heater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">184</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">17,990</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹25,499</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/31URPwmhZBL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Haier 23 L Convection Microwave Oven (HIL2301CSSH, Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">974</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">9,490</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹13,500</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/31-OZ8-WxOL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
             Voltas Beko 28 L Convection Microwave Oven, 5 power levels (MC28BD, Black)
           </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">63</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">11,749</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹19,990</span>
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
      <div className="MicrowavesProductCard">
        <img className="MicrowavesProductImage" src="https://m.media-amazon.com/images/I/41-63i-6oUL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="MicrowavesProductDetails">
          <h2 className="MicrowavesProductName">
            Usha CALYPSO Digital Air Fryer Oven Toaster Grill (OTG) 30 Litre capacity All in one- Air Fry, Bake, Dehydrate, Toast, Broil | Digital Display | 8 Cooking Options, 8 accessories |2 Yrs Warranty Black
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">198</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="MicrowavesPrice">10,299</span>
            <div className="MicrowavesOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="MicrowavesPrice">₹15,990</span>
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
    </div>
  );
}

export default Microwaves;
