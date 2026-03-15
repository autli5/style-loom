import "../styles/pages/Home.css"

import woman from "../assets/woman.png"
import share from "../assets/share.svg"

import star from "../assets/star.svg"
import fashion from "../assets/fashion.svg"
import navigating from "../assets/navigating.svg"
import elevate from "../assets/elevate.svg"

import star_fon from "../assets/star_fon.svg"
import fashion_fon from "../assets/fashion_fon.svg"

import product1 from "../assets/product1.png";

export default function App() {
  return (
    <>
      <div className="elevate">
        <div className="container">
          <img src={woman} alt="" />
          <a className="shopNow" href="">Shop Now<img src={share} alt=""></img></a>
        </div>
      </div>
      <div className="styleloom">
        <div className="container">
          <div className="left">
            <ul>
              <li>All</li>
              <li>Mens</li>
              <li>Womens</li>
              <li>Kids</li>
            </ul>
            <h1>Elevate Your Style with StyleLoom</h1>
            <p>Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
          </div>
          <div className="right">
            <div className="cards">
              <div className="card">
                <div className="info">
                  <h1>1,500 +</h1>
                  <p>Fashion Products</p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h1>50 +</h1>
                  <p>New arrivals every month.</p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h1>30%</h1>
                  <p>OFF on select items.</p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h1>95%</h1>
                  <p>Customer Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crafting">
        <div className="container">
          <div className="top">
            <h1>Crafting Trends, Inspiring Confidence</h1>
            <p>Explore a world of fashion at StyleLoom, where trends meet affordability.</p>
          </div>
          <div className="bottom">
            <div className="cards">
              <div className="card">
                <img className="cardFon" src={star_fon} alt="" />
                <div className="image">
                  <img src={star} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
              <div className="card">
                <img className="cardFon" src={fashion_fon} alt="" />
                <div className="image">
                  <img src={fashion} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
              <div className="card">
                <img className="cardFon" src={star_fon} alt="" />
                <div className="image">
                  <img src={star} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
              <div className="card">
                <img className="cardFon" src={star_fon} alt="" />
                <div className="image">
                  <img src={star} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
              <div className="card">
                <img className="cardFon" src={star_fon} alt="" />
                <div className="image">
                  <img src={star} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
              <div className="card">
                <img className="cardFon" src={star_fon} alt="" />
                <div className="image">
                  <img src={star} alt="" />
                </div>
                <div className="info">
                  <h1>Passionate Craftsmanship</h1>
                  <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigating">
        <div className="container">
          <div className="top">
            <div className="text">
              <h1>Navigating the StyleLoom Fashion Journey.</h1>
              <p>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>
            </div>
            <img src={navigating} alt="Decor" />
          </div>

          <div className="bottom">
            <div className="card">
              <h3>Step 01</h3>
              <h2>Discover Trends</h2>
              <p>Explore our curated collection of over 1000 styles, spanning global fashion trends.</p>
            </div>
            <div className="card">
              <h3>Step 02</h3>
              <h2>Effortless Navigation</h2>
              <p>Intuitive filters and categories help you find the perfect pieces tailored to your style.</p>
            </div>
            <div className="card">
              <h3>Step 03</h3>
              <h2>Secure Checkout</h2>
              <p>Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.</p>
            </div>
            <div className="card">
              <h3>Step 04</h3>
              <h2>Unbox Happiness</h2>
              <p>Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="elevateStyle">
        <div className="container">
          <div className="top">
            <div className="text">
              <h1>Elevate Your Style with Our Latest Collection</h1>
              <p>Each piece is crafted to enhance your fashion statement.</p>
              <ul>
                <li>All</li>
                <li>Mens</li>
                <li className="active">Womens</li>
                <li>Kids</li>
              </ul>
            </div>
            <img src={elevate} alt="Decor" />
          </div>
          <div className="bottom">
            <div className="cards">

              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={product1} alt="" />
                </div>

                <div className="cardTop">
                  <span className="tag">Womenswear</span>
                  <a className="shopBtn">Shop Now ↗</a>
                </div>
                <div className="cardBottom">
                  <h3>Timeless A-line Evening Dress</h3>
                  <div className="meta">
                    <span>Fit</span>
                    <span className="shar"></span>
                    <span className="nameFit">Ankle-length</span>

                    <span className="space"></span>

                    <span>Price</span>
                    <span className="shar"></span>
                    <span className="nameFit">$109.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}