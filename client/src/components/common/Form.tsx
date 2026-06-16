import React from "react";

const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: any;
  children: React.ReactNode;
}) => {
  return (
    <form
      className="p-4 border border-gray-300 rounded shadow"
      onSubmit={(e) => onSubmit(e)}
    >
      {children}
    </form>
  );
};

export default Form;
