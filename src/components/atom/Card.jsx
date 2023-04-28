import React from "react";
import { FiTrash2 } from "react-icons/fi";

const Card = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-56 mb-5">
      <span className="font-bold text-xl">Daftar Belanja Bulanan</span>
      <div className="flex justify-between items-baseline text-[#888888]">
        <p className="mt-32">5 Oktober 2021</p>
        <span className="text-xl cursor-pointer">
          <FiTrash2 />
        </span>
      </div>
    </div>
  );
};

export default Card;
