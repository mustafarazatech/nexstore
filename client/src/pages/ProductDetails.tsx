import MainLayout from "../layouts/MainLayout";
import { FiShoppingBag } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/product/product.context";
import { useEffect } from "react";
import { useCart } from "../context/cart/cart.context";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { state, getProductDetail, handleQuantity } = useProduct();
  const { handleCart } = useCart();

  const product = state?.productDetail;
  const loading = false;

  useEffect(() => {
    if (!id) return;
    getProductDetail(id);
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="py-20 text-center text-sm text-gray-600">
          Loading product...
        </div>
      </MainLayout>
    );
  }

  if (!product?._id) {
    return (
      <MainLayout>
        <div className="py-20 text-center text-sm text-gray-600">
          Product not found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: IMAGE (MYNTRA STYLE) */}
          <div className="">
            <img
              src={`http://localhost:3000/api/admin/product-photo/${product._id}`}
              alt={product.name}
              className="h-[520px] w-[500px] object-contain"
            />
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-4">
            {/* BRAND */}
            <p className="text-xs font-semibold uppercase text-pink-600 tracking-wide">
              {product.brand}
            </p>

            {/* TITLE */}
            <h1 className="text-lg font-semibold text-gray-900 leading-snug">
              {product.name}
            </h1>

            {/* DESCRIPTION (compact like Myntra) */}
            <p className="text-xs text-gray-500 line-clamp-3">
              {product.description}
            </p>

            {/* PRICE BLOCK */}
            <div className="flex items-end gap-3 pt-2">
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price}
              </span>

              {product.discountPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.discountPrice}
                </span>
              )}

              <span className="text-xs font-semibold text-green-600">
                (Flat Offer)
              </span>
            </div>
            <div className="quantity flex w-[200px] cursor-pointer ">
              <div className="border border-gray-200 flex flex-1/2 justify-between  text-2xl rounded px-4">
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleQuantity("inc")}
                  >
                    +
                  </button>
                </div>
                <div> {state.quantity}</div>
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleQuantity("dec")}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            {/* DELIVERY STRIP (MYNTRA STYLE) */}
            <div className="bg-white border border-gray-100 p-3 text-xs text-gray-600">
              <span className="font-semibold text-gray-800">Delivery:</span> 2–4
              days • Free delivery on orders above ₹499
            </div>

            {/* PRODUCT INFO CARD */}
            <div className="bg-white border border-gray-100 p-4 text-sm space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Brand</span>
                <span className="font-medium text-gray-900">
                  {product.brand}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Category</span>
                <span className="font-medium text-gray-900">
                  {product.category?.name || product.category}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Stock</span>
                <span className="font-medium text-gray-900">
                  {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* ACTIONS (MYNTRA STYLE BUTTONS) */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() =>
                  handleCart(product?._id, product.price, state.quantity)
                }
                className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-3 text-sm font-semibold hover:bg-pink-700 uppercase"
              >
                <FiShoppingBag />
                Add to Bag
              </button>

              <button className="flex-1 border border-gray-300 text-gray-800 py-3 text-sm font-semibold hover:bg-gray-100 uppercase">
                Wishlist
              </button>
            </div>

            {/* BUY NOW (SECONDARY CTA) */}
            {/* <button className="w-full border border-black py-3 text-sm font-semibold text-black hover:bg-black hover:text-white uppercase">
              Buy Now
            </button> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
