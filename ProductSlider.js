import React from 'react';
import "./ProductSlider.css";


const products = [
  { id: 1, image: "https://m.media-amazon.com/images/I/71S+0nfVCAL._AC_SY200_.jpg", link: "/product/1" },
  { id: 2, image: "https://m.media-amazon.com/images/I/51jYd4qBdML._AC_SY200_.jpg", link: "/product/2" },
  { id: 3, image: "https://m.media-amazon.com/images/I/51Aq5dUOBgL._AC_SY200_.jpg", link: "/product/3" },
  { id: 4, image: "https://m.media-amazon.com/images/I/51NDLtFqLsL._AC_SY200_.jpg", link: "/product/4" },
  { id: 5, image: "https://m.media-amazon.com/images/I/51enBU46RiL._AC_SY200_.jpg", link: "/product/5" },
  { id: 6, image: "https://m.media-amazon.com/images/I/61okzE+2eVL._AC_SY200_.jpg", link: "/product/6" },
  { id: 7, image: "https://m.media-amazon.com/images/I/51vCWLuy++L._AC_SY200_.jpg", link: "/product/7" },
  { id: 8, image: "https://m.media-amazon.com/images/I/41vilVqqPOL._AC_SY200_.jpg", link: "/product/8" },
  { id: 9, image: "https://m.media-amazon.com/images/I/61cVgq6VJTL._AC_SY200_.jpg", link: "/product/9" }
];

function ProductSlider() {
  let box = document.querySelector(".slider");

  const prev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const next = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="productSliderContainer">
      <div className="prevButton buttons" onClick={prev}>
        <button>
          <img className="prev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAuDT_lWRd5j0f9-TQqWtAC7pTfQdzr3JEbUfewBP6w&s" alt="Previous" />
        </button>
      </div>
      <div className="slider">
        <h3 className="sliderHeading">Home essentials from stores nearby</h3>
        <div className="cards">
          {products.map(product => (
            <div className="myCard" key={product.id}>
              <a href={product.link}>
                <img className="sliderImage" src={product.image} alt={`Product ${product.id}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="nextButton buttons" onClick={next}>
        <button>
          <img className="next" src="https://p7.hiclipart.com/preview/327/148/46/arrow-encapsulated-postscript-computer-icons-next-button.jpg" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
