import { useState } from "react";
import { FiSearch, FiFilter, FiGrid } from "react-icons/fi";
import MainLayout from "../layouts/MainLayout";
import { useCategory } from "../context/category/category.context";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { state } = useCategory();

  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-50">
        {/* TOP BAR (MYNTRA STYLE COMPACT HEADER) */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* SEARCH */}
            <div className="relative w-full lg:w-[420px]">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm outline-none focus:border-pink-500"
              />
            </div>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
                <FiGrid />
                <span>20 items</span>
              </div>

              <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 text-xs hover:border-pink-500 hover:text-pink-500">
                <FiFilter />
                Filter
              </button>

              <button className="border border-gray-200 px-3 py-2 text-xs hover:border-gray-400">
                Sort: Newest
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY STRIP (MYNTRA STYLE PILLS) */}
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-1 text-xs rounded-full border whitespace-nowrap transition ${
                activeCategory === "All"
                  ? "bg-pink-600 text-white border-pink-600"
                  : "border-gray-200 text-gray-600 hover:border-pink-500 hover:text-pink-500"
              }`}
            >
              All
            </button>

            {state.categoryList.map((category) => (
              <button
                key={category._id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-1 text-xs rounded-full border whitespace-nowrap transition ${
                  activeCategory === category.name
                    ? "bg-pink-600 text-white border-pink-600"
                    : "border-gray-200 text-gray-600 hover:border-pink-500 hover:text-pink-500"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID AREA */}
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* OPTIONAL SMALL HEADING */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Showing products
            </h2>

            <span className="text-xs text-gray-500">Sort by relevance</span>
          </div>

          {/* GRID */}
          <ProductGrid search={search} category={activeCategory} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
