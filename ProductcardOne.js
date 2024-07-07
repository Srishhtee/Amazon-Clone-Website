import React from 'react';
import './ProductCard.css';
import { Link } from "react-router-dom";

function ProductcardOne() {
  return (
    <div className="productCardContainer">
      <div className="productCard">
        <h3 className="productHeadLine">
          Deals on smartphones that suits your budget
        </h3>
        <div className="productWindow">
          <Link to="/Budget" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ARTMSO/Curation/PC/P127645155_WLD-MSO_PC_QC_372x232_1_1x._SY116_CB559702257_.jpg"
              alt="Budget Smartphones"
            />
            <p className="productName">Budget | Under रु10,000</p>
          </Link>
          <Link to="/Midrange" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ARTMSO/Curation/PC/P127645155_WLD-MSO_PC_QC_372x232_2_1x._SY116_CB559702257_.jpg"
              alt="Midrange Smartphones"
            />
            <p className="productName">Mid range | रु10,000-<br />रु25,000</p>
          </Link>
          <Link to="/Premium" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ARTMSO/Curation/PC/P127645155_WLD-MSO_PC_QC_372x232_3_1x._SY116_CB559702257_.jpg"
              alt="Premium Smartphones"
            />
            <p className="productName">Premium | रु25,000-<br />रु40,000</p>
          </Link>
          <Link to="/UltraPremium" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ARTMSO/Curation/PC/P127645155_WLD-MSO_PC_QC_372x232_4_1x._SY116_CB559702257_.jpg"
              alt="Ultra Premium Smartphones"
            />
            <p className="productName">Ultra Premium | Above <br />रु40,000</p>
          </Link>
        </div>
        <div className="seeMore">See all offers</div>
      </div>

      <div className="productCard">
        <h3 className="productHeadLine">
          Appliances for your home | Up to 55% off
        </h3>
        <div className="productWindow">
          <Link to="/Airconditioners" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
              alt="Air Conditioners"
            />
            <p className="productName">Air conditioners</p>
          </Link>
          <Link to="/Refrigerators" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
              alt="Refrigerators"
            />
            <p className="productName">Refrigerators</p>
          </Link>
          <Link to="/Microwaves" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
              alt="Microwaves"
            />
            <p className="productName">Microwaves</p>
          </Link>
          <Link to="/WashingMachines" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
              alt="Washing Machines"
            />
            <p className="productName">Washing Machines</p>
          </Link>
        </div>
        <div className="seeMore">See all offers</div>
      </div>

      <div className="productCard">
        <h3 className="productHeadLine">
          Starting ₹99 | Home improvement essentials
        </h3>
        <div className="productWindow">
          <Link to="/Spinmops" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg"
              alt="Spin mops, wipes & more"
            />
            <p className="productName">Spin mops,wipes &<br />more</p>
          </Link>
          <Link to="/Bathroom" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg"
              alt="Bathroom hardware & accessories"
            />
            <p className="productName">Bathroom hardware &<br />accessories</p>
          </Link>
          <Link to="/Hammers" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg"
              alt="Hammers, screwdrivers & more"
            />
            <p className="productName">Hammers,sctrewdivers<br />& more</p>
          </Link>
          <Link to="/Extension" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg"
              alt="Extension boards, plugs & more"
            />
            <p className="productName">Extension boards,<br />plugs & more</p>
          </Link>
        </div>
        <div className="seeMore">See all offers</div>
      </div>

      <div className="productCard">
        <h3 className="productHeadLine">
          Minimum 60% off | Deals on Amazon brands & more
        </h3>
        <div className="productWindow">
          <Link to="/Bedsheets" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC-QC_MayArt_186x116_6._SY116_CB558087195_.jpg"
              alt="Bedsheets"
            />
            <p className="productName">Bedsheets</p>
          </Link>
          <Link to="/Homedecor" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC-QC_MayArt_186x116_fff._SY116_CB557866101_.jpg"
              alt="Home decor"
            />
            <p className="productName">Home decor</p>
          </Link>
          <Link to="/Toys" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC-QC_MayArt_186x116_13_Overall._SY116_CB557871689_.jpg"
              alt="Toys & games"
            />
            <p className="productName">Toys & games</p>
          </Link>
          <Link to="/Tshirts" className="product">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/SPB_186._SY116_CB558087195_.jpg"
              alt="Tshirts, jeans & more"
            />
            <p className="productName">Tshirts,jeans & more</p>
          </Link>
        </div>
        <div className="seeMore">See all offers</div>
      </div>
    </div>
  );
}

export default ProductcardOne;
