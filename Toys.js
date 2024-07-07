import React from 'react';
import "./Toys.css";

function Toys() {
  
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  return (
    <div className="Toys">
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/51WG6sWxHNL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          The Puzzl Co, Set of 2, Home Repairs + Volunteering Jigsaw Puzzles, 36 Pcs Each, Ages 4-6, Puzzle for Kids, Educational Toy by Puzzle Experts, Gift for Kids
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">4</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">399</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹599</span>
              <span className="offerPercent">(33% off)</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/51QuuwB9bwL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Amazon Brand - Jam & Honey Magna Tiles Building Blocks for Kids | STEM Toy | Magnetic Toys | Great Birthday Gift | Toys for Kids |Educational & Creative Toy| 28 Pieces
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,538</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">1,299</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹2,299</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/61hibZi04rS._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Imagimake Mapology Ultimate Combo: India & World Map Puzzle, Solar System Puzzle & Monument of India Construstion Set - Educational Toy for Kids Above 5 Years
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">5,768</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">2,498</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹2,498</span>
              <span className="offerPercent">(11% off)</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41q3TCgjvML._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys Can Sing Wriggle & Singing Recording Repeat What You Say Funny Education Toys for Children Playing Home Decor for Kids
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,982</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">318</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹499</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41kMiQ8sZQL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          CPD Empire Spider Web Shooters Toy for Kids Fans, Hero Launcher Wrist Toy Set,Cosplay Launcher Bracers Accessories,Sticky Wall Soft Bomb Funny Children's Educational Toys, Multicolor
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">82</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">189</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,199</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/410y0dDxW7L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          GRAPHENE 32 Hole Electric Gatling Bubble machine Gun for Kids with Soap Solution Indoor and Outdoor Toys for Toddlers Bubble Launcher Machine for Girls and Boys (Color as per Stock)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">781</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">249</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹499</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41jUYf9LbXL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Graphene Bedtime Fun Kids Slide Projector Torch, Premium ABS Materials, Easy-to-Use Interchangeable Slides, Versatile Flashlight for Nighttime Safety, The Perfect Sleep Companion for Children
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,729</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">189</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,499</span>
              <span className="offerPercent">(87% off)</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/61wJKBeaB7L._SX355_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          ZUDO TOYS Learning Colour and Pattern Matching Montessori Slide Puzzle Game for Kids
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,025</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">275</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹499</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/5136BhTYI8L._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          SYCAMORE EAST Wooden Baby Fox Rattle & Crochet Doll Plush Elephant Stuffed Animals Toy for Newborn | 100% Handmade Infant Soothe Toys for Sensory and Early Grips Development Gifts
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">302</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">999</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,999</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41rwohk4IRL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          ZUDO TOYS Shape Sorting Cube With 18 Shape And Different Color - Kids Activity Toys - Learning And Educational Toys With Multicolour - (Bis Approved), 19 Pcs
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,473</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">239</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹499</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41ldM-8WKmL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          GIRLYZ Attire Squishy Mesh Stress Balls - Non-Toxic Rubber Sensory Balls, Calming Toys for Stress and Anxiety, Special Needs, Autism - Mesh for Grape Balls with Net Multicolor (Pack of 1 pc)
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">9</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">75</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹259</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/51g0CO6OUEL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          COSMOBABY Swimming Bath Toys for Toddlers 1-3, Floating Wind Up Toys for 1-5 Year Old Boy Girl, New Born Baby Bathtub Water Toys, Preschool Toddler Pool Toys (Turtle)(Pack of 1) Proudly Made in India
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,255</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">94</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹999</span>
              <span className="offerPercent">(91% off)</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/41dqCDhh3EL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Storio Toy Octopus Plushie Reversible Soft Toys for Kids | Plush Soft Toys for Baby Boys and Girls | Octopus Soft Toy for Kids -18cm
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">2,013</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">149</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹849</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/51jEk-3-XeL._SY355_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Graphene Airplane Launcher Gun, Safe and Fun Shooting Guns for Kids, Paper Foam Gliders for Quick and Easy Operation, Nearly Unbreakable Plastic, Ideal for Kids Ages
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,175</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">289</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,299</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/51qSF-ZTdxL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Graphene Colorful Double-Sided Flash Cards, Interactive Learning Toys for Children, Electronic Montessori Educational Cards, Develop Language Skills Through Visual & Auditory Sensory Methods
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">558</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">329</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,499</span>
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
      <div className="ToysProductCard">
        <img className="ToysProductImage" src="https://m.media-amazon.com/images/I/71drVy8MKoL._SY450_.jpg" alt=""/>
        <div className="ToysProductDetails">
          <h2 className="ToysProductName">
          Galaxy Hi-Tech® Pioneer Bot Robot Colorful Lights and Music | All Direction Movement Dancing Robot Toys for Boys and Girls Multi-Colour
          </h2>
          <div className="ratingSection">
            <img className="stars" src="https://domesticwarrantyshop.com/wp-content/uploads/2020/10/star-4-1-1.png" alt=""/>
            <img className="arrowIcon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""/>
            <span className="ratings">1,346</span>
          </div>
          <div className="priceSection">
            <span className="priceIcon">₹</span>
            <span className="ToysPrice">699</span>
            <div className="ToysOriginalPrice">
              <span className="mrp">M.R.P.:</span>
              <span className="ToysPrice">₹1,999</span>
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
      </div>
  );
}

export default Toys;