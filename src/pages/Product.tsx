import { dress, accessories, bags } from "../data/products"

import "../styles/pages/Product.css"

import explore from "../assets/explore.svg"
import share from "../assets/share.svg"
import product1 from "../assets/product1.png"



export default function Product() {
    return (
        <>
            <div className="explore">
                <div className="container">
                    <div className="top">
                        <div className="text">
                        <h1>Explore the Latest Trends and Timeless Classics</h1>
                        <p>Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics</p>
                        <ul>
                            <li>All</li>
                            <li>Mens</li>
                            <li className="active">Womens</li>
                            <li>Kids</li>
                        </ul>
                        </div>
                        <img src={explore} alt="Decor" />
                    </div>
                </div>
            </div>
            <div className="dress">
                <div className="container">
                    <div className="left">
                        <h1>Dress Collection</h1>
                    </div>
                    <div className="right">
                        <button>View All<img src={share} alt=""></img></button>
                    </div>
                </div>
            </div>
            <div className="dressCards">
                <div className="container">
                    <div className="cards">
                        {dress.map((product) => (
                            <div className="cardProduct" key={product.id}>
                                <div className="image">
                                    <img src={product.image} alt={product.title} />
                                </div>

                                <div className="cardTop">
                                    <span className="tag">{product.category}</span>
                                    <a className="shopBtn">Shop Now ↗</a>
                                </div>

                                <div className="cardBottom">
                                    <h3>{product.title}</h3>
                                    <div className="meta">
                                    <span>Fit</span>
                                    <span className="shar"></span>
                                    <span className="nameFit">{product.fit}</span>

                                    <span className="space"></span>

                                    <span>Price</span>
                                    <span className="shar"></span>
                                    <span className="nameFit">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="accessories">
                <div className="container">
                    <div className="left">
                        <h1>Accessories</h1>
                    </div>
                    <div className="right">
                        <button>View All<img src={share} alt=""></img></button>
                    </div>
                </div>
            </div>
            <div className="dressCards">
                <div className="container">
                        <div className="cards">
                            {accessories.map((product) => (
                                <div className="cardProduct" key={product.id}>
                                    <div className="image">
                                        <img src={product.image} alt={product.title} />
                                    </div>

                                    <div className="cardTop">
                                        <span className="tag">{product.category}</span>
                                        <a className="shopBtn">Shop Now ↗</a>
                                    </div>

                                    <div className="cardBottom">
                                        <h3>{product.title}</h3>
                                        <div className="meta">
                                            <span>Fit</span>
                                            <span className="shar"></span>
                                            <span className="nameFit">{product.fit}</span>

                                            <span className="space"></span>

                                            <span>Price</span>
                                            <span className="shar"></span>
                                            <span className="nameFit">${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            <div className="accessories">
                <div className="container">
                    <div className="left">
                        <h1>Bags and HandBags</h1>
                    </div>
                    <div className="right">
                        <button>View All<img src={share} alt=""></img></button>
                    </div>
                </div>
            </div>
            <div className="dressCards">
                <div className="container">
                    <div className="cards">
                        {bags.map((product) => (
                            <div className="cardProduct" key={product.id}>
                                <div className="image">
                                    <img src={product.image} alt={product.title} />
                                </div>

                                <div className="cardTop">
                                    <span className="tag">{product.category}</span>
                                    <a className="shopBtn">Shop Now ↗</a>
                                </div>

                                <div className="cardBottom">
                                    <h3>{product.title}</h3>
                                    <div className="meta">
                                    <span>Fit</span>
                                    <span className="shar"></span>
                                    <span className="nameFit">{product.fit}</span>

                                    <span className="space"></span>

                                    <span>Price</span>
                                    <span className="shar"></span>
                                    <span className="nameFit">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                </div>
            </div>
        </>
    )
}