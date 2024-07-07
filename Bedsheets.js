import React from 'react';
import "./Bedsheets.css";

function Bedsheets() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Bedsheets">
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/41d7rWMli-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          Danjor Linens King Size 78"x72" Sheets 200 TC - Including Pillowcases - Deep Pockets -Breathable, Soft, Wrinkle Free Microfiber Bed Sheets - Machine Washable King Bed Sheets (Blue)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">137,297</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">998</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,800</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/513QH5aBYeL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          Stoa Paris Satin Bedsheet for Double Size Bed, Flip The Pillow Silky Soft Flat Bedsheet Set, 2 Pillow Covers for Home & Living Room (Navy Blue)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">139</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">1,499</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹2,299</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/416o6x7AdEL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          Blue Dahlia 100% Cotton Bedsheet Set Double/Queen Size, Premium 300TC-1 Flat Sheet(90"x100") & 2 Pillow Covers(18"x28"), SA 8000, Oeko TEX Certified-Swiss Dot Pale Blue
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,735</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">1,789</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹2,350</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/61JYsNCCyrL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          Amazon Brand � Umi 100 GSM Brushed Micro Fabric Fitted Bedsheet with Flat Sheet and 1 Pillow Cover - Dark Grey
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">11</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">711</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,499</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/71KI4xXGQyL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          BSB HOME Microfiber 144 TC Aspire 2.O Collections Soft Breathable Wrinklefree Floral Printed Double Bedsheets with 2 Regular Size Pillow Covers, Color White & Blue Rose
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,502</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">199</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹999</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/41W4nYVBn-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          NEW LEAF Premium Cotton Elastic Fitted Bedsheets with 2 King Size Pillow Covers Double Bed with All Around Elastic Supersoft Size - 72 King Sizex78+10 inches Grey White Oval Pattren 200 tc - 220 tc
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">287</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">399</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,599</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/61yz0Lzr8BL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          NHD HOME Premium Cotton Flat Double Bedsheets with 2 King Size Pillow Covers Double Bed Breathable Wrinklefree Ultrasoft Supersoft 90x90 Inches, 7X7.5 Feet Floral, Light Green Pink , 200 tc - 220 tc
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">550</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">319</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,299</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/61BNR6B7LSL._SX425_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          BSB HOME 120 TC Double Floral Bedsheet with 2 Pillow Covers | 110 GSM Soft Brushed Microfiber - Breathable & Wrinkle Free - (86 X 88 Inch, Yellow & Grey & Blue)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,319</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">199</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹799</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/51uqHmPL9GS._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          haus & kinder 100% Cotton Bed Sheet for King Size Bed, 1 King Size Bedsheet Cotton (108 x 108 Inches) with 2 Pillow Covers | 186 TC Bedsheet for Double Bed King Size Greek Garden Romance (Yellow)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,168</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">1,299</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹2,599</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/51y0xHiBPeL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          STARNSTYLE Polycotton 220 TC Floral Printed King Size Double Bedsheet with 2 Pillow Covers, (90 x 90 Inches,) Brown
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,003</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">199</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹499</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/51ZPn1yvaoL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          Homefab India 160 TC Stripe Glace Cotton Double BedSheet with 2 Pillow Covers - (90x90 inches) - Dark Green
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">356</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">369</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,199</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/61HtjS3q-6L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          BSB HOME 100% Microfiber bedsheet for Double Bed with 2 Pillow Covers Breathable | Wrinklefree and Softtouch Floral Print Sheet- White Yellow & Blue
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,354</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">199</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹799</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/51Q6Qrh+zGL._SY300_SX300_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          BSB HOME Microfiber 144 TC Football Printed Double Bedsheets with 2 King Size Pillow Cover (90X90 Inches, 7.5x7.5 Feet, Dark Blue and Light Blue) - Aspire Collections, 160tc, Under 200 tc
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8,779</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">199</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹799</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/61E6SNUI-mL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          RajasthaniKart® Pure 100% Cotton Double Bed Sheet with 2 Pillow Covers (Bedsheet for Double Bed Cotton, Blue, Paisley)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">261</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">349</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,499</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/51xqfEMSkdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          BSB HOME 100% Cotton Feel 160 TC Big Flower Printed Double Bedsheets with 2 King Size Pillow Cover, (90X90 Inches, 7x7.5 Feet, Grey & Pink Flower), 160tc, Under 200 tc
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,241</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">349</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,299</span>
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
      <div className="BedsheetsProductCard">
        <img className="BedsheetsProductImage" src="https://m.media-amazon.com/images/I/419Hi6FEOeL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="BedsheetsProductDetails">
          <h2 className="BedsheetsProductName">
          FRESH FROM LOOM Single Size Microfiber Bedsheet Set - Printed, Hypoallergenic, Wrinkle Free with 1 Pillow Covers (60x90 Inches | Beige Green)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,732</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="BedsheetsPrice">356</span>
            <div className="BedsheetsOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="BedsheetsPrice">₹1,299</span>
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
      </div>
  );
}

export default Bedsheets;
