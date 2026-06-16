import { MdDashboard, MdBorderOuter } from "react-icons/md";
import { SiPeerlist } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiTag,
  FiSettings,
  FiCreditCard,
  FiUser,
  FiList,
} from "react-icons/fi";

export type AdminMenuItem = {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
};

const AdminMenu: AdminMenuItem[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboard size={18} />,
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
    icon: <FiList size={18} />,
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
    icon: <SiPeerlist size={18} />,
  },
  {
    id: 6,
    name: "Users",
    path: "/admin/users",
    icon: <FaUserAlt size={18} />,
  },
  {
    id: 8,
    name: "Cart",
    path: "/admin/cart",
    icon: <FiShoppingCart size={18} />,
  },
  {
    id: 7,
    name: "Orders",
    path: "/admin/orders",
    icon: <MdBorderOuter size={18} />,
  },

  {
    id: 9,
    name: "Payments",
    path: "/admin/payments",
    icon: <FaIndianRupeeSign size={18} />,
  },
  {
    id: 10,
    name: "Profile",
    path: "/admin/profile",
    icon: <FiUser size={18} />,
  },
  {
    id: 11,
    name: "Settings",
    path: "/admin/settings",
    icon: <FiSettings size={18} />,
  },
];

export default AdminMenu;
