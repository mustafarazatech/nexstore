import Container from "../../components/common/Container";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import FormRow from "../../components/common/FormRow";
import { useCategory } from "../../context/category/category.context";
import AdminLayout from "../../layouts/AdminLayout";
import { NavLink } from "react-router-dom";

const AddCategory = () => {
  const { state, handleChange, handleSubmit, handleFileChange } = useCategory();
  return (
    <AdminLayout>
      <Container heading="Add Category" subHeading="Create and manage Category">
        <div className="flex justify-end mb-2">
          <div className="bg-pink px-4 py-2.5 text-white rounded">
            <NavLink to="/admin/category-list">Category List</NavLink>
          </div>
        </div>

        <Form onSubmit={(e: any) => handleSubmit(e)}>
          <FormRow>
            <Input
              label="Category Name"
              type="text"
              name="name"
              value={state.categoryForm.name}
              onChange={(e: any) => handleChange(e)}
              placeholder="Enter category name"
            />

            <Input
              label="Sub Category Name"
              type="text"
              name="subName"
              value={state.categoryForm.subName}
              onChange={(e: any) => handleChange(e)}
              placeholder="Enter sub category name"
            />
          </FormRow>

          {/* Upload Section */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Category Image
            </label>

            <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-cream p-8 transition-all hover:border-blue-900">
              <div className="flex flex-col items-center justify-center text-center">
                <svg
                  className="mb-4 h-12 w-12 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>

                <p className="mb-2 text-sm text-slate-300">
                  Upload category image
                </p>

                <p className="mb-4 text-xs text-slate-500">
                  PNG, JPG, JPEG up to 5MB
                </p>

                <input
                  type="file"
                  name="photo"
                  onChange={(e) => handleFileChange(e)}
                  className="block w-full text-sm text-slate-400
                    file:mr-4
                    file:rounded
                    file:border-0
                   file:bg-[#ff78ac]
                    file:px-5
                    file:py-3
                    file:font-medium
                    file:text-white
        "
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded bg-pink px-8 py-3 font-medium text-white shadow"
            >
              Add Category
            </button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

export default AddCategory;
