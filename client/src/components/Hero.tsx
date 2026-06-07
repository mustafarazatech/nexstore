import React from "react";
import { FiArrowRight, FiShoppingBag, FiStar } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-lg">
              <FiStar className="text-yellow-400" />
              <span className="text-sm text-gray-300">
                Trusted by 50,000+ happy customers
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Shop The
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg text-gray-400">
              Discover premium fashion, cutting-edge electronics,
              and lifestyle essentials curated for modern living.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold shadow-lg shadow-blue-500/30 transition hover:scale-105">
                Shop Now
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-lg transition hover:bg-white hover:text-black">
                Explore Deals
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-gray-400">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-gray-400">Premium Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-gray-400">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            {/* Main Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-500 to-purple-600" />

              <div className="mt-6">
                <h3 className="text-2xl font-bold">
                  Premium Collection
                </h3>

                <p className="mt-2 text-gray-400">
                  New arrivals crafted for trendsetters.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-3xl font-bold">$199</span>

                  <button className="rounded-xl bg-white px-4 py-2 text-black transition hover:bg-gray-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-10 top-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <FiShoppingBag className="text-blue-400" />
                <div>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-sm text-gray-400">
                    Free shipping worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Review Card */}
            <div className="absolute -right-8 bottom-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block">
              <div className="flex items-center gap-2 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-1 text-sm text-gray-300">
                Rated 4.9/5 by customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;