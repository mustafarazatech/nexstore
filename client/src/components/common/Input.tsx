const Input = ({
  value,
  onChange,
  type,
  label,
  icon,
  name,
  placeholder,
}: any) => {
  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2 focus-within:border-blue-500">
        {icon && <div className="text-gray-500">{icon}</div>}

        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
