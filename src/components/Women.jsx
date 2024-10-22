import React from 'react'
import womenshirt3 from "C:/Users/Home/ecommerce/src/Images/wshirt3.jpg"; 
import womenshirt4 from "C:/Users/Home/ecommerce/src/Images/wshirt4.jpg";
import womenshirt2 from "C:/Users/Home/ecommerce/src/Images/wshirt2.jpg";
import jeans4 from "C:/Users/Home/ecommerce/src/Images/jeans4.jpg";
import jeans2 from "C:/Users/Home/ecommerce/src/Images/jeans2.jpg";
import kurtis5 from "C:/Users/Home/ecommerce/src/Images/kurti5.jpg";
import kurtis3 from "C:/Users/Home/ecommerce/src/Images/kurti3.jpg";
import jeans5 from "C:/Users/Home/ecommerce/src/Images/jeans5.jpg";
import kurtis2 from "C:/Users/Home/ecommerce/src/Images/kurti2.jpg";

function Women() {
  return (
    <div>
      <div className="product-container">

        <div className="product-card">
          <img src={womenshirt3} alt='women tshirt3'/>
          <div className="product-info">
            <h2>Graphic Printed Long T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,100</p>
          </div>
          <div className="color-options">
            <span class="color navy-blue"></span>
            <span class="color black"></span>
            <span class="color mint-green"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={womenshirt4} alt='womens tshirt4'/>
          <div className="product-info">
            <h2>Cotton T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color grey"></span>
            <span class="color forest-green"></span>
            <span class="color navy-blue"></span>
            <span class="color pale-yellow"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={womenshirt2} alt='womens tshirt2'/>
          <div className="product-info">
            <h2>Nylon Graphic Printed T-Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,000</p>
          </div>
          <div className="color-options">
            <span class="color mahroon"></span>
            <span class="color forest-green"></span>
            <span class="color navy-blue"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={jeans4} alt='formal cargo pants4'/>
          <div className="product-info">
            <h2>Formal High Waist Cargo Pants</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 2,500</p>
          </div>
          <div className="color-options">
            <span class="color metallic"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={jeans2} alt='women baggy jeans1'/>
          <div className="product-info">
            <h2>High Waist Baggy Jeans</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 2,000</p>
            <span class="color navy-blue"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={kurtis5} alt='unstitched kurti5'/>
          <div className="product-info">
            <h2>Digital Printed Unstitched Shirt & Trouser</h2>
            <p class="price">Rs. 3,000</p>
          </div>
          <div className="color-options">
            <span class="color pearl"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={kurtis3} alt='stiched kurti'/>
          <div className="product-info">
            <h2>Sttiched Kurti Shirt</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 1,700</p>
          </div>
          <div className="color-options">
            <span class="color pale-red"></span>
            <span class="color navy-blue"></span>
            <span class="color lilac"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={jeans5} alt='women bell bottom jeans'/>
          <div className="product-info">
            <h2>High Waist Bell Bottom Jeans</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 2,100</p>
          </div>
          <div className="color-options">
            <span class="color metallic"></span>
            <span class="color navy-blue"></span>
          </div>
        </div>

        <div className="product-card">
          <img src={kurtis2} alt='printed stitched suit'/>
          <div className="product-info">
            <h2>Printed Stitched Suit</h2>
            <p class="sizes">Sizes:XS, S, M, L, XL</p>
            <p class="price">Rs. 2,800</p>
          </div>
          <div className="color-options">
            <span class="color pearl"></span>
            <span class="color lilac"></span>
            <span class="color beige"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Women