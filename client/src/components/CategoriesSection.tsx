import React from "react";
import {
  FiSmartphone,
  FiShoppingBag,
  FiWatch,
  FiHome,
  FiGift,
} from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";

const categories = [
  {
    name: "Electronics",
    icon: FiSmartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Fashion",
    icon: FiShoppingBag,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Shoes",
    icon: GiRunningShoe,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Accessories",
    icon: FiWatch,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Beauty",
    icon: FiGift,
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Home",
    icon: FiHome,
    color: "from-emerald-500 to-green-500",
  },
];

const CategoriesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 ">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Explore thousands of premium products across our most popular
            collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl shadow"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-5">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Explore premium collections
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-5 flex items-center text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Shop Now →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
