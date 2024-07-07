import React from 'react'
import './Hammers.css';
function Hammers() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Hammers">
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/81qiHzMneKL._SX425_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          BLACK+DECKER BMT126C Compact Hand Tool Kit (126-Piece) for Household DIY & Emergency Maintenance, 6 Months Warranty
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8,152</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">2,114</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹3,125</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://images-na.ssl-images-amazon.com/images/I/31jakRiE7SL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Ionix Hand Tool Set, Tool Set for Home use, Tool kit for Home use, Essential Tool kit for Home, Tool Set for Home use (Screwdriver and Plier Set)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">299</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹899</span>
              <span className="offerPercent">(67% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/41jQpw9ns2L._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          CABLE GALLERY 48 in 1 Socket Wrench Tool 360 Degree Universal Hand Tool Handles up to 135kg of Pressure Universal Wrench.
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">971</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">499</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹599</span>
              <span className="offerPercent">17% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/51rcJOICZ4L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Henglobe 46 In 1 Pcs Tool Kit & Screwdriver And Socket Set Hand Tool Kit Wrench Set Metric Socket Set Extension Bar And Adapter For Bike, Car Repairs - Hex
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">58</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">699</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹1,299</span>
              <span className="offerPercent">(46% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/51rcJOICZ4L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
            Henglobe 46 In 1 Pcs Tool Kit & Screwdriver And Socket Set Hand Tool Kit Wrench Set Metric Socket Set Extension Bar And Adapter For Bike, Car Repairs - Hex
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">58</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">699</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹1,299</span>
              <span className="offerPercent">(46% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/4150uMpqeuL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          DOTCOM 9 Pieces Basic Tool Kit, Home Tool Kit for Women Men Students,Tool Box with Tools Included,Small Tool Kit for DIY,Household Repair
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">18</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">399</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹999</span>
              <span className="offerPercent">(60% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/31TcyacuqzL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Buildskill Adjustable Spanner 6", Easy Wrench & Spanner, Ideal Plumbing Tools, Adjustable Wrench for All Nut Sizes, Rust-Proof Black Phosphate Coating, Lasered Scale & Wide Grip, Universal (Pack of 1)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">923</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">179</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹349</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/61R2-YMF0NL._SX425_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Asian Paints TruCare 6-in-1 Pc Screw Driver Kit With 2 Flat Blades, 2 Phillips Head, 1 Round Poker Bar, Extension Rod| Multi-purpose Tool Set
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,893</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">149</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹499</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/51SXWYDcadL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Bosch 12 Pieces Hand Tool Kit (Blue, Hard case)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">11,843</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">1,379</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹2,500</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/41U80WtP-KL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          BLACK+DECKER BMT126C Compact Hand Tool Kit (126-Piece) for Household DIY & Emergency Maintenance, 6 Months Warranty
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8,152</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">2,114</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹3,125</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/51XDI8sPyTL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          IBELL HT17-30 Hand Tool Kit for Household DIY & Emergency Maintenance (14 Pieces)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">302</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">898</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹1,950</span>
              <span className="offerPercent">(54% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/21NMnWd+wZL._SY300_SX300_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          STANLEY 51-152 Claw Hammer with Steel Shaft for Masonry, Woodwork, Fittings for Home, DIY, Mechanic, Industrial & Professional Use, GREY & BLACK
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">10,747</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">229</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹331</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/71lqa6bYtJL._SX425_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          VAIDUE Adjustable Wrenches, Universal Monkey Spanner Reversible Jaw Pipe Wrench, Multi-Function Plumbing Hand Tools Style C Wrench, Wide Jaw Large Openings Short Shank Wrench Repair Tool
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">45</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">399</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹999</span>
              <span className="offerPercent">(60% off)</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/41gD+oLZF4L._SX342_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          AGRICO TATA Heavy Duty Combination Plier, Wire Cutters, All Purpose Hand Tool (7 inch), Multicolor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,270</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">269</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹305</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/51y9KuLCf9L._SX425_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Asian Paints Adjustable Wrench 8”, Rust Proof Alloy Steel Wrench, Extra Wide for Comfortable Grip, Easy Adjustment of Screws, Fully Hardened for Better Strength & Durability
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">658</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">229</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹299</span>
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
      <div className="HammersProductCard">
        <img className="HammersProductImage" src="https://m.media-amazon.com/images/I/41r4wrHJpKL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HammersProductDetails">
          <h2 className="HammersProductName">
          Asian Paints TruCare 12-in-1 Pcs Combination Jaw Spanners Wrench Set | Carbon Steel with Rust & Corrosion Resistant Chrome Plating & Satin Finish | Multipurpose Combination Tool Kit | IS: 2028:2004
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,367</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HammersPrice">249</span>
            <div className="HammersOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HammersPrice">₹699</span>
              <span className="offerPercent">(64% off)</span>
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

export default Hammers
