import { FiPackage } from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";

const UserOrder = () => {
  //   import { useEffect } from "react";

  // import { useOrder } from "../context/order.context";
  // import { getOrders } from "../context/order.actions";

  // const Orders = () => {
  //   const { state, dispatch } = useOrder();

  //   useEffect(() => {
  //     getOrders(dispatch);
  //   }, []);

  //   return (
  //     <>
  //       {state.orders.map((order) => (
  //         <div key={order._id}>
  //           {order.orderId}
  //         </div>
  //       ))}
  //     </>
  //   );
  // };
  const orders = [
    {
      id: 1,
      product: "Smart Watch",
      status: "Delivered",
      date: "12 June 2026",
      price: 2499,
    },
    {
      id: 2,
      product: "Headphones",
      status: "Shipped",
      date: "15 June 2026",
      price: 1999,
    },
  ];

  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FiPackage /> My Orders
          </h1>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border p-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-sm font-semibold">{order.product}</h2>

                    <p className="text-xs text-gray-500">
                      Ordered on {order.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold">₹{order.price}</p>

                    <span
                      className={`text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default UserOrder;
