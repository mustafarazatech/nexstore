import MainLayout from "../../layouts/MainLayout";
import { FiHeart, FiTrash2, FiShoppingBag } from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";

const UserWishlist = () => {
  const items = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
  ];

  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FiHeart /> My Wishlist
          </h1>

          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white border p-4 flex gap-4">
                <img src={item.image} className="w-20 h-20 object-cover" />

                <div className="flex-1">
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-xs text-gray-500 mt-1">₹{item.price}</p>

                  <div className="flex gap-4 mt-3 text-xs">
                    <button className="flex items-center gap-1 text-pink-600">
                      <FiShoppingBag /> Move to Bag
                    </button>

                    <button className="flex items-center gap-1 text-gray-600">
                      <FiTrash2 /> Remove
                    </button>
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

export default UserWishlist;
