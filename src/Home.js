import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id={2}
            title="Kenwood Chef XL Elite, Stand Mixer 6.7L, Kitchen Machine, KVL6300S, Silver"
            price={239}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61O-5G63AwL._AC_SL1200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="SAMSUNG 23.5 inch (16:9) Curve LED 1920x1080 5MS D-SUB HDMI VESA 3YR"
            price={547.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51i%2B9xdgRUL._AC_.jpg"
          />
          <Product
            id={4}
            title="Fullmosa Compatible with Apple Watch Band 38mm 40mm 42mm 44mm, Yan Series Lichi Calf Leather Strap Band Compatible with iWatch Series 5 4 3 2 1, 38mm 40mm Soft Pink+Rose Gold Buckle"
            price={24.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71U2HUcWhNL._AC_SX679_.jpg"
          />
          <Product
            id={5}
            title="Lodge L8SK3 10.25 Inch Cast Iron Skillet with Helper Handle, Black"
            price={28.16}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/517cJC1ys7L._AC_SL1024_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Nikon Z 50 + NIKKOR DX 16-50mm f/3.5-6.3 VR + NIKKOR DX 50-250mm f/4.5-6.3 VR Twin Lens Kit, Black"
            price={1699.15}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61AmusFS97L._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
