import {
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

export type UserMenuItem = {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
};

const UserMenu: UserMenuItem[] = [
  {
    id: 1,
    name: "Profile",
    path: "/user-profile",
    icon: <FiUser size={18} />,
  },
  {
    id: 2,
    name: "My Orders",
    path: "/user-order",
    icon: <FiShoppingBag size={18} />,
  },
  {
    id: 3,
    name: "Wishlist",
    path: "/user-whislist",
    icon: <FiHeart size={18} />,
  },
  {
    id: 4,
    name: "Settings",
    path: "/user-setting",
    icon: <FiSettings size={18} />,
  },
  {
    id: 5,
    name: "Help & Support",
    path: "/user-help",
    icon: <FiHelpCircle size={18} />,
  },
];

export default UserMenu;
