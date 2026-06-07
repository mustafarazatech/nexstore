import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingBag,
  FiUser,
  FiSearch,
  FiHome,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }:any) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >
            <FiShoppingBag className="text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NexStore
            </span>
          </NavLink>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-xl">
              <FiSearch
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products, brands and more..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm text-gray-700 shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              <FiHome size={18} />
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              <FiShoppingBag size={18} />
              Shop
            </NavLink>

            <button className="relative rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 hover:text-red-500">
              <FiHeart size={20} />
            </button>

            <NavLink to="/cart" className={navLinkClass}>
              <div className="relative">
                <FiShoppingCart size={18} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-bold text-white shadow-md">
                  0
                </span>
              </div>

              Cart
            </NavLink>

            <NavLink
              to="/login"
              className="ml-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <FiUser size={18} />
              Login
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 py-2.5 pl-11 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Mobile Nav Links */}
          <nav className="space-y-2">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <FiHome />
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <FiShoppingBag />
              Shop
            </NavLink>

            <NavLink
              to="/cart"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <FiShoppingCart />
              Cart (0)
            </NavLink>

            <NavLink
              to="/wishlist"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <FiHeart />
              Wishlist
            </NavLink>

            <NavLink
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-medium text-white shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <FiUser />
              Login
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;