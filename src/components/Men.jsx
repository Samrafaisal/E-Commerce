import React from 'react'
import shirt1 from "C:/Users/Home/ecommerce/src/Images/shirt1.jpg";
import shirt2 from "C:/Users/Home/ecommerce/src/Images/shirt2.jpg";
import shirt3 from "C:/Users/Home/ecommerce/src/Images/shirt3.jpg";
import polo2 from "C:/Users/Home/ecommerce/src/Images/polo2.jpg";
import polo1 from "C:/Users/Home/ecommerce/src/Images/polo1.jpg";
import shirt4 from "C:/Users/Home/ecommerce/src/Images/shirt4.jpg";
import shirt5 from "C:/Users/Home/ecommerce/src/Images/shirt5.jpg";
import polo3 from "C:/Users/Home/ecommerce/src/Images/polo3.jpg";

function Men() {
  return (
    <div>
      <div className="product-container">

        <div className="product-card">
          <img src={shirt1} alt='mens tshirt1'/>
          <div className="product-info">
            <h2>Graphic Printed Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color navy-blue"></span>
            <span class="color beige"></span>
            <span class="color white"></span>
            <span class="color black"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={shirt2} alt='mens tshirt2'/>
          <div className="product-info">
            <h2>Polyester T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 700</p>
          </div>
          <div className="color-options">
            <span class="color navy-blue"></span>
            <span class="color white"></span>
            <span class="color black"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={shirt3} alt='mens tshirt3'/>
          <div className="product-info">
            <h2>Cotton Printed T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color coffee"></span>
            <span class="color white"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={polo2} alt='mens polo shirt2'/>
          <div className="product-info">
            <h2>Polo Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,500</p>
          </div>
          <div className="color-options">
            <span class="color red"></span>
            <span class="color white"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={polo1} alt='mens polo shirt1'/>
          <div className="product-info">
            <h2>Cotton Polo Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,700</p>
          </div>
        </div>

        <div className="product-card">
          <img src={shirt4} alt='mens tshirt4'/>
          <div className="product-info">
            <h2>Cotton Printed T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color brown"></span>
            <span class="color black"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={shirt5} alt='mens tshirt5'/>
          <div className="product-info">
            <h2>Graphic Printed Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,200</p>
          </div>
          <div className="color-options">
            <span class="color grey"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={polo3} alt='mens polo shirt3'/>
          <div className="product-info">
            <h2>Polo Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1300</p>
          </div>
          <div className="color-options">
            <span class="color mint-green"></span>
            <span class="color navy-blue"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={polo2} alt='mens polo shirt2'/>
          <div className="product-info">
            <h2>Polo Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,500</p>
          </div>
          <div className="color-options">
            <span class="color red"></span>
            <span class="color white"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Men