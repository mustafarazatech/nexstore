import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useLocation } from "react-router-dom";
import { useProduct } from "../context/product/product.context";
import { FiFilter, FiGrid, FiSearch } from "react-icons/fi";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const id = useLocation().pathname.split("/")[2];
  const { getProductCtegoryFilter, state } = useProduct();

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (id) getProductCtegoryFilter(id);
  }, [id]);

  const products = state?.productCategory || [];

  const filteredProducts = products.filter((item: any) =>
    item.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MainLayout>
      <section className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* ===== HEADER ===== */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Title */}
              <div>
                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                  NexStore Collection
                </span>

                <h1 className="mt-3 text-3xl font-bold text-gray-900">
                  Discover{" "}
                  <span className="text-pink-600">Trendy Products</span>
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Explore curated fashion & lifestyle products.
                </p>
              </div>

              {/* Search */}
              <div className="w-full lg:w-[350px]">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for products..."
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== FILTER BAR (MYNTRA STYLE) ===== */}
          <div className="sticky top-0 z-10 mt-5 flex flex-col gap-4  bg-gray-50/80 py-4 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
            {/* Left Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "Men", "Women", "Kids", "Sale"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 transition hover:border-pink-400 hover:text-pink-500"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Count */}
              <div className="hidden items-center gap-2 text-sm text-gray-500 md:flex">
                <FiGrid className="text-pink-500" />
                <span>{filteredProducts.length} Products</span>
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition hover:border-pink-400 hover:text-pink-500">
                <FiFilter />
                Filters
              </button>

              {/* Sort */}
              <select className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none hover:border-pink-400">
                <option>Recommended</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* ===== PRODUCTS ===== */}
          <div className="mt-6">
            {filteredProducts.length > 0 ? (
              <ProductCard data={filteredProducts} />
            ) : (
              <div className="mt-20 text-center text-gray-500">
                No products found
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductCategory;
