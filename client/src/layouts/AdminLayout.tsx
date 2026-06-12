import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminLayout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-2">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
