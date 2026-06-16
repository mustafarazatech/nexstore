import { NavLink } from "react-router-dom";

const UserSidebar = ({ menuItems }: any) => {
  const linkClass = ({ isActive }: any) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-pink text-white"
        : "text-gray-600 hover:bg-cream hover:text-teal"
    }`;

  return (
    <aside className="w-50 border-r border-gray-200">
      {/* Menu */}
      <nav className="flex flex-col gap-1 p-3">
        {menuItems?.map((item: any) => (
          <NavLink key={item.id} to={item.path} className={linkClass}>
            <span className="text-teal">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default UserSidebar;
