import { useEffect } from "react";
import { useCategory } from "../../context/category/category.context";
import AdminLayout from "../../layouts/AdminLayout";

const CategoryList = () => {
  const { state, getCategoryList } = useCategory();

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-950 p-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Category List</h1>
              <p className="mt-2 text-slate-400">
                Manage all product categories from one place.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
              <p className="text-sm text-slate-400">Total Categories</p>
              <p className="text-xl font-bold text-white">
                {state?.categoryList?.length || 0}
              </p>
            </div>
          </div>

          {/* Table Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
            <div className="border-b border-slate-800 px-6 py-5">
              <h2 className="text-lg font-semibold text-white">Categories</h2>
            </div>

            {state?.categoryList?.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900">
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                        #
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Image
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Category Name
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Sub Category
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.categoryList.map((item, index) => (
                      <tr
                        key={item._id}
                        className="border-b border-slate-800 transition hover:bg-slate-800/50"
                      >
                        <td className="px-6 py-4 text-slate-300">
                          {index + 1}
                        </td>

                        <td className="px-6 py-4">
                          <img
                            src={`http://localhost:3000/api/admin/category-photo/${item._id}`}
                            alt={item.name}
                            className="h-16 w-16 rounded-2xl border border-slate-700 object-cover"
                          />
                        </td>

                        <td className="px-6 py-4">
                          <div className="font-semibold text-white">
                            {item.name}
                          </div>
                        </td>

                        <td className="px-6 py-4 text-slate-300">
                          {item.subName || (
                            <span className="text-slate-500">
                              Not Available
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <svg
                  className="mb-4 h-16 w-16 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 17v-2a4 4 0 014-4h8m-8 0V9a4 4 0 014-4h4"
                  />
                </svg>

                <h3 className="text-lg font-semibold text-white">
                  No Categories Found
                </h3>

                <p className="mt-2 text-slate-500">
                  Categories will appear here after creation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CategoryList;
