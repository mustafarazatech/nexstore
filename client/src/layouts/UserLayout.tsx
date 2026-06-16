import UserMenu from "../../data/UserMenu";
import UserSidebar from "../components/user/UserSidebar";
import MainLayout from "./MainLayout";

const UserLayout = ({ children }: any) => {
  return (
    <MainLayout>
      <div className="flex min-h-screen ">
        <UserSidebar menuItems={UserMenu} />

        <div className="flex-1 flex-col">
          {/* <Topbar /> */}

          <main className="flex-1 p-2">{children}</main>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserLayout;
