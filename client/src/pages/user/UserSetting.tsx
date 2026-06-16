import { FiSettings } from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";

const UserSetting = () => {
  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FiSettings /> Settings
          </h1>

          <div className="bg-white border p-5 space-y-4 text-sm">
            <div>
              <p className="font-semibold">Account Security</p>
              <p className="text-xs text-gray-500">
                Change password and secure your account
              </p>
              <button className="text-pink-600 text-xs mt-2">
                Change Password
              </button>
            </div>

            <hr />

            <div>
              <p className="font-semibold">Notifications</p>
              <p className="text-xs text-gray-500">Manage email & SMS alerts</p>
            </div>

            <hr />

            <div>
              <p className="font-semibold text-red-500">Danger Zone</p>
              <p className="text-xs text-gray-500">
                Delete account permanently
              </p>
              <button className="text-red-500 text-xs mt-2">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default UserSetting;
