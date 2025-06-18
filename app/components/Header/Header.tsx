import React from "react";
interface HeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="bg-gray-500 shadow-md">{children}</header>;
};

export default Header;
