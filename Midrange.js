import React from 'react';
import './midRange.css';

function Midrange() {
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="midRange">
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41UfdTcwdIS._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Mi 11X 5G (Celestial Silver, 8GB RAM, 128GB Storage) | SD 870 | DisplayMate A+ Rated 120Hz E4 AMOLED | 48MP Sony Sensor          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">19,643</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">23,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹34,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41Xe96WtZoL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
           OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 256GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6,003</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">19,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹21,999</span>
              <span className="offerPercent">(9% off)</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/81AXMzLVMjL._SX679_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Samsung Galaxy A14 5G (Light Green, 8GB, 128GB Storage) | Triple Rear Camera (50 MP Main) | Upto 16 GB RAM with RAM Plus | Without Charger 
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,282</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">17,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹22,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41GhjaE0WKL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Samsung Galaxy A23 5G, Orange (6GB, 128GB Storage) with Offer
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">895</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">17,499</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹28,990</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41g1EjdEdhS._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Mi 11X 5G (Lunar White, 6GB RAM, 128GB Storage)) | SD 870 | DisplayMate A+ rated 120Hz E4 AMOLED | 48MP Sony sensor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,970</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">22,899</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹33,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/31Qy4Tf82UL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          MI 10T 5G Cosmic Black, 8GB RAM, 128GB Storage - |Additional Exchange/No Cost EMI Offers
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,465</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">22,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹42,999</span>
              <span className="offerPercent">(47% off)</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41Q+oC53k+L._SY300_SX300_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,811</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">11,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹15,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://images-na.ssl-images-amazon.com/images/I/41bkMtA7usL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Oneplus Nord CE4 (Celadon Marble, 8GB RAM, 128GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">839</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">24,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹30,999</span>
              <span className="offerPercent">(6% off)</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41899X6W0cL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          realme NARZO 70x 5G (Forest Green, 6GB RAM,128GB Storage| 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">13,499</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹17,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Redmi 12 5G Jade Black 6GB RAM 128GB ROM
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,036</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">12,499</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹17,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41ZlnmlOM-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.mm Slimmest Note Ever | 108MP Pro-Grade Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">698</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">16,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹20,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41nUkcbeCcL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          TECNO Pova 5 Pro 5G (Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | India's 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78”FHD+ Dot-in Display
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,061</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">15,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹20,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41Q2VNtEPJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Redmi Note 13 Pro (Midnight Black, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">50</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">24,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹28,999</span>
              <span className="offerPercent">(14% off)</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://images-na.ssl-images-amazon.com/images/I/41QbhV8nEnL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Redmi 13C 5G (Starlight Black, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">755</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">10,499</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹13,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41e5NtNQ7RL._SY300_SX300_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Vivo Y28 5G(Crystal Purple, 4GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">197</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">13,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹17,999</span>
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
      <div className="midRangeProductCard">
        <img className="midRangeProductImage" src="https://m.media-amazon.com/images/I/41N7Ns2G9mL._SY300_SX300_.jpg" alt=""/>
        <div className="midRangeProductDetails">
          <h2 className="midRangeProductName">
          Vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">560</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">10,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹18,999</span>
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

export default Midrange;
