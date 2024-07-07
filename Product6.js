import React from 'react'
import './Product6.css';
function Product6() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product6">
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/41uJsuQP1jL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Curio Centre Round Cotton Home Swing & Hammock Chair (135 Cm X 57 Cm X 43 Cm, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6,967</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">999</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹3,490</span>
              <span className="offerPercent">(71% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/41Rzm4KOPyL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Curio Centre Cotton Swinging Hammock Hanging Swing Chair/Hammock Swing for Adults & Kids/Swing for Indoor Outdoor, Garden & Patio/Durable Portable Jhula/Swing for Home - Copper
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">749</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">1,199</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹3,999</span>
              <span className="offerPercent">(70% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/617UyLjOhQL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          SpyderCraft Alisha Craft Single Seater Swing Chair with Stand & Cushion Outdoor Indoor Balcony Garden Patio,Powder Coated Frame,UV Protected Wicker,Premium Cushion, Metal
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">41</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">9,999</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹19,999</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/31tcpmkOXyL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          DMosaic Hanging Swing Chair with Cushion & Hook/Color Black for 1 Outdoor/Indoor/Balcony/Garden/Patio (Poly Nylon)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">176</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">9,549</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹19,999</span>
              <span className="offerPercent">(52% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51S0CHxm+xL._SY300_SX300_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Iron Happy Star Outdoor Furniture Double Seater Swing, Beautiful Swing With Powder Coated Stand (Black Swing With Grey Sofa Cushion), 70 Centimeters, 150 Centimeters
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">213</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">22,999</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹34,999</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/61NFc-LMsRL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Halder Jute Handmade Regular Indoor & Outdoor & Living Room D Shape Hanging Swing Chair | Jhula with One Cushion | 1 Iron S Hook | 3M Nylon Rope (Cotton, White, Size:- 70 * 65 * 150 CM)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,546</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">1,449</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹2,999</span>
              <span className="offerPercent">(52% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/41hMYUmDYJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Flying Arrow Rattan Outdoor Furniture Single Seater Swing, Beautiful Swing Without Stand (Golden Swing With Yellow Cushion) (Golden/Yellow), 96 Centimeters, 37 Centimeters
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">82</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">7,499</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹12,999</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51+rJ7lNzhL._SY300_SX300_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Patiofy Hammock Hanging Swing Chair || Swing for Adult & Kids || Swing for Home Balcony Garden|| Jhoola for Living Room for Adults || Jhula for Adults || Without Accessories Zula (Off-White, Cotton)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">26</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">850</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹5,999</span>
              <span className="offerPercent">(86% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51b300vBSLL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Patiofy D Shape Swing Chair/Swing for Adults & Kids/Swing for Balcony/Swing Chair for Adults for Home/Jhula for Adults/Jhoola/Swing for Indoor/Includes Hanging Kit -Black
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">1,033</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹5,999</span>
              <span className="offerPercent">(83% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/511q1mFvQeL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Swingzy Soft Leather Velvet Hanging Swing Chair/Swing for Adult/Swing for Indoor & Outdoor/Swing Chair for Adults for Home, 200 Kgs Weight Capacity (Blue, Free Hanging Accessories, Cotton)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,179</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">1,749</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹6,000</span>
              <span className="offerPercent">(71% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/61vwTMc3mZL._SX425_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Prime Pigeon Hammock Swing Chair Without Stand For Home, Hanging Swings For Indoor, Outdoor, Home, Patio, Yard, Balcony, Garden (White/Yellow)(Rattan,Poly Nylon), 94.5 Centimeters, 6.6 Centimeters
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">224</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">399</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹789</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51r3Y3qadkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Patiofy Swing for Adults & Kids/Swing for Balcony/Swing Chair for Adults for Home/Cotton D Shape Wooden Swing/Jhula for Adults/Jhoola/Swing for Indoor/Includes Hanging Kit & Red Cushion (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">1,599</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹5,999</span>
              <span className="offerPercent">(73% off)</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51JFlD9ywnL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          KGN GRAMUDYOG Bamboo Rattan Cane Hammock Swing Chair with Seating Cushion
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">19</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">2,400</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹3,400</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51NuwU8kBLL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          Patiofy Rectangle Shape Swing/Swing For Balcony/Swing Chair For Adults For Home/Hammock Swing For Adults/Jhoola Jhula W/ Red Square Cushion & Hanging Kit- White-Polyester,91 Cm,66 Cm,156 Cm
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">862</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">2,639</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹5,999</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/51sI7NRxx0L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          ABS MODERN CRAFTS AND LANDSCAPING Single Seater Hammock Swing Chair with Stand and Cushion for Patio Balcony Garden Terrace Living Room Relaxing Chair|Jhula (Black-A)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">10</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">10,500</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹19,999</span>
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
      <div className="Product6ProductCard">
        <img className="Product6ProductImage" src="https://m.media-amazon.com/images/I/41mIhxfj3TL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product6ProductDetails">
          <h2 className="Product6ProductName">
          IRA WITH WORD DWELL IN COMFORT Brand IN COMFORT Rattan Modern Swing Chair
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">39</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product6Price">16,492</span>
            <div className="Product6OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product6Price">₹20,000</span>
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
      </div>
  );
}

export default Product6
