import { useEffect } from "react";
import { useCategory } from "../../context/category/category.context";
import AdminLayout from "../../layouts/AdminLayout";
import Container from "../../components/common/Container";
import { NavLink } from "react-router-dom";
import Table from "../../components/common/Table";
import TableHeader from "../../components/common/TableHeader";

const CategoryList = () => {
  const { state, getCategoryList } = useCategory();

  useEffect(() => {
    getCategoryList();
  }, []);
  console.log(state.categoryList);
  return (
    <AdminLayout>
      <Container heading="Category List" subHeading="Mangae Category List">
        <div className="flex justify-end mb-2">
          <div className="bg-pink px-4 py-2.5 text-white rounded">
            <NavLink to="/admin/add-category">Add Category</NavLink>
          </div>
        </div>
        <Table>
          <TableHeader
            tableColumn={[
              "S.no",
              "Category-Image",
              "Name",
              "Sub-Category",
              "Actions",
            ]}
          />
          <tbody>
            {state.categoryList.map((item, index) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                {/* S.No */}
                <td className="px-4 py-3 text-center font-medium">
                  {index + 1}
                </td>

                {/* Image */}
                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <img
                      src={`http://localhost:3000/api/category-photo/${item._id}`}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover border"
                    />
                  </div>
                </td>

                {/* Name */}
                <td className="px-4 py-3 font-medium text-gray-800">
                  {item.name}
                </td>

                {/* Sub Category */}
                <td className="px-4 py-3 text-gray-600">
                  {item.subName || (
                    <span className="text-gray-400">Not Available</span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
                      Edit
                    </button>

                    <button className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                      Delete
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

export default CategoryList;
