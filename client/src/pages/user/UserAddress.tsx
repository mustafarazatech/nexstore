import { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";

const UserAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      line: "12, Civil Lines",
      city: "Aligarh",
      state: "Uttar Pradesh",
      pincode: "202001",
      type: "Home",
      isDefault: true,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      line: "Tech Park, Sector 62",
      city: "Noida",
      state: "UP",
      pincode: "201301",
      type: "Work",
      isDefault: false,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    line: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });

  const addAddress = (e) => {
    e.preventDefault();

    setAddresses([
      ...addresses,
      {
        id: Date.now(),
        ...form,
        isDefault: false,
      },
    ]);

    setForm({
      name: "",
      phone: "",
      line: "",
      city: "",
      state: "",
      pincode: "",
      type: "Home",
    });

    setOpen(false);
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const setDefault = (id) => {
    setAddresses(
      addresses.map((a) =>
        a.id === id ? { ...a, isDefault: true } : { ...a, isDefault: false },
      ),
    );
  };

  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-5xl px-4">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-semibold text-gray-900">
              My Addresses
            </h1>
          </div>

          {/* ADDRESS LIST */}
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`bg-white border p-4 ${
                  addr.isDefault ? "border-pink-500" : "border-gray-200"
                }`}
              >
                {/* TOP */}
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-sm text-gray-900">
                    {addr.name}{" "}
                    <span className="text-xs text-gray-500">({addr.type})</span>
                  </div>

                  {addr.isDefault && (
                    <span className="text-xs text-pink-600 font-semibold">
                      Default
                    </span>
                  )}
                </div>

                {/* ADDRESS */}
                <p className="text-xs text-gray-600 mt-2">
                  {addr.line}, {addr.city}, {addr.state} - {addr.pincode}
                </p>

                <p className="text-xs text-gray-600 mt-1">📞 {addr.phone}</p>

                {/* ACTIONS */}
                <div className="flex gap-4 mt-4 text-xs">
                  <button className="flex items-center gap-1 text-pink-600">
                    <FiEdit />
                    Edit
                  </button>

                  <button
                    onClick={() => deleteAddress(addr.id)}
                    className="flex items-center gap-1 text-gray-600"
                  >
                    <FiTrash2 />
                    Delete
                  </button>

                  {!addr.isDefault && (
                    <button
                      onClick={() => setDefault(addr.id)}
                      className="text-gray-600"
                    >
                      Set Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default UserAddress;
