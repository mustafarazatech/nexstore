import React, { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-[380px] animate-pulse rounded-2xl bg-gray-100"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="rounded-full bg-teal/10 px-4 py-1 text-sm font-semibold text-teal">
              Featured Products
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Trending Products
            </h2>

            <p className="mt-2 text-gray-600">Best picks loved by customers.</p>
          </div>

          <button className="text-teal font-semibold hover:underline">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-gray-100 p-4 transition hover:shadow-md"
            >
              {/* Image */}
              <div className="flex h-60 items-center justify-center bg-cream rounded-xl p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain transition group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-teal">
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <span className="ml-2 text-sm text-gray-500">(4.9)</span>
                </div>

                {/* Title */}
                <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-4 py-2 text-white hover:opacity-90 transition">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
