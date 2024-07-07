import React from 'react'
import './Product2.css';
function Product2() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product2">
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/6145oWLl1uL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Zara Wood Handicrafts Floating Wood and Iron Shelves Wall Mounted Set of 3 for Bedroom and Livingroom Wall Mounted Corner Side Shelves for Home
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">27</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">1,399</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹1,599</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/31iwu8Wd6FL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          OrganizeMee Metal Large wall mounted shelves,Bluetooth speaker,Wi-Fi camera stand corner floating shelf for living room & bedroom,home decor items plant pot mounting racks[31.5cm X12.5Cm] Qty 1(Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">185</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">473</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹1,299</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41gsSaH03iL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          STAR WORK - 5 Tier Shelf Rack Stand Multipurpose Shelf Display Turn-N-Tube End Table Corner Display Rack Hallway, Living Room, Metal, Easy Assembly, Space Saving, Industrial (Rectangle -5)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">2,451</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹2,599</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/31QRcFIt9DL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          PISSOIR Combo of Multipurpose Corner Shelve and 2 in 1 Soap Dish Tooth Brush Holder Wall Mount Bathroom Accessories 1 Piece of Each
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">749</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹1,499</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/31Qohswhb7L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Dime Store Engineered Wood 3-Tier Floating Rack Shelf for Living Room Corner Shelf Decorative Rack Shelf Organizer | Storage Shelf for Living Room & Bedroom Display Rack for Storage (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">167</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">374</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹999</span>
              <span className="offerPercent">63% off)</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/51dOaIHqEkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Furniture Cafe Wooden Wall Shelves | Corner Hanging Shelf for Living Room Stylish | Zig Zag Home Decor Floating Display Rack Storage Organizer Unique Design with Finish 5 Tiers (Brown Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">11,795</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">890</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹3,000</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41EVQwNitlL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Dime Store 7 Tier Wooden Zig Zag Wall Corner Hanging Shelves for Living Room Stylish | Home Decor Floating Display Rack Storage Organizer (White & Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">232</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">926</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹1,499</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/31iwu8Wd6FL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          OrganizeMee Metal Large wall mounted shelves,Bluetooth speaker,Wi-Fi camera stand corner floating shelf for living room & bedroom,home decor items plant pot mounting racks[31.5cm X12.5Cm] Qty 1(Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">185</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">473</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹1,299</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41fTCbh2KSL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Star Work Standing Floor 4 Tier Rack Wall Shelf For Living Bed Room Home Office| Display Organizer With Utility Storage For Home Décor (H-3.7 Feet|W-2 Feet|D-1 Feet) - Engineered Wood
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">136</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">1,986</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹2,999</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41+DBujmVNL._SY300_SX300_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          Dime Store Set top Box Stand | WiFi Router Holder Wooden Wall Shelves | Setup Box Stand for Home | Wall Mount Stylish WiFi Router Holder TV Cabinet Living Room Furniture
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6,234</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">290</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹698</span>
              <span className="offerPercent">(58% off)</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/417ef8+kAoL._SY300_SX300_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          SB Furniture Solid Sheesham Wood Corner Ladder Shelf for Living Room Wooden Floor Standing Corner 5 Tier Ladder Shelves for Bedroom Decorative Bookcase Floor Standing Shelf for Office | Brown Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">136</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">3,898</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹7,999</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41UO9DicbgL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          BLUEWUD Wudville Braine Engineered Wood Wall Mount Corner Shelf, Display Rack, (6 Square Shelves - Wenge)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,207</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">1,789</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹2,599</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/51f6oqI34GL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          classic shoppe Multipurpose Mini Corner 3-Tier Corner Rack Shelves - Brown Side Corner
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">414</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">599</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹899</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/41Jo9uMzM3L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          WALLZY Wooden Corner Shelf for Living Room Decor and Storage, Multipurpose Side Corner Wall Shelf for Living Room, Bedroom and Kitchen (Set of 2 Floating Wooden Wall Shelves for Home Decor) (Marble)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">123</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">499</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹999</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/31TovBGaioL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          OrganizeMee® Metal Floating Shelf for Wall Set of 3 Floating Metal Shelves (17"+13"+9") | Modern Nordic Design | Wall Storage for Living Room, Bedroom, Kitchen orgnizer (Black Set of 3)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">37</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">894</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹2,849</span>
              <span className="offerPercent">(69% off)</span>
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
      <div className="Product2ProductCard">
        <img className="Product2ProductImage" src="https://m.media-amazon.com/images/I/51xHOAQizqL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product2ProductDetails">
          <h2 className="Product2ProductName">
          APRITO GI Metal Powder Coated Bathroom Shelf/Rack/Bathroom Accessories Matte Black self - Pack of 2 (Black, 15 x 5 inches)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">126</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product2Price">449</span>
            <div className="Product2OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product2Price">₹999</span>
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
      </div>
  );
}

export default Product2
