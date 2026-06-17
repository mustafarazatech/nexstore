import { FiMinus, FiPlus } from "react-icons/fi";
import { useProduct } from "../context/product/product.context";

const Quantity = () => {
  const { state, handleQuantity } = useProduct();
  return (
    <div className="mt-6 flex items-center border border-gray-200">
      <button className="px-2 py-1 hover:bg-gray-100">
        <FiMinus size={12} onClick={() => handleQuantity("dec")} />
      </button>

      <span className="px-3 text-xs font-medium">{state.quantity}</span>

      <button
        className="px-2 py-1 hover:bg-gray-100"
        onClick={() => handleQuantity("inc")}
      >
        <FiPlus size={12} />
      </button>
    </div>
  );
};

export default Quantity;
