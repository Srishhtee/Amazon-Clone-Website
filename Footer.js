import React from 'react'
import "./Footer.css";
function Footer() {
    const scrollToTop=()=>{
        window.scrollTo(0,0);
    };
  return (
    <div className="footer">
      <div className="topButton">
        <button className="backToTop" onClick={scrollToTop}>Back to top</button>
      </div>
      <div className="websiteInfoConatiner">
        <div className="getToKnownUs infoBlocks">
            <ul>
                <li className="infoHeading">Get to Know Us</li>
                <li className="linkTexts">About Us</li>
                <li className="linkTexts">Careers</li>
                <li className="linkTexts">Press Releases</li>
                <li className="linkTexts">Amazon Science</li>
            </ul>
        </div>
        <div className="connectWithUs infoBlocks">
            <ul>
                <li className="infoHeading">Connect with Us</li>
                <li className="linkTexts">Facebook</li>
                <li className="linkTexts">Twitter</li>
                <li className="linkTexts">Instagram</li>
            </ul>
        </div>
        <div className="makeMoneyWithUs infoBlocks">
            <ul>
                <li className="infoHeading">Make Money with Us</li>
                <li className="linkTexts">Sell on Amazon</li>
                <li className="linkTexts">Amazon Global Selling</li>
                <li className="linkTexts">Become an Affiliate</li>
                <li className="linkTexts">Fulfilment by Amazon</li>
                <li className="linkTexts">Sell under Amazon Accelerator</li>
                <li className="linkTexts">Advertise Your Products</li>
                <li className="linkTexts">Amazon Pay on Merchants</li>
                <li className="linkTexts">Protect and Build Your Brand</li>
            </ul>
        </div>
        <div className="letUsHelpYou infoBlocks">
            <ul>
                <li className="infoHeading">Let Us Help You</li>
                <li className="linkTexts">COVID-19 and Amazon</li>
                <li className="linkTexts">Your Account</li>
                <li className="linkTexts">Returns Centre</li>
                <li className="linkTexts">100% Purchase Protection</li>
                <li className="linkTexts">Amazon App Download</li>
                <li >Help</li>
            </ul>
        </div>
      </div>
      <div className="amazonServicesContainer">
        <div className="amazonServices">
            <ul>
                <li className="amazonServicesHeading">AbeBooks</li>
                <li>Books, art</li>
                <li>& collectibles</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Amazon Web Services</li>
                <li>Scalable Cloud</li>
                <li>Computing Services</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Audible</li>
                <li>Download</li>
                <li>Audio Books</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">IMDb</li>
                <li>Movies, Tv</li>
                <li>& Celebrities</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Shopbop</li>
                <li>Designer</li>
                <li>fashion Brands</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Amazon Business</li>
                <li>Everything For</li>
                <li>Your Business</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Prime Now</li>
                <li>2-Hour Delivery</li>
                <li>on Everyday Items</li>
            </ul>
            <ul>
                <li className="amazonServicesHeading">Amazon Prime Music</li>
                <li>100 million songs,ad-free</li>
                <li>Over 15 million podcast episodes</li>
            </ul>
        </div>
      </div>
      <div className="termsAndConditions">
        <ul>
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
        </ul>
        <span className="workingSince">© 1996-2024, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Footer
