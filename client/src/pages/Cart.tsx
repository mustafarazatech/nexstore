import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";
import MainLayout from "../layouts/MainLayout";

const cartItems = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    title: "Modern Smart Watch",
    price: 149,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 300 ? 0 : 20;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <section className="relative min-h-screen overflow-hidden bg-slate-50 py-12">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-10">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Shopping Cart
            </span>

            <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Cart
              </span>
            </h1>

            <p className="mt-3 text-slate-500">
              Review your items before checkout.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/20 bg-white/70 p-5 shadow-lg backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-5 md:flex-row">
                    {/* Product Image */}
                    <div className="h-32 w-full overflow-hidden rounded-2xl bg-slate-100 md:w-32">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-slate-500">
                          Premium quality product
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity */}
                        <div className="flex items-center rounded-xl border border-slate-200 bg-white">
                          <button className="p-3 hover:bg-slate-50">
                            <FiMinus />
                          </button>

                          <span className="px-4 font-semibold">
                            {item.quantity}
                          </span>

                          <button className="p-3 hover:bg-slate-50">
                            <FiPlus />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-2xl font-bold text-slate-900">
                          ${item.price}
                        </div>

                        {/* Delete */}
                        <button className="rounded-xl p-3 text-red-500 transition hover:bg-red-50">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="sticky top-24 rounded-3xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-slate-900">
                  Order Summary
                </h2>

                {/* Coupon */}
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Coupon Code
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-slate-200">
                    <input
                      type="text"
                      placeholder="SAVE20"
                      className="flex-1 px-4 py-3 outline-none"
                    />

                    <button className="bg-slate-900 px-4 text-white">
                      <FiTag />
                    </button>
                  </div>
                </div>

                {/* Shipping Progress */}
                <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-blue-700">
                    Add{" "}
                    <span className="font-bold">
                      ${Math.max(0, 300 - subtotal)}
                    </span>{" "}
                    more for FREE shipping 🚚
                  </p>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{
                        width: `${Math.min((subtotal / 300) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-slate-900">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout */}
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">
                  Proceed to Checkout
                  <FiArrowRight />
                </button>

                <button className="mt-3 w-full rounded-2xl border border-slate-200 py-4 font-medium text-slate-700 transition hover:bg-slate-50">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* Empty Cart State (Use when cart is empty) */}
          {false && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="rounded-full bg-blue-100 p-8">
                <FiShoppingBag size={50} className="text-blue-600" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Your Cart is Empty
              </h2>

              <p className="mt-3 text-slate-500">
                Looks like you haven't added anything yet.
              </p>

              <button className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white">
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
