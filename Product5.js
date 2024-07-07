import React from 'react'
import './Product5.css';
function Product5() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product5">
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/812pr3B12zL._SX425_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Home Centre Emily Fabric 3 Seater Polyester Sofa (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">859</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">16,459</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹35,990</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/5196DH+uO2L._SY300_SX300_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Amazon Brand - Solimo Tulip Leatherette 3 Seater Sofa (Grey) 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">439</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">15,999</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹50,000</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/31IYBCL-YgL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          PRIYANSHU WOOD CRAFT Wooden Solid Sheesham Wood 3 Seater Sofa Set with Cream Cushions for Living Room Wooden Sofa with Side Holder for Home (Mahogany Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">18</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">14,399</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹24,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/4158mIsd-ML._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          FRESH UP 3 Seater Sofa Cum Bed 72x44x10 Inches Polycotton Fabric Washable Cover with 3 Cushions (Blue-Green | 3 Sits and 2 Sleeps | Low Floor Seating) 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">49</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">8,099</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹16,699</span>
              <span className="offerPercent">(52%off)</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/51Uuop-pptL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Mamta Furniture Wooden Solid Sheesham Wood 3 Seater Sofa Set with Cushions (3 Seater Sofa, Walnut Finish 2) 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">417</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">15,001</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹19,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/314SrMShSJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          DECOR VILLAGE Sofa Cum Bed | Single Seater | Sofa Bed 3 X 6 Feet, Folding Bed Cum Sofa with Cushion Jute Fabric for Living Room - Black
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">33</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">3,799</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹8,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41QsyLlRsZL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          NEW MAMTA FURNITURE Solid Sheesham Wood Sofa Set 3 Seater with Attached 2 Shelf Drawers, Cushions for Living Room, Bedroom, Office, Hotel & Lounge (Honey Finish), Brown, 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">18,952</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹28,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41v6zHtQKjL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Shreya Decor Wooden 2-Person Sofa Set For Living Room | Two Seater Sofa With Side Magzine & Newspaper Holder For Office & Lounge | Sheesham Wood, (Walnut 3)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">44</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">9,999</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹29,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41L9Wo+lnOL._SX300_SY300_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Amazon Brand - Solimo Tulip Leatherette 3 Seater Sofa (Grey) 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">439</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">15,999</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹50,000</span>
              <span className="offerPercent">(68%off)</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41imTtZCeBL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          LNW - LAXMI NATURE WOOD Wooden Sofa Single Seater+Two+Three Sofa Set for Living Room agzine & Newspaper Holder for Office & Lounge | Sandshell Beige (Two Seater)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">15,999</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹20,000</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41N70R1i+kL._SY300_SX300_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Sleepyhead Kiki - 3 Seater Sofa (Fabric, Lava Orange) 3-Person Sofa
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,982</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">17,099</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹25,599</span>
              <span className="offerPercent">(28% off)</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41nDkWDujdL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          DANEWOOD - 3-Person Sofa Set For Living Room, Drawing Room & Office Lounge|Capacity - Three Seater, Sheesham Wood, Dark Brown Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">57</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">17.499</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹26,533</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41GkH1pe47L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          M.R.J. Crafts 3 Seater Strips Chesterfield Sofa Living Room Office Guest Room Velvet Only Legs Assembly Required.(Purple)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">17,999</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹37,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/41JtJkhPIwL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          M.R.J. Crafts - 3 Seater Chesterfield Modern Velvet Sofa Furniture for Living Room Guest Room Hotels (Teal Green)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">19,898</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹39,999</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/418ydwuUUdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Royal Interiors 3 Seater Metal Sofa Cum Bed with Hydraulic Storage | Single Size Sofa Cuma Bed | 3 Seater Sofa Set, Metal Sofa Set for Living Room (Matte Black Finish with Red Cushion)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">24,724</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹42,449</span>
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
      <div className="Product5ProductCard">
        <img className="Product5ProductImage" src="https://m.media-amazon.com/images/I/21eJPZp6qpL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product5ProductDetails">
          <h2 className="Product5ProductName">
          Nikunj Wooden Art Solid Sheesham Wood 3 Seater Sofa Set with Cushions Wooden Single Sofa for Living Room Home Hall Office (Teak Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product5Price">14,402</span>
            <div className="Product5OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product5Price">₹23,099</span>
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
      </div>
  );
}

export default Product5
