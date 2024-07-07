import React from 'react'
import './Product1.css';
function Product1() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product1">
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/41PQONGTasL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          BLOO BASKET Legs for Table,Dining Table Leg Metal Industrial Style, H-27 Inch/W-20Inch, Set of 2 (MW Design)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">78</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">3,845</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹4,499</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/41572DwhDfL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Home Centre Diana 6-Seater Dining Table with 4 Chairs and 1 Big Bench (Walnut)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">280</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">19,995</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹59,991</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/518MmHszSZL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Amazon Brand - Solimo Bisseg 4-Seater Solidwood Dining Set with 4 Chairs (Antique Oak Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">31</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">12,879</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹40,000</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/41sdCjr+h6S._SY300_SX300_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Amazon Brand - Solimo Dorado Glass 4 Seater Dining Set (Black) - Glass, 29.92X43.31X29.53 Inch, Steel
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">59</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">14,499</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹30,000</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51VCP9mkHTL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Sheesham Wood 4 Seater Dining Table with Cushion Chair Four Seater Wooden Dining Room Set Dinner Table Furniture for Living Room Home Restaurant (Mahogany)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">7,688</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹29,999</span>
              <span className="offerPercent">(74% off)</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/61LPyX1a6jL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Home furniture Wooden Dining Table Set 4 Seater | Four Seater Dinning Table with 4 Chairs for Home and Restaurants | Dining Room Sets for Home and Restaurants | Dining Set | Natural Teak Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">15,099</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹28,999</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/413noLv5QkL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Woodenio Dining Table 4 Seater with Chairs Set | Dining Table Set | 4 Seater Dining Table Set | Dining Room Set | with 3 Chairs 1 Bench | Dining Table 4 Seater | Honey Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">23</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">11,499</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹39,999</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/91qNLo5eG0L._SX425_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          DecorNation Italiana Solid Wood 4 Seater Dining Room Set for Home, Living Room- Dining Table with Four Cushioned Chairs (White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">160</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">19,949</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹25,000</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/516X0gpg6lL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Adichwal Furniture Solid Sheesham Wood 4 Seater Dining Set Dining Table Set with Cushioned Chairs for Dining Room | Living Room | Home & Office | Hotels Restaurant (4 Seater, Honey E)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">114</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">14,399</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹30,000</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51jcyazWe5L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          ORMEE Sheesham Wood Dining Table Set with Chairs for Living Room Home | Wooden Dining Room Sets Furniture for Hotels & Restaurants - Honey Finish (4 Seater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">37</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">16,999</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹34,999</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51IMHRYrzEL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          WOODBONE 4 Seater Dining Table with Chair || Dining Room Set || Dining Table Set || Sheesham Wood Dining Table 4 Seater || Wooden Dining Table 4 Seater || 4 Seater Walnut
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">9</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">13,999</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹39,999</span>
              <span className="offerPercent">(65% off)</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/41aZLGa9F4L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Nilkamal Stacia Wooden Dining Set | Dining Room | Dining Furniture (4 Seater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">18,599</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹41,800</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51q+RNYCCEL._SX300_SY300_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          MV Furniture Dining Table with Chairs| Dining Room Furniture (4 Seater Dining Set,Mahogany Finish) | Wood Type :- Sheesham Wood
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">17,,999</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹25,999</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51-8RPSOC1L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          The Feel of Wood Sheesham Wood Dining Table Set | Wooden 8-Seating Dining Table with Chair | Dining Room Furnishings | Wooden Dining Table Set
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">27</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">3,999</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹17,899</span>
              <span className="offerPercent">(79% off)</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/41572DwhDfL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Home Centre Diana 6-Seater Dining Table with 4 Chairs and 1 Big Bench (Walnut)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">280</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">19,995</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹59,991</span>
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
      <div className="Product1ProductCard">
        <img className="Product1ProductImage" src="https://m.media-amazon.com/images/I/51lauAIxcuL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product1ProductDetails">
          <h2 className="Product1ProductName">
          Solid Sheesham Wood Dining Table with Chair || Dining Table Set || Dining Table || Dining Room Furniture (Traditional 4)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">158</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product1Price">13,999</span>
            <div className="Product1OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product1Price">₹87,999</span>
              <span className="offerPercent">(84% off)</span>
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

export default Product1
