import React from "react";
import Header from "../components/molecules/Header";
import { FiPlus } from "react-icons/fi";
import Card from "../components/atom/Card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-10 md:px-52 bg-[#E5E5E5]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mb-9">
            <span className="font-bold text-4xl">Activity</span>
            <Link
              to={"/new-activity"}
              className="bg-[#16ABF8] py-3 px-6 rounded-full text-white font-semibold flex items-center gap-2"
            >
              <FiPlus />
              Tambah
            </Link>
          </div>
          <div className="flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
