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
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* TOP SECTION (MYNTRA STYLE COMPACT) */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <FiShoppingBag className="text-white text-xl" />
              <h2 className="text-lg font-semibold">NexStore</h2>
            </div>

            <p className="mt-3 text-xs text-white/70 leading-relaxed">
              Fashion, electronics & lifestyle products for everyday shopping.
            </p>

            {/* SOCIAL */}
            <div className="mt-4 flex gap-2">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="p-2 bg-white/10 hover:bg-white/20 transition"
                  >
                    <Icon size={14} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>

            <ul className="mt-3 space-y-2 text-xs text-white/70">
              {["All Products", "Fashion", "Electronics", "Deals"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold">Support</h3>

            <ul className="mt-3 space-y-2 text-xs text-white/70">
              {["Help Center", "Shipping", "Returns", "Contact Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-semibold">Stay Updated</h3>

            <p className="mt-3 text-xs text-white/70">Get offers & updates.</p>

            <div className="mt-4 flex overflow-hidden bg-white/10">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent px-3 py-2 text-xs outline-none placeholder:text-white/50"
              />

              <button className="px-3 hover:bg-white/20 transition">
                <FiSend size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/10" />

        {/* BOTTOM (MYNTRA STYLE SIMPLE) */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-white/60">
          <p>© 2026 NexStore. All rights reserved.</p>

          <div className="flex gap-2">
            {["VISA", "MC", "UPI"].map((item) => (
              <span key={item} className="bg-white/10 px-2 py-1 text-[10px]">
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
