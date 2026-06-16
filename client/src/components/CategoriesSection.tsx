import { useEffect } from "react";

import { useCategory } from "../context/category/category.context";
import { NavLink } from "react-router-dom";

const CategoriesSection = () => {
  const { state, getCategoryList } = useCategory();
  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 ">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-gray-500">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Explore Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Explore premium products across our most popular collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {state?.categoryList.map((item, index) => {
            // const Icon = category.icon;

            return (
              <NavLink to={`/product-category/${item._id}`}>
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded border border-white/30 bg-white/70 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-xl shadow-md"
                >
                  {/* Icon */}
                  <div className={`flex items-center justify-center rounded`}>
                    {/* <Icon size={30} /> */}
                    <img
                      src={`http://localhost:3000/api/category-photo/${item._id}`}
                      alt="logo"
                      className="w-20 h-20 rounded-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-5">
                    <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-pink-600">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 hover:text-gray-500">
                      Explore premium collections
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center text-sm font-semibold text-slate-900/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Shop Now →
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
