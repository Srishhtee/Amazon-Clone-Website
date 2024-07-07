import React from 'react'
import './Bathroom.css';
function Bathroom() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Bathroom">
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/71xP3hOMLwL._SX425_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          U-S-F BATH ACCESSORIES 304 Stainless Steel Towel Rack Hanger and Holder for Bathroom | Bathroom Accessories (Antique, 24 Inches, Pack of 1) (Round)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">26</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">2,943</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹9,999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/51y4pKd85fL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          BINSBARRY Self-Adhesive Multipurpose Wall Mounted Bathroom Shelf and Rack for Bathroom and Kitchen, Space Saving Bathroom Organizer Shelf, Punch Free Wall Shelves, Wall Stand (Pack of 2, Gold Shelf)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">187</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">899</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/51iyEROOCML._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Plantex Self Adhesive Bathroom Shelf | Kitchen Storage Hack with Magic Sticker for Wife | Bathroom Organizer (Black, Powder Coated)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,498</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">398</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹880</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/513xN3dsMWL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Oslen Pack of 2 Self-Adhesive Plastic Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware and Accessories, Storage Racks Kitchen Bathroom Accessories Rack Shelf
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">299</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹888</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41L5HXCXkxL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Gloxy Stainless Steel Folding 24 Inches Towel Rack for Bathroom - Durable, Stylish, Space-Saving Towel Holder & Stand - Perfect Bathroom Accessories Set for Home (24 Inch, Chrome, Foldable)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">224</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">1,129</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹2,599</span>
              <span className="offerPercent">(57% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41x389wiQfL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          iSTAR Plastic 3Pcs Beautiful Leaf Shape Double Layer Soap Dish Case Holder Bathroom Accessories (Soap Dish - Set of 3) (Pink, Blue, Green)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">701</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">199</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹899</span>
              <span className="offerPercent">(78% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41NF0PCtaRL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          GLOXY ENTERPRISE Stainless Steel 3 Layer Multipurpose Organizer Shelf for Bathroom with Double Soap Dish and Toothbrush Holder Soap Holder for Bathroom Accessories (15 x 5 x 19 inch, Mirror Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">726</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">1,309</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹3,999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/419O5UWCXFS._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Morivahomes Multipurpose Wall Mount Bathroom Shelf And Rack For Home And Kitchen. Self Adhesive Sticker Support Without Drilling. (4 Bathroom Shelf, Chrome,Acrylic)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,543</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">298</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,599</span>
              <span className="offerPercent">(81% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41lAbfbab0L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Satpurush Plastic Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware & Accessories, Storage Racks (3 Pack, Bath Shelf With Soap Dish & 4 Hook) White
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">534</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">469</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,599</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41apUrriXRL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          VIVNITS Magic Sticker Series Self-Adhesive Square Plastic Towel Hanger for Bathroom Napkin Holder for Wash Basin White (Full Ring)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">39</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">398</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/51iY1JkRaoL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          LivesUp Stainless Steel Multi-use Rack, Bathroom Shelf, Soap Stand/Tumbler Holder/Toothbrush Holder/Bathroom Stand/Bathroom Rack/Bathroom Accessories (Number of Shelves - 2, Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">947</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">949</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹2,999</span>
              <span className="offerPercent">(68% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41N3uGCOBmL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          GRIVAN Stainless Steel 3 Layer/3 Tier Multipurpose Bathroom Shelf/Rack/Organizer/Stand/Holder with Double Soap Dish and Toothbrush Holder Tumbler Bathroom Accessories
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">634</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">1,309</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹3,999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/51Z3V8kzbkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Arawaza Soap Holder 4 Pack Soap Holder for Bathroom, Soap Dish, Soap Stand for Bathroom, Soap Holder for Wall, soap case for Kitchen, Bathroom Accessories, Clearance Store, Kitchen Items, Plastic
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">715</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">227</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,999</span>
              <span className="offerPercent">(89% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/51Dg9tk+pCL._SY300_SX300_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Fulminare Self-Adhesive Aluminium Bathroom Corner Shelf Rack Bathroom Corner Organizer Stand Bathroom Organisers Storage Racks Bathroom Shelf/Shelves Corner (Bishop)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,140</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">1,399</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,999</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41aE0+-bRmL._SY300_SX300_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Satpurush Plastic Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware And Accessories, Storage Racks (1 Shelf), Multicolor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">158</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">299</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,299</span>
              <span className="offerPercent">(77% off)</span>
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
        <div className="BathroomProductCard">
        <img className="BathroomProductImage" src="https://m.media-amazon.com/images/I/41p+zxVq+QS._SY300_SX300_.jpg" alt=""/>
        <div className="BathroomProductDetails">
          <h2 className="BathroomProductName">
          Plantex Bathroom Organizer - GI Steel Multipurpose Bathroom Shelf for Wall/Bathroom Accessories(Black-15 Inches)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,037</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BathroomPrice">469</span>
            <div className="BathroomOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BathroomPrice">₹1,628</span>
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
    </div>
    );
}

export default Bathroom