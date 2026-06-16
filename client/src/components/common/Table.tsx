const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-auto rounded border border-gray-200s shadow-sm">
      <table className="w-full min-w-[1000px]">{children}</table>
    </div>
  );
};

export default Table;
