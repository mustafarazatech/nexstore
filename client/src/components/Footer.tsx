import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiShoppingBag,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <FiShoppingBag className="text-3xl text-blue-500" />

              <h2 className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent">
                NexStore
              </h2>
            </div>

            <p className="mt-5 max-w-md text-slate-400">
              Discover premium fashion, electronics, and lifestyle
              products designed for modern shoppers. Quality,
              affordability, and style in one place.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold">Shop</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              {[
                "All Products",
                "Electronics",
                "Fashion",
                "Accessories",
                "Deals",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold">Support</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              {[
                "Contact Us",
                "FAQs",
                "Shipping",
                "Returns",
                "Track Order",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold">Stay Updated</h3>

            <p className="mt-4 text-sm text-slate-400">
              Subscribe to receive updates, special offers, and
              exclusive discounts.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-500"
              />

              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-white">
                <FiSend />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 NexStore. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex gap-3">
            {["VISA", "MC", "AMEX", "UPI"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;