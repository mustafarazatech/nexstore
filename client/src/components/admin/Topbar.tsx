import { FiBell, FiSearch, FiMoon } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className=" flex items-center justify-between border-b border-slate-200 bg-white px-6 py-2.5 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-xs text-slate-500">Welcome back, Admin 👋</p>
        </div>

        {/* Search */}
        <div className="relative hidden lg:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search products, orders, customers..."
            className="w-[350px] rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Store Status */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-green-100 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-green-700">Store Live</span>
        </div>

        {/* Dark Mode */}
        <button className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100">
          <FiMoon size={18} />
        </button>

        {/* Notifications */}
        <button className="relative rounded-xl p-2.5 text-slate-600 hover:bg-slate-100">
          <FiBell size={18} />

          <span className="absolute right-2 top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
            5
          </span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
