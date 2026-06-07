type ProductCardProps = {
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({
  title,
  image,
  price,
}: ProductCardProps) => {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain"
      />

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-lg font-bold">
        ${price}
      </p>
    </div>
  );
};

export default ProductCard;