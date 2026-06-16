import { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiHome,
  FiHash,
  FiEdit3,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";

const AddressStrip = ({ item }: any) => {
  const [select, setSelect] = useState(null);
  const handleSelect = (item, id) => {
    // console.log(item, id);
    setSelect(id);
  };
  console.log(select);
  return (
    <div className="flex flex-col  gap-2 ">
      {item?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-between rounded-md px-4 py-2 transition border ${
              index === select
                ? "border-pink-600 bg-pink"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
            onClick={() => handleSelect(item, index)}
          >
            {/* LEFT SIDE */}
            <div className="flex flex-1 items-center gap-4 overflow-hidden">
              <FiCheckCircle className="text-lg text-gray-300" />

              <div className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  Address {index + 1}
                </span>

                <div className="flex items-center gap-1">
                  <FiPhone className="text-xs text-gray-400" />
                  <span>{item.mobileNo}</span>
                </div>

                <div className="flex items-center gap-1 truncate">
                  <FiMapPin className="text-xs text-gray-400" />
                  <span className="truncate">{item.address}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FiHome className="text-xs text-gray-400" />
                  <span>{item.stateName}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FiHash className="text-xs text-gray-400" />
                  <span>{item.pinCode}</span>
                </div>
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex shrink-0 items-center gap-4">
              <button className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700">
                <FiEdit3 />
                Edit
              </button>

              <button className="flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-600">
                <FiTrash2 />
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddressStrip;
