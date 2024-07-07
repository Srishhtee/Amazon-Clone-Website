import React from 'react'
import "./Home.css"
import ProductcardOne from './ProductcardOne'
import ProductSlider from './ProductSlider'

function Home() {
    return (
        <div className="home">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                <div className="imgBlend"></div>
                    <div className="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/91GXrEoEXvL._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/91O7OLaxSTL._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/91IVyMohcOL._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/916VpzBGLaL._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/61+NvHoeH+L._SX3000_.jpg" 
                        className="d-block w-100" alt=""/>
                    </div>
                </div>
                <button className="carousel-control-prev prevBtn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon slideBtn" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next nextBtn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon slideBtn" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="productSection">
                <ProductcardOne/>
                <ProductSlider/>
            </div>
        </div>
    )
}

export default Home
