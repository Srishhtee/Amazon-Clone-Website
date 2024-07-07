import React from 'react'
import './Product4.css';
function Product4() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product4">
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/41sj7STy9+L._SY300_SX300_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          Amazon Brand - Solimo Premium Faux Leather Bean Bag Filled With Beans | Capacity: Upto 6' Height , 100 Kg Weight | 2Xl | Purple
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,372</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,489</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹6,000</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/41+XdUvJfHL._SY300_SX300_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          GIGLICK Suede - Bean Bag With Beans Filled, Ready To Use Bean Bags, Bean Bag Chair, Much Comfortable To Other Bean Bags (6 Months Warranty) Color- (Xxxxl, Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">95</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,599</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹4,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/412EaWOmYKL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          LABEL NJ Bean Bag Cover (Without Beans) Single Color PIPEIN Original Faux Leather for Home Decor Bean Bag Ideal for Office and Home
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">72</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">549</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹1,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/31jOnk7CD+L._SY300_SX300_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          LABEL NJ Bean Bag Cover (Without Beans) Single Color Original Faux Leather for Home Decor Bean Bag Ideal for Office and Home (XL, Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">499</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹1,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/61OE7NG5siL._SX425_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          FUSION WORLD Brand XXXL Bean Bag Without Beans, Bean Bag with Cushion and Footrest | Bin Bag | Original Leatherette (Cream Orange, Bean Bag Cover, XXXL)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,099</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹3,998</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/31wVHAB9n8L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          LABEL NJ Bean Bag Cover (Without Beans) Single Color Original Faux Leather for Home Decor Bean Bag Ideal for Office and Home001 (3XL, Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">799</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹1,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/41cjQPMJGpL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          LEXAVI Brand - 4XL Luxury Bean Bag Without Beans Fillers (Only Cover) | Original Faux Leatherette Beanbag with Ultra Soft Comfort & Single Seating – (XXXXL - Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">999</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹2,599</span>
              <span className="offerPercent">(62% off)</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/81Ed3G-hWSL._SX425_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          Mollismoons Couch Pink Fur Bean Bag Single Sofa Soft Chair Supper Soft Bean Bag for Home Bean Bags Pink Color Bean Bag Chair Luxury Bean Bags (XXXL for Adult, Filled Bean Bag with Beans)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">32</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">5,000</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹6,000</span>
              <span className="offerPercent">(10% off)</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/41dEIaEACXL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          TRUE 2 F - XXXL Bean Bag Cover Single(Black) Without Beans
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">472</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">799</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹1,499</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/414jkBTJ0lL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          Amazon Brand - Solimo Premium Faux Leather Bean Bag Filled With Beans | Capacity: Upto 6' Height , 100 Kg Weight | 2Xl | Purple
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">,427</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">839</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹1,299</span>
              <span className="offerPercent">(35% off)</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/51mDK-sUxUL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          GIGLICK- Classic Soft Vegan Leather Bean Bag Chair with Beans Filled I 6 Months Warranty (Ready to Use) Color (Grey, XXXL)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">6</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,499</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹3,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/51OqdMKhRZL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          ComfyBean Bag with Beans Filled XXXXL Bean Bag with Free Cushion and Footrest - Official : PrintZen Combo (Matching Color : Printed, Yah I am Listening - Black Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">636</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,979</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹3,499</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/51oKcBeyvZL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          Mollismoons Premium Fur Bean Bag Sofa Bed Bean Bags Luxury and Attractive Design Bean Bag Chair for Living Room Bean Bags (Sofa Bean Bag Without Beans, Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">55</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">3,500</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹8,000</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/41D4z-51Y3L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          TUSA LIFESTYLE Bean Bag Cover with Footrest and Cushion Only (Without Filling) Faux Leather Sturdy Construction for Adults, Teenagers, Kids – Indoor Use – Solid, Color-Others (Brown New)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">43</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,489</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹6,000</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/511yJEZ5BrL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          Bhailu Art New Tie Dye Rainbow Design Furry Bean Bag Chair. Premium and Luxurious Fur Bean Bag Without Beans Only Cover XXXL (Multicolour)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">80</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">1,359</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹3,999</span>
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
      <div className="Product4ProductCard">
        <img className="Product4ProductImage" src="https://m.media-amazon.com/images/I/410ZTxIVbpL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product4ProductDetails">
          <h2 className="Product4ProductName">
          GIGLICK 4Xl Superior-Grade Faux Leather Filled With Beans Bean Bag With Footrest&Cushion Adult Size Xxxxl Bean Bag Capactity-Upto 6Feet,Cream
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">224</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product4Price">2,299</span>
            <div className="Product4OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product4Price">₹4,999</span>
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
      </div>
  );
}

export default Product4
