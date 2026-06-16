import AdminMenu from "../../data/AdminMenu";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import { useTheme } from "../context/theme/theme.context";

const AdminLayout = ({ children }: any) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      <Sidebar menuItems={AdminMenu} />

      <div className="flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-2">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
