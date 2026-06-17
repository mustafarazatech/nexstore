import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/auth/auth.context";
import { useCart } from "../context/cart/cart.context";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const {
    state: { profileList },
  } = useAuth();

  const {
    state: { cartList },
    profileId,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const selectedAddress = profileList?.[profileId];

  const totalMrp = cartList.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const discountedTotal = cartList.reduce(
    (acc, item) => acc + item.product.discountPrice * item.quantity,
    0,
  );

  const discount = totalMrp - discountedTotal;
  const platformFee = 20;
  const shipping = 0;

  const total = discountedTotal + platformFee + shipping;

  const handlePlaceOrder = () => {
    console.log({
      cartList,
      selectedAddress,
      paymentMethod,
      total,
    });
  };
  if (!profileId) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-[#fafafa] py-6">
        <div className="mx-auto max-w-6xl px-4">
          {/* HEADER */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Checkout</h1>

            <div className="text-xs font-semibold text-gray-400">
              BAG → ADDRESS → PAYMENT
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* LEFT SIDE */}
            <div className="space-y-5 lg:col-span-2">
              {/* ADDRESS */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Delivery Address
                  </h2>

                  <button className="text-xs font-semibold uppercase text-pink-600">
                    Change
                  </button>
                </div>

                {selectedAddress ? (
                  <div className="flex gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-pink-600"></div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {selectedAddress.mobileNo}
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        {selectedAddress.address}
                      </p>

                      <p className="text-sm text-gray-600">
                        {selectedAddress.stateName} - {selectedAddress.pinCode}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-red-500">No address selected</p>
                )}
              </div>

              {/* ORDER ITEMS */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  {cartList.map((item) => (
                    <div key={item.product._id} className="flex gap-4">
                      <img
                        src={`http://localhost:3000/api/admin/product-photo/${item.product._id}`}
                        className="h-24 w-20 rounded-xl object-cover"
                      />

                      <div className="flex flex-1 justify-between">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {item.product.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <span className="font-semibold">
                              ₹{item.product.discountPrice}
                            </span>

                            <span className="text-xs text-gray-400 line-through">
                              ₹{item.product.price}
                            </span>
                          </div>
                        </div>

                        <div className="text-sm font-semibold text-gray-900">
                          ₹{item.product.discountPrice * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAYMENT */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Payment Method
                </h2>

                <div className="space-y-3">
                  {[
                    { id: "cod", label: "Cash On Delivery" },
                    { id: "upi", label: "UPI Payment" },
                    { id: "card", label: "Card Payment" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-4 transition ${
                        paymentMethod === method.id
                          ? "bg-pink-50"
                          : "bg-gray-50"
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {method.label}
                      </span>

                      <input
                        type="radio"
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <div className="sticky top-5 rounded-2xl bg-white p-6 shadow-md">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Price Details
                </h2>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Total MRP</span>
                    <span>₹{totalMrp}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="text-green-600">-₹{discount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>₹{platformFee}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  You are saving ₹{discount}
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-5 w-full rounded-xl bg-pink-600 py-4 text-sm font-bold text-white transition hover:bg-pink-700"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Checkout;
