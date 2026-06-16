import React, { useEffect } from "react";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useProduct } from "../context/product/product.context";
import { NavLink } from "react-router-dom";

const ProductGrid = () => {
  const { state, getProductList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
              Featured Collection
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Trending Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Best picks loved by customers
            </p>
          </div>

          <button className="text-sm font-medium text-pink-600 hover:underline">
            View All →
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {state?.productList.map((product: any) => (
            <NavLink key={product._id} to={`/product-detail/${product._id}`}>
              <div className="group relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Wishlist */}
                <button className="absolute right-3 top-3 rounded-full bg-white p-1.5 shadow opacity-0 transition group-hover:opacity-100">
                  <FiHeart
                    size={14}
                    className="text-gray-500 hover:text-pink-500"
                  />
                </button>

                {/* IMAGE */}
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={`http://localhost:3000/api/admin/product-photo/${product?._id}`}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* RATING */}
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
                  <FiStar size={10} />
                  4.8
                </div>

                {/* TITLE */}
                <h3 className="mt-1 line-clamp-2 text-xs font-semibold text-gray-900">
                  {product.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-0.5 line-clamp-2 text-[11px] text-gray-500">
                  {product.description}
                </p>

                {/* STOCK */}
                <div className="mt-1 text-[11px]">
                  {product.stock > 0 ? (
                    <span className="text-green-600">
                      Available ({product.stock})
                    </span>
                  ) : (
                    <span className="text-red-500">Out of stock</span>
                  )}
                </div>

                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">
                    ₹{product.price}
                  </span>

                  {product.discountPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.discountPrice}
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-1.5 text-xs font-medium text-gray-700 hover:border-pink-500 hover:text-pink-500">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
