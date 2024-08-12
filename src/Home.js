import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://media.licdn.com/dms/image/C5616AQEqa6LRlBviww/profile-displaybackgroundimage-shrink_200_800/0/1612355666611?e=2147483647&v=beta&t=lWa0xhpQOe5CVAQ81xhQv3CbyDXNlxGU88xXFFGx6jg"
            alt="e-commerce"
            className="home__image"
          />
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
