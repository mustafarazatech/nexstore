import { FaHeart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type ProductItem = {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  discountPrice?: number;
  stock: number;
  brand?: string;
};

type ProductCardProps = {
  data: ProductItem[];
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {data.map((item) => {
        const discount =
          item.discountPrice && item.discountPrice > item.price
            ? Math.round(
                ((item.discountPrice - item.price) / item.discountPrice) * 100,
              )
            : 0;

        return (
          <div
            key={item._id}
            className="group w-[210px] overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={`http://localhost:3000/api/admin/product-photo/${item._id}`}
                alt={item.name}
                className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow opacity-0 transition group-hover:opacity-100">
                <FaHeart
                  size={14}
                  className="text-gray-500 hover:text-red-500"
                />
              </button>

              {/* Rating */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-white px-2 py-0.5 text-[10px] font-medium shadow">
                <FaStar className="text-green-500" size={10} />
                4.3
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-2">
              <h3 className="truncate text-xs font-bold text-gray-900">
                {item.brand || "Brand"}
              </h3>

              <p className="mt-0.5 truncate text-xs text-gray-500">
                {item.name}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  ₹{item.price}
                </span>

                {item.discountPrice && (
                  <>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{item.discountPrice}
                    </span>

                    <span className="text-[11px] font-medium text-orange-500">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <NavLink to={`/product-detail/${item._id}`}>
                <button className="mt-2 w-full border border-gray-300 py-1.5 text-xs font-semibold text-gray-700 hover:border-pink-500 hover:text-pink-500">
                  ADD TO BAG
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
