import React from "react";
import bshirt1 from "C:/Users/Home/ecommerce/src/Images/boyshirt1.jpg";
import frock1 from "C:/Users/Home/ecommerce/src/Images/frock1.jpg";
import frock2 from "C:/Users/Home/ecommerce/src/Images/frock2.jpg";
import bshirt3 from "C:/Users/Home/ecommerce/src/Images/boyshirt3.jpg";
import gsuit2 from "C:/Users/Home/ecommerce/src/Images/suit2.jpg";
import gshirt3 from "C:/Users/Home/ecommerce/src/Images/girlshirt3.jpg";
import gshirt2 from "C:/Users/Home/ecommerce/src/Images/girlshirt2.jpg";
import bshirt2 from "C:/Users/Home/ecommerce/src/Images/boyshirt2.jpg";
import bshirt4 from "C:/Users/Home/ecommerce/src/Images/boyshirt4.jpg";

function Kids() {
  return (
    <div>
      <div className="product-container">
        <div className="product-card">
          <img src={bshirt1} alt="kids boy shirt1" />
          <div className="product-info">
            <h2>Graphic Printed Boys Shirt</h2>
            <p class="sizes">Sizes:30, 32, 34, 36</p>
            <p class="price">Rs. 600</p>
          </div>
          <div className="color-options">
            <span class="color black"></span>
            <span class="color white"></span>
            <span class="color mint-green"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={frock1} alt="girls frock 1" />
          <div className="product-info">
            <h2>Flare Frock for Girls</h2>
            <p class="sizes">Sizes:30, 32, 34, 36, 38</p>
            <p class="price">Rs. 1,100</p>
          </div>
          <div className="color-options">
            <span class="color pink"></span>
            <span class="color white"></span>
            <span class="color navy-blue"></span>
            <span class="color black"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={frock2} alt="girls frock 2" />
          <div className="product-info">
            <h2>Fancy Frill Frock</h2>
            <p class="sizes">Sizes:34, 36, 38, 40, 42</p>
            <p class="price">Rs. 1,600</p>
          </div>
          <div className="color-options">
            <span class="color sky-blue"></span>
            <span class="color lilac"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={bshirt3} alt="kids boy shirt3" />
          <div className="product-info">
            <h2>Graphic Printed Boys Shirt</h2>
            <p class="sizes">Sizes:30, 32, 34, 36</p>
            <p class="price">Rs. 800</p>
          </div>
          <div className="color-options">
            <span class="color white"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={gsuit2} alt="stitched kids suit" />
          <div className="product-info">
            <h2>Stitched Salitax Kids Suit</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 2,300</p>
            <span class="color pink"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={gshirt3} alt="girls shirt 3" />
          <div className="product-info">
            <h2>Girls Graphic Shirt</h2>
            <p class="sizes">Sizes:26, 28, 30, 32</p>
            <p class="price">Rs. 900</p>
          </div>
          <div className="color-options">
            <span class="color white"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={gshirt2} alt="girls shirt 2" />
          <div className="product-info">
            <h2>Girls Graphic Shirt</h2>
            <p class="sizes">Sizes:30, 32, 34, 36, 38</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color white"></span>
            <span class="color black"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={bshirt2} alt="kids boy shirt2" />
          <div className="product-info">
            <h2>Graphic Printed Boys Shirt</h2>
            <p class="sizes">Sizes:32, 34, 36, 38</p>
            <p class="price">Rs. 500</p>
          </div>
          <div className="color-options">
            <span class="color grey"></span>
            <span class="color white"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={bshirt4} alt="kids boy shirt4" />
          <div className="product-info">
            <h2>Graphic Printed Boys Shirt</h2>
            <p class="sizes">Sizes:26, 28, 30</p>
            <p class="price">Rs. 900</p>
          </div>
          <div className="color-options">
            <span class="color teal"></span>
            <span class="color black"></span>
            <span class="color coffee"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kids;
