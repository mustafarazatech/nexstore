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
    <footer className="bg-pink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="text-pink text-2xl" />
              <h2 className="text-2xl font-bold">NexStore</h2>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Premium fashion, electronics, and lifestyle products for modern
              shopping.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="rounded-lg bg-white/10 p-2 hover:bg-pink transition"
                  >
                    <Icon size={16} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2 text-white/70">
              {["All Products", "Electronics", "Fashion", "Deals"].map(
                (item) => (
                  <li key={item} className="hover:text-pink cursor-pointer">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-white/70">
              {["Contact", "FAQs", "Shipping", "Returns"].map((item) => (
                <li key={item} className="hover:text-pink cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>

            <p className="mt-4 text-sm text-white/70">
              Get updates and offers.
            </p>

            <div className="mt-4 flex overflow-hidden rounded-lg bg-white/10">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/50"
              />

              <button className="bg-pink px-3">
                <FiSend />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NexStore. All rights reserved.</p>

          <div className="flex gap-3">
            {["VISA", "MC", "AMEX", "UPI"].map((item) => (
              <span
                key={item}
                className="rounded bg-white/10 px-2 py-1 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
