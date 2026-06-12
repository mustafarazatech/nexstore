const FormRow = ({ children }: any) => {
  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap lg:flex-nowrap">
      {children}
    </div>
  );
};

export default FormRow;
