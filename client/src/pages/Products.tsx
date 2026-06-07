import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiGrid,
  FiChevronDown,
} from "react-icons/fi";
import ProductGrid from "../components/ProductGrid";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Shoes",
  "Accessories",
  "Beauty",
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-12">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero Header */}
        <div className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-lg backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                Premium Collection
              </span>

              <h1 className="mt-4 text-4xl font-black md:text-5xl">
                Discover
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Amazing Products
                </span>
              </h1>

              <p className="mt-3 text-lg text-slate-500">
                Explore thousands of products curated for modern shoppers.
              </p>
            </div>

            {/* Search */}
            <div className="w-full lg:w-[400px]">
              <div className="relative">
                <FiSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Product Count */}
            <div className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
              <FiGrid />
              <span>Showing 20 products</span>
            </div>

            {/* Filter */}
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600">
              <FiFilter />
              Filters
            </button>

            {/* Sort */}
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-300">
              Newest
              <FiChevronDown />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="mt-12">
          {/* <ProductGrid search={search} category={activeCategory} /> */}
          <ProductGrid/>
        </div>
      </div>
    </section>
  );
};

export default Products;