import React from "react";
import Header from "../components/molecules/Header";
import { Link } from "react-router-dom";
import { FiPlus, FiChevronLeft, FiEdit2 } from "react-icons/fi";

const NewActivity = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-10 md:px-52 bg-[#E5E5E5]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mb-9">
            <span className="font-bold flex gap-3 items-center">
              <p className="text-4xl font-bold">
                <FiChevronLeft />
              </p>
              <p className="text-4xl">New Activity</p>
              <p className="text-[#A4A4A4] cursor-pointer">
                <FiEdit2 />
              </p>
            </span>
            <Link
              to={"/new-activity"}
              className="bg-[#16ABF8] py-3 px-6 rounded-full text-white font-semibold flex items-center gap-2"
            >
              <FiPlus />
              Tambah
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewActivity;
