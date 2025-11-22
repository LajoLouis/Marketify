import React, { useContext, useState, useMemo } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  // Get all products from our shop context
  const { products } = useContext(ShopContext);
  
  // Keep track of which category is selected
  const [active, setActive] = useState("All");
  
  // List of all our shopping categories
  const categories = ["All", "Clothing", "Shoes", "Accessories"];
  
  // Helper function to match product types to category names
  function getProductCategory(type) {
    if (!type) return null;
    
    // Convert type to lowercase for easier matching
    switch(type.toLowerCase()) {
      case "shirt":
        return "Clothing";
      case "shoe":
        return "Shoes";
      case "bag":
        return "Accessories";
      default:
        return null;
    }
  }
  
  // Filter products based on selected category
  const filtered = useMemo(() => {
    // Return empty array if we don't have products yet
    if (!products?.length) return [];
    
    // Show all products when "All" is selected
    if (active === "All") return products;
    
    // Otherwise filter by category
    return products.filter(product => 
      getProductCategory(product.type) === active
    );
  }, [products, active]);

  return (
    <div className="w-[90%] mx-auto py-8">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      {/* Category Menu Buttons */}
      <div className="flex gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all
              ${active === category 
                ? "bg-amber-500 text-black shadow-sm" 
                : "bg-gray-100 text-stone-700 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid with Image Size Override */}
      <style>{`
        .product-grid-card img {
          width: 100% !important;
          height: 320px !important;
          object-fit: cover !important;
        }
      `}</style>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="product-grid-card">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
 