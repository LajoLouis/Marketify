import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductCard from "./ProductCard";

function RelatedProducts({ currentProductId, currentProductType }) {
  const { products } = useContext(ShopContext);

  // Get products with same type, but exclude current product
  const related = products.filter(p => 
    p.type === currentProductType && p.id != currentProductId
  );

  return (
    <div className="w-[90%] mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>

      {related.length === 0 && (
        <p className="text-gray-500">No related products found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {related.map(product => (
          <div key={product.id} className="product-grid-card">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style>{`.product-grid-card img{width:100% !important;height:320px !important;object-fit:cover !important;}`}</style>
    </div>
  );
}

export default RelatedProducts;
