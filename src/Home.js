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
            <Product
              id="12321341"
              title="Bennet Mystic 15.6 inch Laptop shoulder messenger sling office Bag.
            Water Repellent Fabric for Men and Women (Blue)"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81HEC-PJkiL._AC_UY1100_.jpg"
            />
            <Product
              id="12321342"
              title="Targus Classic Slim Business Professional Travel Laptop Bag (Black)"
              price={19.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/8114ke-DlJL._AC_UF894,1000_QL80_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321343"
              title="KROSER Laptop Bag 15.6 Inch Laptop Briefcase Water Repellent Laptop Shoulder Bag (Grey)"
              price={24.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/61Ons69gBWL._AC_UY1000_.jpg"
            />
            <Product
              id="12321344"
              title="MOSISO Laptop Shoulder Bag Compatible with MacBook Pro/Air 13-13.3 Inch (Blue)"
              price={17.89}
              rating={5}
              image="https://m.media-amazon.com/images/I/81RSpbRefPL.jpg"
            />
            <Product
              id="12321345"
              title="AmazonBasics 15.6-Inch Laptop and Tablet Bag (Black)"
              price={14.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/91Q4MPJX2iL._AC_UF1000,1000_QL80_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321346"
              title="Solo New York Duane Hybrid Briefcase, Backpack, Messenger Bag (Black)"
              price={39.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71zyEAfY0dL.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
