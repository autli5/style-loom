import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Contacts from "./pages/Contacts"




function App() {
  return (
    <BrowserRouter basename="/style-loom/">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App