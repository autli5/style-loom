import "../styles/pages/Home.css"

import woman from "../assets/woman.png"
import share from "../assets/share.svg"

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
    </>
  )
}