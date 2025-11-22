import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="bg-stone-200/35 min-h-lvh">
      <ShopProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/productdetail/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </ShopProvider>
    </div>
  );
}

export default App;
