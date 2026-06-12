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
import { useAuth } from "../context/auth/auth.context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-cream text-teal font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-teal"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900"
          >
            <FiShoppingBag className="text-pink" />
            <span>NexStore</span>
          </NavLink>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-1/2">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded border border-gray-200  py-2.5 pl-11 pr-4 text-sm outline-none focus:border-teal"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              <FiHome size={18} />
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              <FiShoppingBag size={18} />
              Shop
            </NavLink>

            <NavLink to="/cart" className={navLinkClass}>
              <FiShoppingCart size={18} />
              Cart
            </NavLink>

            {loading ? null : user ? (
              <NavLink to="/profile" className={navLinkClass}>
                <FiUser size={18} />
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="rounded bg-pink px-6 py-2 text-white hover:opacity-90 transition"
              >
                Login
              </NavLink>
            )}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-2">
          {/* Search */}
          <div className="relative mb-3">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-cream py-2.5 pl-11 pr-4 text-sm outline-none focus:border-teal"
            />
          </div>

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
            Cart
          </NavLink>

          {user ? (
            <NavLink
              to="/profile"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              <FiUser />
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="block rounded-lg bg-pink px-4 py-2 text-center text-white"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
