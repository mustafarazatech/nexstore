import React from "react";

const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: any;
  children: React.ReactNode;
}) => {
  return <form onSubmit={(e) => onSubmit(e)}>{children}</form>;
};

export default Form;
