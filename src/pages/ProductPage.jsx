import React, { useContext, useState, useMemo } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const { products } = useContext(ShopContext);
  const [active, setActive] = useState("All");

  // normalize type -> category mapping
  const mapTypeToCategory = (type) => {
    if (!type) return null;
    const t = String(type).toLowerCase();
    if (t === "shirt") return "Clothing";
    if (t === "shoe") return "Shoes";
    if (t === "bag") return "Accessories";
    return null;
  };

  const categories = ["All", "Clothing", "Shoes", "Accessories"];

  const filtered = useMemo(() => {
    if (!products || products.length === 0) return [];
    if (active === "All") return products;
    return products.filter((p) => mapTypeToCategory(p.type) === active);
  }, [products, active]);

  return (
    <div className="w-[90%] mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      {/* Override ProductCard image sizing locally without editing ProductCard.jsx */}
      <style>{`
        /* target the img inside the ProductCard from this page and force it to fill the card area */
        .product-override img {
          width: 100% !important;
          height: 320px !important; /* matches original 80% of 400px card height */
          object-fit: cover !important;
          display: block !important;
        }
      `}</style>

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              active === cat
                ? "bg-amber-500 text-black"
                : "bg-gray-100 text-stone-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {(!products || products.length === 0) && (
        <p>Loading products...</p>
      )}

      {products && products.length > 0 && filtered.length === 0 && (
        <p>No products in this category.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="product-override">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
 