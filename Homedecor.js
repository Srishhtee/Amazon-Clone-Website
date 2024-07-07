import React from 'react';
import "./Homedecor.css";

function Homedecor() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Homedecor">
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41qnxD9g+uL._SY300_SX300_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Glimpse Homes Wooden Chain | Home Decor Accent Piece | Living Room Decor | Centre Console Table Decor (3 Knots - Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">13</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">898</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹1,199</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41VSAlsce4L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          amazon basics Modern Elite Swan Pair Ceramic Art Figure | Beautiful Home Decor (Set of 2, White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">9</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">1,124</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹3,199</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41yT-W7omfL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          amazon basics Passionate Lover Hugging Couple Figure | Beautiful Ceramic Home Decor Statue (Set of 2, Red & Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">682</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹1,599</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41zRtPlBnkL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          amazon basics Thai Style Elephant Figurines Mother & Child Elephant Fengshui Resin Sculptures for Home Decor Ornament (Set of 2, Brown and Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">564</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹1,899</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/518XsQOTduL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants Small Indoor Potted Houseplants, Small Faux Plants for Home Decor Bathroom Office Farmhouse (Set 0F 8)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7,945</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">299</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹999</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/51EDukfUBtL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          The Decor Company Metal Wall Clock-Floral Design With Silent Sweep Machine-Ideal Home Decor Items & Wall Decoration Items For Living Room/Bedroom/Dining Hall/Office/Cafes/Hotels-Analog,94 Cm,Blue
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">61</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">1,399</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹3,999</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41da9hddRxL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Unique Craft Moon Shaped Metal Flower Vases for Home Decor Item for Living Room Gold Finish Flower Pots for Home Decoration
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">265</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹499</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/4176Z641npL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Ancient Shoppee Wooden 1 Glass Test Tube Home Decor Planter Modern Flower Vase with Wood Stand Plant Propagation
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">95</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">129</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹299</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/4112quwBWKL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          zart Deer Showpiece for Home Decor Showpiece | Hiran Statue for Home Decorative Item & Office Table Decor Showpiece (Set of 2) (Black n)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">863</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">699</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹3,199</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41th6JhLVHL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          zart Bulldog Standing Tray Showpiece Home Decor Showpiece, Living Room Decor Showpiece,Kitchen, Office, Gifts Item, Table Decoration (Resin, Green).
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">338</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">1,394</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹3,199</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://images-na.ssl-images-amazon.com/images/I/319khoahk4L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Xtore® Home Decor Lucky Deer Family Matte Finish Ceramic Figures - (Set of 3, Matte Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7,208</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">899</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹1,999</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41dvMxrGTYL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          FUNTEREST Gold Metal Wall Decor Leaf Wall Hanging Decoration, Set of 3 Metal Wall Art Home Decor for Living Room Office Bedroom Hotel
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">574</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">940</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹3,999</span>
              <span className="offerPercent">(76% off)</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/51W9kPpQxKL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Decazone Macrame Indoor Wall Hanging Shelf Chic Decor Wood Floating Boho Shelves with Wooden Dowel Hand Woven Bohemian Decor for Apartment Dorm Bedroom Living Room Nursery Beige 60 x 30cm
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,541</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">345</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹899</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/51N2tBQLJWL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          TIED RIBBONS Resin Buddha Monk Statues, Small, Multicolour, Set of 4
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">12,831</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">199</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹899</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/410Wky1v1TL._SX342_SY445_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          F N Wood Italian LED Lamp With Home Decor Corner Design Yellow Drum Shade, Bulb, Wiring, Holder
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">23</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">1,490</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹4,200</span>
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
      <div className="HomedecorProductCard">
        <img className="HomedecorProductImage" src="https://m.media-amazon.com/images/I/41F0Hq2F2LL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="HomedecorProductDetails">
          <h2 className="HomedecorProductName">
          Artvibes Designer Elephant Wooden Wall Hanging For Home Decor | Hamsa Hand Decoration for Livingroom | Modern Artworks Items | Peace Charm Door Accent Decorative Hangings (WH_8506N)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">231</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="HomedecorPrice">199</span>
            <div className="HomedecorOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="HomedecorPrice">₹999</span>
              <span className="offerPercent">(80% off)</span>
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

export default Homedecor;