import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data.slice(0, 8));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="h-8 w-60 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-gray-100" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-[420px] animate-pulse rounded-3xl bg-gray-100"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Featured Collection
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
              Trending Products
            </h2>

            <p className="mt-3 text-lg text-slate-500">
              Handpicked products loved by thousands of customers.
            </p>
          </div>

          <button className="flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
            View All
            <FiArrowRight />
          </button>
        </div>

        {/* Products Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Discount Badge */}
              <div className="absolute left-4 top-4 z-20 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                -20%
              </div>

              {/* Wishlist */}
              <button className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 shadow-md transition hover:text-red-500">
                <FiHeart />
              </button>

              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="mb-3 flex items-center gap-1 text-yellow-500">
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />

                  <span className="ml-2 text-sm text-slate-500">
                    (4.9)
                  </span>
                </div>

                {/* Title */}
                <h3 className="line-clamp-2 min-h-[52px] text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-slate-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;