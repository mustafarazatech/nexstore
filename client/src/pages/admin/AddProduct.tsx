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
      <Container heading="Add Product">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
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

              {/* Image Upload */}
              <div className="mb-8 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <h6 className="mb-2 text-lg font-semibold text-slate-800">
                  Upload Product Image
                </h6>

                <p className="mb-4 text-sm text-slate-500">
                  JPG, PNG supported
                </p>

                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full rounded-lg border border-slate-300 bg-white p-2"
                />

                {state.productForm.photo && (
                  <p className="mt-3 text-sm font-medium text-green-600">
                    {state.productForm.photo.name}
                  </p>
                )}
              </div>

              {/* Status */}
              <div className="mb-8 flex items-center justify-between rounded-xl border border-slate-200 p-5">
                <div>
                  <h6 className="font-semibold text-slate-800">
                    Product Status
                  </h6>

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
              <div className="flex justify-end">
                <Button type="submit">Publish Product</Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default AddProduct;
