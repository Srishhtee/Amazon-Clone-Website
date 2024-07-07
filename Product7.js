import React from 'react'
import './Product7.css';
function Product7() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product7">
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/41jFS5JfmxL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          OGNIJA Pallet Wooden Single 1 Seater Sofa for Living Room in Walnut Brown Finish with Leaf Green Cushions in Light/Dark Walnut Finish (Modern, Small)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">5,199</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹55,999</span>
              <span className="offerPercent">(91% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51fDg8Za5iL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          ndia Furniture City Teak Wood 2-Person Sofa Settee Sofa Diwan Couch Chaise Lounge For Home And Living Room | Blue Colour
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">15,001</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹29,999</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/41SYIbeD8JL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          TreeeKart Solid Sheesham Wood Sofa One Seater | Wooden Sofa Set 1 Seater | Sofa Couch with Side Magzine Newspaper Holder for Living Room | Single Seater Sofa Set | Cream Cushion,Walnut Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">5,999</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹9,598</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51qlE9p35LL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          DANEWOOD - 1 Seater Sofa Arm Chair | Solid Sheesham Wood, Brown
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">57</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">9,499</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹13,999</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/419CIJ2cR-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          RJKART Sheesham Wood Single Seater Sofa Multipurpose Sofa Chair for Living Room Home and Office (Walnut Brown Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">6,599</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹12,000</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/411i7iu841L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          SMAART CRAAFTS Chang Single Seater Sofa | Wooden Sofa Cum Armchair for Living Room | Cane Couch with White Cushion | Mango Wood, Natural Finish | Customised Upholstry Shade
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">19,999</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹79,999</span>
              <span className="offerPercent">(75% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51P8ZZAVJNL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          Lofty Dreams Recliner Sofa Manual Single Seat Chair In Leatherette With 2 Years Warranty Motion 1 Seater Reclining Couch Modern & Stylish Living Room Recliners Comfy Lumbar Support For Sleep, Grey
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">18,690</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹40,000</span>
              <span className="offerPercent">(53% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/41CFLM9qpsL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          CLOUDZILLA One Seater Sofas for Living Room Furniture Sets |Fabric - Brown|
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">7,599</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹12,499</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/61ZYIwY2wjL._SX425_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          CRAFTCITY Sophisticated, Elegant, Durable & Comfortable Single Seater Sofa for Living Room and Office One Seater (1Seater, White, Wood)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">15,001</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹19,999</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51rRlIuvCXL._SX425_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          COMBAT FURNITURE Sheesham Wood Single Seater Cushioned Sofa with Side Book Storage Wooden 1 Seater Sofa Chair for Living Room Home (Walnut Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">1,399</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹1,789</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/319oregwnwL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          Lavish Craft Versatile Tufted Arm Chair, Royal Velvet Fabric, Unique Stylish Design, Single Seater Sofa for Living Room (Pink)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">9,999</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹18,999</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51wAq+DbyYL._SY300_SX300_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          CLOUDZILLA Wooden Single-Seater Sofa Set for Living Room & Office Velvet Fabric - Red
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">8,599</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹18,999</span>
              <span className="offerPercent">(55% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51KvFP6UnnL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          Antiq Furniture Store 2-Seater Settee Sofa Diwan Couch Chaise Lounge For Home And Living Room|Grey Colour (2-Person Sofa, Teak Wood)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">13,599</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹25,999</span>
              <span className="offerPercent">(48% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/41Jhyke9e1L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          MODERN WAVE Warwick Solid Wood Upholstered Arm Chair Wingback Chair Sofa Bench Sofa Couch High Back Wing Chair Single Seater Chair for Living Room Office Bedroom (Brown Leatherette)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">34</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">15,099</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹24,999</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/41t7EXEATcL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          Lofty Dreams Recliner Sofa Manual Single seat Chair in Leatherette with 5 Years Warranty Motion 1 Seater Reclining Couch Modern & Stylish Living Room settees recliners Comfy Lumbar Support for Sleep
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">17,790</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹36,000</span>
              <span className="offerPercent">(51% off)</span>
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
      <div className="Product7ProductCard">
        <img className="Product7ProductImage" src="https://m.media-amazon.com/images/I/51UraIYY92L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product7ProductDetails">
          <h2 className="Product7ProductName">
          APRODZ Kitarp Sheesham Wood Single Seater Sofa for Living Room with Seat & Back Cushion (Suede Upholestry)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product7Price">7,600</span>
            <div className="Product7OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product7Price">₹15,200</span>
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
      </div>
  );
}

export default Product7
