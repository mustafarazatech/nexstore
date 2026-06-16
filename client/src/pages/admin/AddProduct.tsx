import { NavLink } from "react-router-dom";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import Form from "../../components/common/Form";
import FormRow from "../../components/common/FormRow";
import Input from "../../components/common/Input";
import { useCategory } from "../../context/category/category.context";
import { useProduct } from "../../context/product/product.context";
import AdminLayout from "../../layouts/AdminLayout";

const AddProduct = () => {
  const { state, handleChange, handleFileChange, handleSubmit } = useProduct();
  const {
    state: { categoryList },
  } = useCategory();

  return (
    <AdminLayout>
      <Container heading="Add Product" subHeading="Add and mange Product">
        <div className="flex justify-end mb-2">
          <div className="bg-pink px-4 py-2.5 text-white rounded">
            <NavLink to="/admin/product-list">Product List</NavLink>
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          {/* Product Information */}
          <div className="mb-8">
            <h4 className="mb-4 text-xl font-semibold text-slate-800">
              Product Information
            </h4>

            <FormRow>
              <Input
                label="Product Name"
                name="name"
                type="text"
                placeholder="Nike Air Max 270"
                value={state.productForm.name}
                onChange={handleChange}
              />
            </FormRow>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-500"
                name="description"
                rows={5}
                placeholder="Write Product Description"
                value={state.productForm.description}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8 rounded-xl border border-slate-200 p-5">
            <h5 className="mb-4 text-lg font-semibold text-slate-800">
              Pricing
            </h5>

            <FormRow>
              <Input
                label="Price"
                name="price"
                type="number"
                placeholder="999"
                value={state.productForm.price}
                onChange={handleChange}
              />

              <Input
                label="Discount Price"
                name="discountPrice"
                type="number"
                placeholder="799"
                value={state.productForm.discountPrice}
                onChange={handleChange}
              />
            </FormRow>
          </div>

          {/* Inventory */}
          <div className="mb-8 rounded-xl border border-slate-200 p-5">
            <h5 className="mb-4 text-lg font-semibold text-slate-800">
              Inventory
            </h5>

            <FormRow>
              <Input
                label="Stock Quantity"
                name="stock"
                type="number"
                placeholder="100"
                value={state.productForm.stock}
                onChange={handleChange}
              />

              <Input
                label="Brand"
                name="brand"
                type="text"
                placeholder="Nike"
                value={state.productForm.brand}
                onChange={handleChange}
              />
            </FormRow>
          </div>

          {/* Category */}
          <div className="mb-8 rounded-xl border border-slate-200 p-5">
            <h5 className="mb-4 text-lg font-semibold text-slate-800">
              Category
            </h5>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Select Category
            </label>

            <select
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-500"
              name="category"
              value={state.productForm.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>

              {categoryList.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Section */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Product Image
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

          {/* Status */}
          <div className="mb-8 flex items-center justify-between rounded-xl border border-slate-200 p-5">
            <div>
              <h6 className="font-semibold text-slate-800">Product Status</h6>

              <p className="text-sm text-slate-500">
                Make product visible in store
              </p>
            </div>

            <input
              type="checkbox"
              name="isActive"
              checked={state.productForm.isActive}
              onChange={handleChange}
              className="h-5 w-5 accent-blue-600"
            />
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded bg-pink px-8 py-3 font-medium text-white shadow"
            >
              Add Product
            </button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

export default AddProduct;
