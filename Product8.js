import React from 'react'
import './Product8.css';
function Product8() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product8">
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41cCy2LKjZL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          USHA SHRIRAM 5 Tier Zig Zag Corner Wall Shelf for Living Room | Wall Mounted Shelf Engineered Wood | Durable & Sturdy Wall Shelf | Teak Natural | 1 Piece
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">1,339</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹3,995</span>
              <span className="offerPercent">(66% off)</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41EsQ0qA9eL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Torche, Wall Mount Shelves for Corner | Wall Shelves for Corner | Wall Mount Corner Shelf | Wall Mounted Shelf for Home Décor (Corner-Dark Oak)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">87</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">1,099</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹2,999</span>
              <span className="offerPercent">(63% off)</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51OKSbFzsJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          ODEJIA Wall Shelf Set of 3, Floating Corner Shelves for Wall, Rustic Wood Wall Storage Display Shelves for Living Room Bedroom Bathroom Kitchen
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">1,424</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹2,590</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51Lm03OPqQS._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          OrganizeMee Metal Small Wall Mounted Shelves,Bluetooth Speaker,Wi-Fi Camera Stand Corner Floating Shelf for Living Room & Bedroom,Home Decor Items Plant Pot mounting Racks (White Set of 2)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">185</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">741</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹2,999</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41H-cTWpriL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Dime Store Engineered Wood 3-Tier Floating Rack Shelf for Living Room Corner Shelf Decorative Rack Shelf Organizer | Storage Shelf for Living Room & Bedroom Display Rack for Storage (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">168</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">374</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹999</span>
              <span className="offerPercent">(63% off)</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51dOaIHqEkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Furniture Cafe Wooden Wall Shelves | Corner Hanging Shelf for Living Room Stylish | Zig Zag Home Decor Floating Display Rack Storage Organizer Unique Design with Finish 5 Tiers (Brown Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">11,798</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹890</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41EVQwNitlL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Dime Store 7 Tier Wooden Zig Zag Wall Corner Hanging Shelves for Living Room Stylish | Home Decor Floating Display Rack Storage Organizer (White & Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">232</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">926</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹1,499</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41-GK3aONhL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Device Bas with BROWN ART SHOPPEE Floating Shelves, Corner 3 Tiers Small Wall Mounted Corner Shelves Mdf Engineered Wood Board Display Decoration Storage Shelf For Living Room Bedroom (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">186</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">464</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹999</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51He9lfX3SL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          MURALICRAFT Sheesham Wood Floor Standing Shelf | Corner Shelf For Living Room | Wooden Corner 5 Tier Ladder Shelves For Bedroom | Decorative Corner Home Decor Bookcase | Corner Shelf For Office, Brown
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">135</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">4,498</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹9.999</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/513C-iChRcL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          Home Sparkle Set of 2 Corner Wall Shelves for Home Decor | Engineered Wood Floating | 2 Tier Radial | Wall Mounted Floating Shelf (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">97</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">659</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹1,469</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41Wo76iFRAL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          WIQOWEG 5-Tier Corner Shelves, Floating Corner Shelf, Wall Organizer, Easy-to-Assemble Tiered Wall Mount Shelves for Bedrooms, Bathroom Shelves, Kitchen, Offices, & Living Rooms (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">569</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹1,699</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51gHJ8OH3-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          MAYRA Hexagon Wall Shelves Wooden Shelf Home Decor Items Rack for Living Room, Bedroom, Kitchen Corner, Office and More (Set of 6 | Size- Standard (White,Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">1,199</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹2,599</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51IEovHOJWL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          MetalTouch Iron & Wooden Wall Corner Rack 3 Shelf, Shelves, Mount for Office & Home Decor Product
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">115</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">1,049</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹1,499</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/31hxsZooOHL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          BLUEWUD Aaron Engineered Wood Wall Decor Floating Shelf Display Rack Decorative Hall Décor for Living Room Home Furniture (Wenge)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">94</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">679</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹679</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/41CG-Kle5BL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          DDS Dream Decor Shoppee Wooden Corner Floating Shelves, 3 Tiers Small Beautiful Wall Mounted Corner Shelves Engineered Wood Board Display Decoration Storage Shelf for Living Room Bedroom
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">57</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">495</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹799</span>
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
      <div className="Product8ProductCard">
        <img className="Product8ProductImage" src="https://m.media-amazon.com/images/I/51En88okuqL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product8ProductDetails">
          <h2 className="Product8ProductName">
          WooDinto 8x8 Living Room Bedroom Wall Corner Bookshelf Wood Shelf Storage Rack Bathroom Kitchen Storage Shelf Wall Corner (4 - Tiers, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">78</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product8Price">799</span>
            <div className="Product8OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product8Price">₹1,399</span>
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

export default Product8
