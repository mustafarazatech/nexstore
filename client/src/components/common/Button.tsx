const Button = ({ children, type = "button", className = "" }: any) => {
  return (
    <button
      type={type}
      className={`rounded mt-2 bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
