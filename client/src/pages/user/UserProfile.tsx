import {
  FiEdit,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiPlus,
} from "react-icons/fi";
import UserLayout from "../../layouts/UserLayout";
import { useState } from "react";
import { useAuth } from "../../context/auth/auth.context";
import AddressStrip from "../../components/common/AddressStrip";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const { state, handleProfileChange, handleProfileSubmit } = useAuth();

  return (
    <UserLayout>
      <section className="min-h-screen bg-gray-50 py-8">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 text-sm"
        >
          <FiPlus />
          Add Address
        </button>
        {/* MODAL FORM */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-lg rounded-lg bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Add New Delivery Address
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-400 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              <form
                className="max-h-[50vh] overflow-y-auto p-6"
                onSubmit={(e) => handleProfileSubmit(e)}
              >
                {/* Contact Details */}
                <div className="mb-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Contact Details
                  </h3>

                  <div className="space-y-4">
                    {/* <input
                      name="name"
                      placeholder="Full Name*"
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                    /> */}

                    <input
                      name="mobileNo"
                      value={state.profileObj.mobileNo}
                      placeholder="Mobile Number*"
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Address
                  </h3>

                  <div className="space-y-4">
                    <input
                      name="address"
                      value={state.profileObj.address}
                      placeholder="House No, Building Name, Street*"
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        name="city"
                        value={state.profileObj.city}
                        placeholder="City*"
                        onChange={handleProfileChange}
                        className="rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                      />

                      <input
                        name="stateName"
                        value={state.profileObj.stateName}
                        placeholder="State*"
                        onChange={handleProfileChange}
                        className="rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                      />
                    </div>

                    <input
                      name="pinCode"
                      value={state.profileObj.pinCode}
                      placeholder="Pincode*"
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
                      type="number"
                    />
                  </div>
                </div>

                {/* Address Type */}
                {/* <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-gray-700">
                    Save address as
                  </p>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="rounded-full border border-pink-600 bg-pink-50 px-5 py-2 text-sm font-medium text-pink-600"
                    >
                      Home
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600"
                    >
                      Work
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600"
                    >
                      Other
                    </button>
                  </div>
                </div> */}

                {/* Footer */}
                <div className="mt-8 flex gap-3  pt-5">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-md border border-gray-300 py-3 text-sm font-medium text-gray-700"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-md bg-pink py-3 text-sm font-semibold text-white"
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="container mx-auto mt-6 grid gap-4 md:grid-cols-2">
          <AddressStrip item={state.profileList} />
        </div>
      </section>
    </UserLayout>
  );
};

export default UserProfile;
