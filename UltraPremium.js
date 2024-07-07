import React from 'react'
import './UltraPremium.css'
function UltraPremium() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="UltraPremium">
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/619lW2YtVhL._SX569_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
            iQOO 12 5G (Legend, 16GB RAM, 512GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,823</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">57,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹64,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/61JUyx1-SbL._SX569_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          iQOO 12 5G (Alpha, 16GB RAM, 512GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,830</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">57,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹64,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/41SbFiUoSOL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          OnePlus 12R (Cool Blue, 16GB RAM, 256GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">231</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">45,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹64,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/41JbbGMc0IL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          TECNO Phantom V Fold 5G Black (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Display | 4nm D9000+ Fast Processor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">575</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">69,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,09,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Apple iPhone 13 (128GB) - Blue
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">26,800</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">52,900</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹59,999</span>
              <span className="offerPercent">(12% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 512GB Storage) with No Cost EMI/Additional Exchange Offers
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,711</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">79,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,42,999</span>
              <span className="offerPercent">(44% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,823</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">50,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹61,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/410m1C3UQkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Xiaomi 14 Ultra (White, 16GB RAM, 512GB Storage) | 50 MP Leica Quad Camera | 2K 120 Hz LTPO AMOLED | Flagship Snapdragon 8 Gen 3 | 90 W Hypercharge
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">32</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">99,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,19,999</span>
              <span className="offerPercent">(17% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/41GAnuY2-DL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 512GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">837</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">1,19,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,61,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/31em1ruHGbL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy S24 5G AI Smartphone (Amber Yellow, 8GB, 256GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">136</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">79,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹84,999</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/31vz6yNQ6+L._SX342_SY445_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Apple iPhone 15 (128 GB) - Pink
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,391</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">71,290</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹79,990</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/51LByp9EsxL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Oneplus Open (Emerald Dusk, 16GB RAM, 512GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">48</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">1,39,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,49,999</span>
              <span className="offerPercent">(7% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/31mhrYR+UNL._SY300_SX300_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy Z Flip5 5G AI Smartphone (Graphite, 8GB RAM, 512GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">281</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">1,09,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹1,13,999</span>
              <span className="offerPercent">(4% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/413rTYhIhhL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy Note10+ (Aura Black, 12GB RAM, 256GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">473</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">49,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹99,999</span>
              <span className="offerPercent">(50% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/517Vavz2GXL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          India Gadgets - Oukitel WP30 Pro 5G Rugged Android Mobile Phone: 12Gb + 512Gb: 108MP + 20MP Night Vision Camera: 6.78" FHD+ + 1.8" OLED Rear Display: Large 11000mAh Battery with 120W Fast Charging
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">13</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">61,500</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹70,000</span>
              <span className="offerPercent">(12% off)</span>
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
      <div className="UltraPremiumProductCard">
        <img className="UltraPremiumProductImage" src="https://m.media-amazon.com/images/I/41OmEIOlJCL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="UltraPremiumProductDetails">
          <h2 className="UltraPremiumProductName">
          Samsung Galaxy S24 5G AI Smartphone (Onyx Black, 8GB, 512GB Storage)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">136</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="mobilePrice">89,999</span>
            <div className="mobileOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="mobilePrice">₹90,999</span>
              <span className="offerPercent">(1% off)</span>
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

export default UltraPremium
