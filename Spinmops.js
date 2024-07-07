import React from 'react';
import './Spinmops.css';

function Spinmops() {
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Spinmops">
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51+KDXsjjjL._SY300_SX300_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            VOOY Microfiber Feather Duster Bendable with 100 inches Expandable Pole Handle Washable Duster for Hight Cleaning (Pack of 1)       
             </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">1</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">320</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹699</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/31m6frHQGdL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Big Bucket with 2 Microfiber Refills, Floor Cleaning Mop with Bucket, pocha for Floor Cleaning, Mopping Set Spin Mop, Easy Wheels (Blue)         </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">217</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">799</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹1,999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/31VN1XVA8-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            360- Degree Spin Mop Stick Rod with 1 Microfiber Refill | Standing Magic Pocha with Easy Grip Handle for Floor Cleaning Supplies Product for Home, Office (Mop)      </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">167</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">280</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹399</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/614BSL5MO9L._SX425_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Hallstatt 2024 Upgraded Long Handle Microfiber Feather Ceiling Duster For Dust Cleaning Extendable Pole 30-100 Inch For Cleaning High Cobweb Stick High Ceiling Fan - Stainless Steel,Grey        </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">827</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">289</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/418987xxUJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Spotzero by Milton Prime Spin Mop with Big Wheels and Stainless Steel Wringer, Bucket Floor Cleaning and Mopping System, 2 Microfiber Refills     </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">88,796</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">1,398</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹2,999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51TUAkA5ZJL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Fulminare Microfiber Feather Duster Bendable & Extendable Fan Cleaning Duster with 100 inches Expandable Pole Handle Washable Duster for High Ceiling Fans,Window Blinds, Furniture (Standard)     </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">3,205</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">399</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/81UavewbryL._SX425_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Rushwak Multifunctional Screen Brush 2 in 1 Mesh Cleaning Brush & Wiper with Extended Handle Window Cleaning Brush Net Cleaner Double-Sided Window Cleaner Window Mesh Cleaner, Multi Color, Pack of 1       </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">4,658</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">299</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51o9paxAhBL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Chillyfit Broom Holder Wall Mounted, mop Holder for Wall, Broom Stick Holder Wall Mounted Stand, Storage Broomstick Brush Mount Organizer with Hanger Hooks (5 Slot 6 Hooks)- Gray     </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">289</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">377</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹1,999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51LG07DF+YL._SY300_SX300_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Scotch-Brite No-Dust Broom, Long handle, Easy floor cleaning (Multi-use)    </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">35,658</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">288</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹375</span>
                <span className="offerPercent">(23% off)</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/31U7+X0vqIL._SX300_SY300_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Spotzero by Milton Dust Removal Brush General Cleaning Daily Duster | Fleexible Bristles | All Purpose Dusting Brush for Carpet, Keyboard, Home, Hotel and Household - Pack of 1 (Aqua Green)      </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">2,746</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">199</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹225</span>
                <span className="offerPercent">(12% off)</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/418PpRYty1L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Raxon Innovation Stainless Steel Microfiber Floor Cleaning Mop with Removable Washable Cleaning Pad and Integrated Water Mechanism,mop for Cleaning Floor(Multicolour) (Spin Mop)     </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">27</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">649</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹1,999</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51E2TzEoM6L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Scotch-Brite 2-in-1 Bucket Spin Mop (Green, 2 Refills), 4 Pcs    </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">46,092</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">1,089</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹1,800</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/51NkfDTi4-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            OXIOV Microfiber Duster for Cleaning Fan, High Ceiling, Blinds, Furniture, Cars, 1PCS Extendable Feather Duster (Stainless Steel) 30 to 100 Inches, Reusable Bendable Washable    </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">42</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">299</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹799</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/41P-NigAPbL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Scotch-Brite Rubber Heavy Duty Hand gloves for Dishwashing, gardening, kitchen cleaning ( Inner cotton lining for comfort), 1 Pair   </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">33,233</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">129</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹170</span>
                <span className="offerPercent">(24% off)</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/31av8niGOXL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            Gala Double Lip Wiper (Multicolour)  </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">8,056</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">220</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">245</span>
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
        <div className="SpinmopsProductCard">
            <img className="SpinmopsProductImage" src="https://m.media-amazon.com/images/I/41pwLzif59L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
            <div className="SpinmopsProductDetails">
            <h2 className="SpinmopsProductName">
            SHAYONAM Bathroom Cleaning Brush with Wiper 2 in 1 Tiles Cleaning Brush Floor Scrub Bathroom Brush with Long Handle 120° Rotate Bathroom (2IN1 Bathroom Cleaning Brush)     </h2>
            <div className="ratingSection">
                <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
                <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
                <span className="ratings">1,319</span>
            </div>
            <div className="priceSection">
                <span className="priceIcon">₹</span>
                <span className="SpinmopsPrice">299</span>
                <div className="SpinmopsOriginalPrice">
                <span className="mrp">M.R.P.:</span>
                <span className="SpinmopsPrice">₹349</span>
                <span className="offerPercent">(14% off)</span>
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
    
export default Spinmops;