import "../styles/pages/Contacts.css"

import partner from "../assets/partner.svg"

import star from "../assets/star.svg"
import star_fon from "../assets/star_fon.svg"

import email from "../assets/email.svg"
import phone from "../assets/phone.svg"
import location from "../assets/location.svg"
import eligibility from "../assets/eligibility.svg"

export default function Contacts() {
    return (
        <>
            <div className="partner">
                <div className="container">
                    <div className="top">
                        <div className="text">
                            <h1>Your Partner in Every Step of Your Fashion Journey.</h1>
                            <p>24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.</p>
                        </div>
                        <img src={partner} alt="Decor" />
                    </div>
                </div>
            </div>

            <div className="information">
                <div className="container">
                    <h1>Contact Information</h1>
                </div>
            </div>

            <div className="cardsOnPartner">
                <div className="container">

                    <div className="card">
                        <img className="cardFon" src={star_fon} alt="" />

                        <div className="image">
                            <img src={email} alt="" />
                        </div>

                        <div className="info">
                            <h2>Email</h2>
                            <button className="contactBtn">support@styleloom.com</button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="cardFon" src={star_fon} alt="" />

                        <div className="image">
                            <img src={phone} alt="" />
                        </div>

                        <div className="info">
                            <h2>Phone</h2>
                            <button className="contactBtn">+1 (555) 123-4567</button>
                        </div>
                    </div>

                    <div className="card">
                        <img className="cardFon" src={star_fon} alt="" />

                        <div className="image">
                            <img src={location} alt="" />
                        </div>

                        <div className="info">
                            <h2>Location</h2>
                            <button className="contactBtn">Get Direction</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="policy">
                <div className="container">
                    <div className="top">
                        <h1>Return policy</h1>
                        <button className="policyBtn">
                            Read Return Policy ↗
                        </button>
                    </div>
                </div>
            </div>
            <div className="cardsContact">

                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="left">
                                <img src={eligibility} alt="" />
                            </div>
                            <div className="right">
                                <div className="text">
                                    <h1>Eligibility</h1>
                                    <p>Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="left">
                                <img src={eligibility} alt="" />
                            </div>
                            <div className="right">
                                <div className="text">
                                    <h1>Eligibility</h1>
                                    <p>Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="left">
                                <img src={eligibility} alt="" />
                            </div>
                            <div className="right">
                                <div className="text">
                                    <h1>Eligibility</h1>
                                    <p>Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}