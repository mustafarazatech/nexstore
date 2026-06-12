const Container = ({ heading, children }: any) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      {heading && (
        <h4 className="mb-4 text-lg font-semibold text-gray-800">{heading}</h4>
      )}

      {children}
    </div>
  );
};

export default Container;
