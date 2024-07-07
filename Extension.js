import React from 'react'
import './Extension.css';
function Extension() {
    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        return formattedDate;
      };
  return (
    <div className="Extension">
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/41H-cTWpriL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Super Maxx Power Saver Gold Electricity Saving Device (ISI) 40% Save Upto Electricity Ð Pack of 1 (POWER-SAVING-53ZXA33)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">7</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">399</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹789</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31g3I1shcUL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          BonKaso 3-Socket Power Strip with Dual USB - 3AC Sockets, 2 USB, 1.5m Cord Length, 1500 W, Compact 26cm Size, Ultra-Light 500g (White & Orange)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">14</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">649</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹1,699</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/21qKn0ChHNL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          GM 3060 E-Book 4 + 1 Power Strip Red & White Color 250 Volts with Master Switch, Indicator, Safety Shutter & 4 International sockets, Extension Cord for Home Appliances
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">59,522</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">448</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹650</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/41gg-4gu93L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Portronics Power Plate 7 with 6 USB Port + 8 Power Sockets Smart Electric Universal Extension Board Multi Plug with 2500W, 3Mtr Cord Length, 2.1A USB Output(Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">20,040</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">830</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹1,999</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31OXarQ3rnL._QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Super-Maxx-Power-Saver-Gold-Electricity-Saving-Device-ISI-Save-Upt- 40%-Electricity-Bill-Everyday-Pack of 1-8-Pcs-Extra-Wide (Red)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4,478</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">389</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹999</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/41qJk6e907L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Portronics Power Plate 5 1500W Power Converter with USB Charger & Mobile Holder 3AC Socket + 3USB Ports, 1.5 m Cord Length (Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">9,099</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">524</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹1,299</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31UuKXWaBML._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          eSYSTEMS Multi Plug Point 3+3 Universal Socket Adaptor with Led Indicator, Individual Switches, Fuse Protection & Short Circuit Protection Extension Board for Home Office & Travel (Cordless)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">122</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">299</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹999</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31qQr77x5kL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          VROKLA Waterproof Repair Tape for Pipe Leakage Roof Water Leakage Solution Aluminium Foil Tape Waterproof Adhesive Sealing Butyl Rubber Tape for Surface Crack (5cmx5m) (Silver)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">3,108</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">324</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹999</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/41YU+ylIT9L._SX342_SY445_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Electronic Spices 100pcs Cable Connectors 2 Pins Electrical Push Type Cable Connectors Quick Splice Lock Wire Terminal 220V 10A
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">709</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">251</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹400</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/41rtW0mZ7TL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Hetkrishi Crimping Tool Wire Pliers, HSC8 6-4A Ferrule Crimper Adjustable Ratchet Tools Used for AWG23-7 (0.25-10.0mmｲ) Cable End Sleeves
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">57</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">899</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹1,299</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/419XWixlxaL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Hoteon Extension Board with 5 Meters Heavy Duty Long Wire Cord, Single Outlet Socket 2500W 10A Expandable Electric Extension, 3 pins Extension Cord for Indoor Outdoor Use (5M/ Grey)-1PCS
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">848</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">1,249</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹2,999</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/51ZAfq9WU2L._SX450_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Havells 240 Volts 6A Four-Way 1440W Extension Board With Cable (White)- 1.5 Metre ( Surge And Spike Guard), 10 Volts
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">31,700</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">499</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹644</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31fH0WftHsL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          Blackt Electrotech BT41P 230V 24x7 Energy Saving Socket Timer Digital Programmable Plastic (White)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,618</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">726</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹900</span>
              <span className="offerPercent">(19% off)</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/51i58jVJyQL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          ZEVON Liquid Electrical Tape/Tube for Wire,Liquid Insulating High Temperature Tube, Waterproof Insulating Electrical Gel, Cable Repair Tube for Mobile Charger,Fast Dry Liquid Electrical Tape (Black)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">19</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">299</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹299</span>
              <span className="offerPercent">(699% off)</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31oNNs2FrFL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          GM 4+1 G-Hoop Spike Guard with C & A Type USB-Master Switch,Indicator, Safety Shutter, 1.8 Mtr Wire with Overload Protection 3 International sockets & 2 USB Port 1 C Type 1 A Type 3.1A…
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,740</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">949</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹1,099</span>
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
      <div className="ExtensionProductCard">
        <img className="ExtensionProductImage" src="https://m.media-amazon.com/images/I/31qQr77x5kL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ExtensionProductDetails">
          <h2 className="ExtensionProductName">
          GM Cuba 3341 Power Strip with USB Type–C I Extension Cord with Surge Protection I Spike Guard I Fireproof Body Upto 750 Degree I 1.8M Cord I 3.4A Max Power Output I 3 International Sockets
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,740</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ExtensionPrice">779</span>
            <div className="ExtensionOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ExtensionPrice">₹999</span>
              <span className="offerPercent">(22% off)</span>
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

export default Extension
