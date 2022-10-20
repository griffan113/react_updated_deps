import React from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="outline-none bg-teal-500 hover:bg-teal-600 p-2 focus:ring-1 focus:ring-white text-center"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
