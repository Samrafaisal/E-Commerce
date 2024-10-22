import React from "react";

import icongif from "C:/Users/Home/ecommerce/src/Images/icon.gif";
import globe from "C:/Users/Home/ecommerce/src/Images/tiny-globe.jpg";
import profile from "C:/Users/Home/ecommerce/src/Images/tiny-profile.jpg";
import heart from "C:/Users/Home/ecommerce/src/Images/tiny-heart.jpg";
import bag from "C:/Users/Home/ecommerce/src/Images/tiny-shopping-bag.jpg";

function Navbar() {
  return (
    <div>
      <ul class="nav justify-content">
        <nav class="navbar navbar-expand-lg">
          <img src={icongif} alt="cart" className="cart-icon" />
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/Men">
                    Men
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/Women">
                    Women
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/kids">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="logo">Shopify</div>
        <div className="icon-container align-right">
          <div className="icons">
            <img src={globe} alt="globe" className="icon" />
            <img src={profile} alt="profile" className="icon" />
            <img src={heart} alt="heart" className="icon" />
            <img src={bag} alt="bag" className="icon" />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
