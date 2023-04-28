import React from "react";

const Header = () => {
  return (
    <header
      className="bg-[#16ABF8] py-11 px-10 md:px-52"
      data-cy="header-title"
    >
      <div className="container mx-auto">
        <h1 className="text-xl text-white font-bold">TO DO LIST APP</h1>
      </div>
    </header>
  );
};

export default Header;
