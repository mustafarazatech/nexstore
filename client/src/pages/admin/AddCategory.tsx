import Container from "../../components/common/Container";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import FormRow from "../../components/common/FormRow";
import Button from "../../components/common/Button";
import { useCategory } from "../../context/category/category.context";
import AdminLayout from "../../layouts/AdminLayout";

const AddCategory = () => {
  const { state, handleChange, handleSubmit, handleFileChange } = useCategory();
  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-950 p-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Add New Category</h1>
            <p className="mt-2 text-slate-400">
              Create and organize product categories for your store.
            </p>
          </div>

          {/* Form Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
            <div className="border-b border-slate-800 px-8 py-6">
              <h2 className="text-lg font-semibold text-white">
                Category Information
              </h2>
            </div>

            <div className="p-8">
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

                  <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-slate-800/50 p-8 transition-all hover:border-blue-500">
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
                    file:rounded-xl
                    file:border-0
                    file:bg-gradient-to-r
                    file:from-blue-600
                    file:to-cyan-500
                    file:px-5
                    file:py-3
                    file:font-medium
                    file:text-white
                    hover:file:opacity-90"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50"
                  >
                    Add Category
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddCategory;
