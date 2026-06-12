import {
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiPackage,
} from "react-icons/fi";
import AdminLayout from "../../layouts/AdminLayout";

const stats = [
  {
    title: "Revenue",
    value: "$24,560",
    icon: <FiDollarSign size={24} />,
  },
  {
    title: "Orders",
    value: "1,245",
    icon: <FiShoppingCart size={24} />,
  },
  {
    title: "Customers",
    value: "4,328",
    icon: <FiUsers size={24} />,
  },
  {
    title: "Products",
    value: "326",
    icon: <FiPackage size={24} />,
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-950">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>

            <p className="mt-2 text-slate-400">
              Welcome back, Admin 👋 Here's what's happening today.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
            <p className="text-sm text-slate-400">Today's Date</p>
            <p className="font-semibold text-white">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-xs text-green-400">
                    +12.5% from last month
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white shadow-lg shadow-blue-500/30">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Sales Overview */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Sales Overview
              </h2>

              <button className="rounded-xl bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">
                Last 30 Days
              </button>
            </div>

            <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/50">
              <div className="text-center">
                <div className="mb-3 text-5xl">📈</div>
                <p className="text-slate-400">Chart Integration Area</p>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Top Products
            </h2>

            <div className="space-y-4">
              {[
                "iPhone 16 Pro",
                "MacBook Air",
                "AirPods Pro",
                "Samsung S25",
              ].map((product, index) => (
                <div
                  key={product}
                  className="flex items-center justify-between rounded-2xl bg-slate-800/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                      #{index + 1}
                    </div>

                    <span className="text-slate-200">{product}</span>
                  </div>

                  <span className="text-sm text-green-400">Trending</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Orders</h2>

            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="pb-4 text-left text-sm font-medium text-slate-400">
                    Order ID
                  </th>

                  <th className="pb-4 text-left text-sm font-medium text-slate-400">
                    Customer
                  </th>

                  <th className="pb-4 text-left text-sm font-medium text-slate-400">
                    Amount
                  </th>

                  <th className="pb-4 text-left text-sm font-medium text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="py-5 text-white">#1001</td>

                  <td className="text-slate-300">John Doe</td>

                  <td className="font-semibold text-white">$450</td>

                  <td>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/30">
                  <td className="py-5 text-white">#1002</td>

                  <td className="text-slate-300">Sarah Smith</td>

                  <td className="font-semibold text-white">$180</td>

                  <td>
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
