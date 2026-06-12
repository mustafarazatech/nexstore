import { useEffect } from "react";
import { FiEdit, FiEye, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";

import Container from "../../components/common/Container";
import { useProduct } from "../../context/product/product.context";
import AdminLayout from "../../layouts/AdminLayout";

const ProductList = () => {
  const { state, getProductList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <AdminLayout>
      <Container>
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Product Management
            </h1>
            <p className="text-sm text-slate-500">
              Manage all products in your store
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <FiPlus />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Product</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Brand</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Stock</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {state?.productList?.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    {/* Product */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`http://localhost:3000/api/admin/product-photo/${item._id}`}
                          alt={item.name}
                          className="h-14 w-14 rounded-xl border object-cover"
                        />

                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {item.name}
                          </h3>

                          <p className="text-xs text-slate-500">
                            {/* ID: {item._id.slice(-6)} */}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 text-slate-600">
                      {typeof item.category === "object"
                        ? item.category?.name
                        : item.category}
                    </td>

                    {/* Brand */}
                    <td className="px-6 py-4 text-slate-600">
                      {item.brand || "-"}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold">
                          ₹{Number(item.price).toLocaleString()}
                        </p>

                        {item.discountPrice && (
                          <p className="text-sm text-green-600">
                            ₹{Number(item.discountPrice).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          Number(item.stock) > 10
                            ? "bg-green-100 text-green-700"
                            : Number(item.stock) > 0
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.stock} Units
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
                          <FiEye />
                        </button>

                        <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                          <FiEdit />
                        </button>

                        <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {state?.productList?.length === 0 && (
              <div className="py-16 text-center">
                <h3 className="text-lg font-semibold text-slate-700">
                  No Products Found
                </h3>
                <p className="mt-2 text-slate-500">
                  Start by adding your first product.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default ProductList;
