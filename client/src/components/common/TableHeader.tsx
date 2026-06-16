type TableHeaderProps = {
  tableColumn: string[];
};

const TableHeader = ({ tableColumn }: TableHeaderProps) => {
  return (
    <thead className="bg-slate-100">
      <tr className="">
        {tableColumn.map((item, index) => (
          <th
            key={index}
            className="px-4 py-5 text-center text-sm font-semibold text-slate-700 border-b"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
