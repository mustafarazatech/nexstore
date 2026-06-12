import { AiFillDashboard } from "react-icons/ai";
import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiTag,
  FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <AiFillDashboard size={18} />,
    },
    {
      id: 2,
      name: "Add Category",
      path: "/admin/add-category",
      icon: <FiTag size={18} />,
    },
    {
      id: 3,
      name: "Category List",
      path: "/admin/category-list",
      icon: <FiTag size={18} />,
    },
    {
      id: 4,
      name: "Add Product",
      path: "/admin/add-product",
      icon: <FiPackage size={18} />,
    },
    {
      id: 5,
      name: "Product List",
      path: "/admin/product-list",
      icon: <FiShoppingCart size={18} />,
    },
    { id: 6, name: "Users", path: "/admin/users", icon: <FiUsers size={18} /> },
    {
      id: 7,
      name: "Settings",
      path: "/admin/settings",
      icon: <FiSettings size={18} />,
    },
  ];

  const linkClass = ({ isActive }: any) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-teal text-white"
        : "text-gray-600 hover:bg-cream hover:text-teal"
    }`;

  return (
    <aside className="w-50  bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="border-b border-gray-200 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal text-white font-bold">
            N
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">NexStore</h1>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 p-3">
        {menuItems.map((item) => (
          <NavLink key={item.id} to={item.path} className={linkClass}>
            <span className="text-teal">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
