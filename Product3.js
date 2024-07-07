import React from 'react'
import './Product3.css';
function Product1() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Product3">
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41VyErHD3GL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Home Centre Emily Fabric 3 Seater Polyester Sofa (Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">859</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">16,459</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹3,998</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/71cekUgPFUL._SX425_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          The Sleep Company Luxe Motorised Standard Recliner | Patented SmartGRID Technology | Motorised Single Recliner Sofa | Unique Lumbar Design | Premium Upholstery | Beige
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">86</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">29,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹59,999</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41mbW+o-H2L._SY300_SX300_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Green Soul® | Comfy | Single Seater Recliner Chair with Soft Suede Fabric & Luxuriously Padded Body | Recliner for Relaxing at Home | 3 Years Warranty (Soothing Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">16</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">16,998</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹21,990</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/515GoxAE4cL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          PHIRKCRAFT Solid Sheesham Wood Rocking Chair for Living Room, Resting Arm Chair with Ottoman/Footrest for Indoor, Outdoor, Single Seater Sofa with Stool, Rosewood Legs, Swed Green, Pre-Assembled
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">8</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">13,599</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹28,789</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41Nq9fwiUbL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Nilkamal Sierra Velvet Fabric Manual Recliner | 1 Seater Sofa | Single Sofa Recliner | 1 Seater Chair Sofa | 1 Year Warranty (Finish Color - Brown)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">89</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">16,590</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹47,900</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/51KlY7rpddL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Sofa Architect Alexia 1 Seater Sofa (Beige)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">5,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹10,999</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41RVnq0DqGL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          ONLINETHEKA Chair Armchair Royal Stylish Single Seater Sofa Set Accent Chair in Living Room Lounge Bedroom (Orange Velvet)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">3,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹17,89</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41ewUxddt3L._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          SHRI MINTU'S ART Wooden Single Seater Sofa | 1 Seater Low Height Sofa Chair with Grey Cushion | Solid Wood Sheesham, Honey Finish
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">17</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">5,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹12,670</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/51j6XjGMMdL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          CLOUDZILLA Wooden Single-Seater Sofa Set for Living Room & Office Velvet Fabric - Grey
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">8,599</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹18,999</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/61FSh9dLXPL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          FORESTER FURNITURE Wooden Wing ARM Chair | Wingback Chair for Living Room one Seater Sofa | Luxury Rest Chair- 1 Seater High Density Foam, Seating and Home Decor Furniture
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">13</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">12,225</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹25,999</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/31YR9-ihtbL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Aart Store Wooden Single Seater Sofa (Fabric, Blue)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">7,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹12,899</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/31Q5oQBhomL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          RENEWITURE Sheesham Wood Single Seater Sofa Set with 2 Drawer Wooden Sofa Set for Living Room Home Office (Honey Finish)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">11,940</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹26,000</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/51qlE9p35LL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          DANEWOOD - 1 Seater Sofa Arm Chair | Solid Sheesham Wood, Brown
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">57</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">9,499</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹13,999</span>
              <span className="offerPercent">(32% off)</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/410ciefQUrL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Star Furniture Wooden Wing Chair for Living Room Bedroom High Back Arm Chair Cushioned Lounge Chair Single Seater Sofa Wooden Furniture for Home (Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">12,499</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹25,990</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/41gABpL5uVL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Amazon Brand - Solimo Darius 3-Person Sofa (Fabric, Grey)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">8,999</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹31,000</span>
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
      <div className="Product3ProductCard">
        <img className="Product3ProductImage" src="https://m.media-amazon.com/images/I/510q5rrtLkL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="Product3ProductDetails">
          <h2 className="Product3ProductName">
          Deuba Fabric Marqes Wing Chair For Living Room, Bed Room Velvet Tufted Wing Back Accent Chair, Cushioned Lounge Chair Single Seater Sofa |Luxury Rest Chair Arm Chair Sofa, Grey
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">15</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="Product3Price">11,499</span>
            <div className="Product3OriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="Product3Price">₹17,999</span>
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
      </div>
  );
}

export default Product1
