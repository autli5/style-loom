import "../styles/components/Footer.css"

import sun from "../assets/sun.svg"
import wardrobe from "../assets/wardrobe.svg"
import logo from "../assets/logo.svg"

export default function Footer() {
    return (
        <footer>
            <div className="reklama">
                <div className="container reklamaBox">
                <div className="reklamaText">
                    <h1>Elevate Your Wardrobe</h1>
                    <p>
                    Don't miss out – experience the epitome of fashion by clicking
                    'Buy Now' and embrace a world of chic elegance delivered to your doorstep.
                    </p>
                </div>

                <button className="buyBtn">Shop Now</button>

                <img src={wardrobe} className="decor" alt="" />
                </div>
            </div>
            <div className="led">
                <div className="marquee">
                    <div className="marquee-track">
                        <span>Henley Shirt</span>
                        <img src={sun} alt="" />

                        <span>Tank Top</span>
                        <img src={sun} alt="" />

                        <span>T-Shirt</span>
                        <img src={sun} alt="" />

                        <span>Long-Sleeve T-Shir</span>
                        <img src={sun} alt="" />
                        
                        <span>Raglan Sleeve Shirt</span>
                        <img src={sun} alt="" />

                        <span>Crop Top</span>
                        <img src={sun} alt="" />

                        <span>V-Neck Shirt</span>
                        <img src={sun} alt="" />

                        <span>Muscle Shirt</span>
                        <img src={sun} alt="" />

                        <span>Polo Dress</span>
                        <img src={sun} alt="" />
                        
                        <span>Henley Shirt</span>
                        <img src={sun} alt="" />

                        <span>Tank Top</span>
                        <img src={sun} alt="" />

                        <span>T-Shirt</span>
                        <img src={sun} alt="" />

                        <span>Long-Sleeve T-Shir</span>
                        <img src={sun} alt="" />
                        
                        <span>Raglan Sleeve Shirt</span>
                        <img src={sun} alt="" />

                        <span>Crop Top</span>
                        <img src={sun} alt="" />

                        <span>V-Neck Shirt</span>
                        <img src={sun} alt="" />

                        <span>Muscle Shirt</span>
                        <img src={sun} alt="" />

                        <span>Polo Dress</span>
                        <img src={sun} alt="" />
                    </div>
                </div>
            </div>
            <div className="footerMain">
                <div className="container footerGrid">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="links">
                        <h4>Home</h4>
                        <p>Why Us</p>
                        <p>About Us</p>
                        <p>Testimonials</p>
                        <p>FAQ's</p>
                    </div>

                    <div className="links">
                        <h4>Products</h4>
                        <p>Menswear</p>
                        <p>Womenswear</p>
                        <p>Kidswear</p>
                    </div>

                    <div className="newsletter">
                        <h4>Subscribe to Newsletter</h4>

                        <div className="inputBox">
                        <input placeholder="Your Email" />
                        </div>
                    </div>

                    </div>

                    <div className="footerBottom container">
                    <p>© 2024 StyleLoom. All rights reserved.</p>

                    <div className="legal">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}