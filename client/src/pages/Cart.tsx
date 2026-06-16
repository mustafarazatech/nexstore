import { FiMinus, FiPlus } from "react-icons/fi";
import MainLayout from "../layouts/MainLayout";
import AddressStrip from "../components/common/AddressStrip";
import { useAuth } from "../context/auth/auth.context";
import { useCart } from "../context/cart/cart.context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state } = useAuth();
  const navigate = useNavigate();

  const {
    state: { cartList },
  } = useCart();

  const subtotal = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <section className="min-h-screen bg-gray-50">
        {/* HEADER */}
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <AddressStrip item={state.profileList} />

          <h1 className="mt-4 text-lg font-semibold text-gray-800">
            My Bag{" "}
            <span className="text-gray-500">
              ({cartList.length} {cartList.length === 1 ? "item" : "items"})
            </span>
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-3">
          {/* CART ITEMS */}
          <div className="space-y-3 lg:col-span-2">
            {cartList.length === 0 ? (
              <div className="rounded-md border bg-white p-8 text-center text-gray-500">
                Your cart is empty
              </div>
            ) : (
              cartList.map((item) => (
                <div
                  key={item.product._id}
                  className="flex border border-gray-100 bg-white p-4 shadow-sm"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="h-28 w-24 overflow-hidden bg-gray-100">
                    <img
                      src={`http://localhost:3000/api/admin/product-photo/${item.product._id}`}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="ml-4 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="line-clamp-1 text-sm font-semibold text-gray-900">
                        {item.product.name}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                        {item.product.description}
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          ₹{item.product.discountPrice}
                        </span>

                        {item.product.discountPrice !== item.product.price && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{item.product.price}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-3 flex gap-4 text-[11px] font-semibold uppercase text-gray-500">
                      <button className="hover:text-pink-600">Remove</button>

                      <span className="text-gray-300">|</span>

                      <button className="hover:text-pink-600">Wishlist</button>

                      <span className="text-gray-300">|</span>

                      <button className="hover:text-pink-600">Similar</button>
                    </div>
                  </div>

                  {/* PRICE + QUANTITY */}
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-sm font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </div>

                    <div className="mt-6 flex items-center border border-gray-200">
                      <button className="px-2 py-1 hover:bg-gray-100">
                        <FiMinus size={12} />
                      </button>

                      <span className="px-3 text-xs font-medium">
                        {item.quantity}
                      </span>

                      <button className="px-2 py-1 hover:bg-gray-100">
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* PRICE SUMMARY */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 border border-gray-100 bg-white p-4 shadow-sm">
              <h2 className="text-xs font-bold uppercase text-gray-500">
                Price Details ({cartList.length}{" "}
                {cartList.length === 1 ? "Item" : "Items"})
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Total MRP</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>

                  <span
                    className={
                      shipping === 0 ? "font-medium text-green-600" : ""
                    }
                  >
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between border-t pt-3 font-bold text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-pink-600 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-pink-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
