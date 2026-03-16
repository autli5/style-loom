import { NavLink } from "react-router-dom"

import "../styles/components/Header.css"

import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="left">
                    <ul>
                        <NavLink to="/">
                        {({ isActive }) => <li className={isActive ? "active" : ""}>Home</li>}
                        </NavLink>
                        <NavLink to="/products">
                        {({ isActive }) => <li className={isActive ? "active" : ""}>Products</li>}
                        </NavLink>
                    </ul>
                </div>
                <div className="center">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <ul>
                        <li className="cartNav"><img src={cart} alt="" /></li>
                        <NavLink to="/contacts">
                        {({ isActive }) => <li className={`link ${isActive ? "active" : ""}`}>Contact</li>}
                        </NavLink>
                    </ul>
                </div>
            </div>
        </header>
    );
}