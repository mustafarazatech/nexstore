import { useEffect } from "react";
import { FiEdit, FiEye, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";

import Container from "../../components/common/Container";
import { useProduct } from "../../context/product/product.context";
import AdminLayout from "../../layouts/AdminLayout";
import { NavLink } from "react-router-dom";
import Table from "../../components/common/Table";
import TableHeader from "../../components/common/TableHeader";

const ProductList = () => {
  const { state, getProductList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <AdminLayout>
      <Container heading="Product List" subHeading="Mangae Product List">
        <div className="flex justify-end mb-2">
          <div className="bg-pink px-4 py-2.5 text-white rounded">
            <NavLink to="/admin/add-product">Add Product</NavLink>
          </div>
        </div>
        <Table>
          <TableHeader
            tableColumn={[
              "S.No",
              "Product",
              "Category",
              "Brand",
              "Price",
              "Stock",
              "Status",
              "Actions",
            ]}
          />
          <tbody>
            {state?.productList?.map((item, index) => (
              <tr
                key={item._id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                {/* S.No */}
                <td className="px-6 py-4 text-center font-medium text-slate-600">
                  {index + 1}
                </td>

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
        </Table>
      </Container>
    </AdminLayout>
  );
};

export default ProductList;
