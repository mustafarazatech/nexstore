const Container = ({ heading, children, subHeading }: any) => {
  return (
    <div className="">
      {heading && (
        <h4 className="mb-1 text-lg font-semibold text-gray-800">{heading}</h4>
      )}
      {subHeading && <p className=" text-slate-400">{subHeading}</p>}

      {children}
    </div>
  );
};

export default Container;
