import React from 'react'
import './Product9.css';
function Product9() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product9">
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/411zXf5xiEL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Amazon Brand - Solimo Premium Faux Leather Bean Bag Combo with Footrest, Filled with Beans | Multifunctional Pocket| Capacity: Upto 6 Ft 3 in Height, 120 KG Weight | 3XL | Black and Brown
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">387</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">2,519</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹6,500</span>
              <span className="offerPercent">(61% off)</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/31-3c0nxHZL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          KAM'S LIEU XXXL Non-Filled Chair Sofa Bean Bag N Footrest Combo Set Cover Only (Beans Filling Required) (Faux Leather) (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">999</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹1,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51uB-OukQGL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          PAGARIA Premium Faux Leather 4XL Filled with Beans || Bean Bag with Footrest and Cushion XXXXL Adult Size Bean Bag | Capactity- Upto 6feet and 150KG (XXXXL, Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">45</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,799</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹4,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/4104rbZMEML._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Biggie Bean Bag with Beans Filled XXXL Bean Bag Sofa with Free Cushion and Footrest - Official : RelaxAire Combo (Matching Color : Regular, Dark-Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,749</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹4,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51RlNaM9iuL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          ComfyBean Bag with Beans Filled 4XL Bean Bag with Free Cushion and Footrest - Official : BeanCanvas Combo (Matching Color : Printed, e=mc2 Brown Cream)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">636</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,979</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51KjcKjj1XL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          ComfyBean Bag with Beans Filled XXXL Bean Bag with Free Cushion and Round Footrest - Official : Relaxation Range (Color : Maroon)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">24</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,822</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹4,200</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51lG6GAe5BL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          ComfyBean Bag with Beans Filled 4XL Bean Bag with Free Cushion and Footrest - Official : CustomCoziness Combo (Matching Color : Printed, Sports - H - Black Green), Faux Leather
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">131</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,979</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/31Pz+SPj9SL._SY300_SX300_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          FUSION WORLD Brand Filled Ready to Use Chair Sofa Bean Bag & Footrest Combo Set with Beans Faux Leather (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">2,199</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/411vLLwdIzL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          LEXAVI Faux Leather Brand - Xxxl Combo Bean Bag With Footstool Cover/Without Beans - (Yellow)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">64</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,169</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹2,099</span>
              <span className="offerPercent">(44% off)</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51X3v3P+NGL._SY300_SX300_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Comfybean Bag With Beans Filled 4Xl Bean Bag Sofa With Free Cushion And Footrest - Official : Snugsack Combo (Matching Color : Regular, Indigo) - Faux Leather
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">350</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,879</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/41nBIqF-fuL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Biggie Bean Bag Faux Leather With Beans Filled 4Xl Bean Bag With Free Cushion And Footrest - Official : Beanchic Combo (Matching Color : Printed, Yah I Am Listening - Black Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">10</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,999</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,999</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/419W1+YAKpL._SY300_SX300_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Amazon Brand - Solimo Premium Faux Leather Bean Bag Combo with Footrest & Cushion, Filled with Beans | Multifunctional Pocket| Capacity: Upto 6 Ft Height, 100 KG Weight | 2XL | Tan
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">12</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">2,119</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹5,900</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/41sOociXo1L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Biggie Bean Bag with Beans Filled XXXXL Bean Bag- Full Printed Bean Bag Sofa with Cushion and Footrest - Official : Oreka Home Bean Bag - Comfort Level, Standard (Theme : Allure Alchemy) Faux Leather
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">12</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">2,699</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹7,000</span>
              <span className="offerPercent">(61% off)</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/41SvzZM4l-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          LEXAVI Brand - Faux Super Leather XXXL Combo Beanbag with Foot-Stool prefilled with High Density Original Quality Beans (Green with Yellow Piping)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">1,299</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹2,699</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51+ZKEWFKzL._SY300_SX300_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          Amazon Brand Solimo Premium Faux Leather Bean Bag Combo with Footrest & Cushion, Filled with Beans | Multifunctional Pocket| Capacity: Upto 6 Ft 3 In Height, 120 KG Weight|3XL|Black with Pink Piping
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">16</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">2,209</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹6,000</span>
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
      <div className="Product9ProductCard">
        <img className="Product9ProductImage" src="https://m.media-amazon.com/images/I/51FYXpH6s7L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product9ProductDetails">
          <h2 className="Product9ProductName">
          ink craft Bean Bag Cover with Relaxing Footrest and Cushion (Without Filling) 3 Pcs Combo Set Leatherette Bean Bag Cover for Comfortable and Cozy Seating (Maroon & Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">9</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product9Price">989</span>
            <div className="Product9OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product9Price">₹1,499</span>
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
      </div>
  );
}

export default Product9
