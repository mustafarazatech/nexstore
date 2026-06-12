import { useState } from "react";
import { FiSearch, FiFilter, FiGrid } from "react-icons/fi";
import ProductGrid from "../components/ProductGrid";
import MainLayout from "../layouts/MainLayout";

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
    <MainLayout>
      <section className="min-h-screen bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Title */}
              <div>
                <span className="inline-flex rounded-full bg-teal/10 px-4 py-1 text-sm font-semibold text-teal">
                  Premium Collection
                </span>

                <h1 className="mt-5 text-4xl font-bold text-gray-900">
                  Discover <span className="text-pink">Amazing Products</span>
                </h1>

                <p className="mt-3 max-w-xl text-gray-500">
                  Explore thousands of curated products designed for modern
                  shopping.
                </p>
              </div>

              {/* Search */}
              <div className="w-full lg:w-[380px]">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-teal text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-pink hover:text-pink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Count */}
              <div className="hidden items-center gap-2 text-sm text-gray-500 md:flex">
                <FiGrid className="text-teal" />
                <span>20 products</span>
              </div>

              {/* Filter */}
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-teal hover:text-teal">
                <FiFilter className="text-pink" />
                Filters
              </button>

              {/* Sort */}
              <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-pink hover:text-pink">
                Newest
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="mt-12">
            <ProductGrid search={search} category={activeCategory} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
