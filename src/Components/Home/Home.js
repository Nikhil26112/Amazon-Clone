import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/PCshopnow/AugART21_PC_hero_1x_Shopnow._CB645150438_.jpg"
          alt="home image"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title=" The Lean Startup: How Constant Innovation Creates Radically Successful
            Businesses"
            price={299}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="30092001"
            title="AmazonBasics Camera Sling Bag"
            price={1329}
            image="https://m.media-amazon.com/images/I/91avLFD4VRL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="26112000"
            title="Lenovo IdeaPad Gaming 3 AMD Ryzen 5 4600H(39.63cm) (8GB/512GB SSD/Windows 10/NVIDIA GTX 1650 4GB)"
            price={60000}
            image="https://m.media-amazon.com/images/I/61TlKHyOHLL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="74085096"
            title="Redmi Note 10 Pro Max (Dark Night, 6GB RAM, 128GB Storage) -108MP Quad Camera | 120Hz Super Amoled Display"
            price={20000}
            image="https://m.media-amazon.com/images/I/41l3EnxO0oS._AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="11121999"
            title="Quace Planter Pot Baby Tree Flowerpot Pen Container Toy Gift - Patience Design"
            price={325}
            image="https://m.media-amazon.com/images/I/513KwEcP3rL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="DualSense wireless controller - (PlayStation5)"
            price={5000}
            image="https://m.media-amazon.com/images/I/31PZDQ-IU6L._AC_SY200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
