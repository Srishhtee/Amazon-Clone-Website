import React from 'react';
import "./Tshirts.css";

function Tshirts() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Tshirts">
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/61YmS1MPP+L._SX679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Men Slim fit T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">769</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,399</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/61pdFolGlmL._SX522_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Men T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">934</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,699</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/71tK7FUJqoL._SX679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Men's Regular Fit T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">123</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">944</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹2,099</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/81WzIbilc9L._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Lymio Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans for Men (Jeans-06-07-08)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">83</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">749</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹4,599</span>
              <span className="offerPercent">(85% off)</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/51iCFSZpOQL._SX679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Regular Fit Solid Cotton Round Neck Women's T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">658</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,399</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/51zKKFBO37L._SX679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Women's Crew Neck Solid T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">421</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹899</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/71M5Y9eocIL._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          AMERICAN CREW Men's Regular Fit Polos
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8,883</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">795</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,499</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/61a0R2f3rmL._SX679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Men's Printed T-Shirt with Hood
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">10</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">1,270</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,999</span>
              <span className="offerPercent">(36% off)</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/612Z4GyWYyL._SX522_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Pepe Jeans Women's Oversized Fit T-Shirt
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">87</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">875</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,599</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/61DnDAP-r3L._SX522_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Symbol Premium Men's Slim Fit Stretch Jeans (All Day Comfort)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">12</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">1,899</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹3,599</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/71cuWY2k9KL._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Jack & Jones Men Jeans
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">13</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">1,649</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹3,299</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/7108v-3qxLL._SX522_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          AKA CHIC Women Boot Cut High Rise Stretchable Denim Jeans
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,281</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">999</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹2,399</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/71TLIraRESL._SX522_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Amazon Brand - Symbol Women's Cotton Stretch Regular Fit T-Shirt (Pack of 2)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">27,953</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">499</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹798</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/61mQibjz7FL._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          KOTTY Women High Rise Relaxed Fit Cotton Lycra Blend Ankle Length Jeans
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,208</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">467</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,899</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/51TkN99EBGL._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          Wear Your Opinion Womens Premium Pique Polo Collar Neck T-Shirt (Design: Tipped Polo)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">63</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">499</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,499</span>
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
      <div className="TshirtsProductCard">
        <img className="TshirtsProductImage" src="https://m.media-amazon.com/images/I/71ICU5KF8wL._SY679_.jpg" alt=""/>
        <div className="TshirtsProductDetails">
          <h2 className="TshirtsProductName">
          KOTTY Women's high Rise Bootcut Solid Jeans
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="TshirtsPrice">529</span>
            <div className="TshirtsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="TshirtsPrice">₹1,999</span>
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
      </div>
  );
}

export default Tshirts;