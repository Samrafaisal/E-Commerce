import React from "react";
import img1 from "C:/Users/Home/ecommerce/src/Images/men-cover.jpg";
import img2 from "C:/Users/Home/ecommerce/src/Images/women-cover.jpg";
import img3 from "C:/Users/Home/ecommerce/src/Images/kids-cover.jpg";

function Home() {
  return (
    <div>
      <div className="text-container">
        <div className="text">Choose a department</div>
        <div className="image-container">
          <div class="department">
            <img src={img1} alt="mens-wear" />
            <a class="nav-link" aria-current="page" href="/Men">
              <div class="overlay-text">Men's Wear</div>
            </a>
          </div>

          <div class="department">
            <img src={img2} alt="womenswear" />
            <a class="nav-link" aria-current="page" href="/Women">
              <div class="overlay-text">Women's Wear</div>
            </a>
          </div>

          <div class="department">
            <img src={img3} alt="Kidswear" />
            <a class="nav-link" aria-current="page" href="/kids">
              <div class="overlay-text">Kid's Wear</div>
            </a>
          </div>
        </div>
      </div>

      <div class="info">
        <div class="info-item">
          <h2>How to Shop</h2>
          <p>Your guide to shopping and placing orders</p>
        </div>
        <div class="info-item">
          <h2>FAQs</h2>
          <p>Your questions answered</p>
        </div>
        <div class="info-item">
          <h2>Need Help?</h2>
          <p>Contact our global Customer Service team</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
