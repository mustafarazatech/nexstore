import { FiHelpCircle } from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";

const UserHelp = () => {
  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FiHelpCircle /> Help & Support
          </h1>

          <div className="bg-white border p-5 space-y-4 text-sm">
            <div>
              <p className="font-semibold">Where is my order?</p>
              <p className="text-xs text-gray-500">
                Track your order from "My Orders" section.
              </p>
            </div>

            <hr />

            <div>
              <p className="font-semibold">How to return a product?</p>
              <p className="text-xs text-gray-500">
                Go to orders → select product → click return.
              </p>
            </div>

            <hr />

            <div>
              <p className="font-semibold">Need more help?</p>
              <p className="text-xs text-gray-500">Contact support team 24/7</p>

              <button className="bg-pink-600 text-white px-4 py-2 text-xs mt-3">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default UserHelp;
