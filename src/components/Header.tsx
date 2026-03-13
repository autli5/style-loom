import "../styles/components/Header.css"

import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="left">
                    <ul>
                        <li className="active">Home</li>
                        <li className="linkLeft">Products</li>
                    </ul>
                </div>
                <div className="center">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <ul>
                        <li className="cartNav"><img src={cart} alt="" /></li>
                        <li className="link">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}