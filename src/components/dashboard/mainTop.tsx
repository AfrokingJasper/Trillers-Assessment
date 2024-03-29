import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbArrowsDoubleNwSe } from "react-icons/tb";
import { MdOutlineDateRange, MdChair } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const MainTop = () => {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-3xl text-[#093a2a94]">
      {/* top container */}
      <div className="flex gap-3 justify-between">
        <div className="flex justify-between bg-[#1fa87d3b] w-[50%] py-2 px-5 rounded-3xl">
          <div className="flex gap-3 items-center">
            <CiLocationOn />
            <p>NEW YORK (JFK)</p>
          </div>
          <div className="flex items-center justify-center bg-[#093a2a94] w-10 h-10 rounded-full text-white text-lg">
            <TbArrowsDoubleNwSe className="-rotate-45" />
          </div>
          <div className="flex gap-3 items-center">
            <CiLocationOn />
            <p>MUMBAI (BOM)</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center bg-[#1fa87d3b] w-[20%] py-2 px-5 rounded-3xl">
          <MdOutlineDateRange className="text-2xl" />
          <p>28 JULY 2019</p>
        </div>
        <div className="flex justify-center gap-4 items-center bg-[#1fa87d3b] w-[20%] py-2 px-5 rounded-3xl">
          <FaUser className="text-2xl" />
          <p>TRAVELLER</p>
        </div>
      </div>

      {/* bottom container */}
      <div className="flex gap-3 justify-between">
        <div className="flex justify-between bg-[#1fa87d3b] w-[50%]  rounded-3xl">
          <div className="flex gap-3 items-center justify-center bg-[#093a2a94] text-white w-[30%] rounded-3xl py-1 px-5">
            <p>ONE WAY</p>
          </div>
          <div className="flex gap-3 items-center justify-center  text-[#093a2a94] w-[30%] rounded-3xl py-4 px-5">
            <p>ROUND TRIP</p>
          </div>
          <div className="flex gap-3 items-center justify-center  text-[#093a2a94] w-[30%] rounded-3xl py-1 px-5">
            <p>MULTI CITY</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center bg-[#1fa87d3b] w-[20%] py-2 px-5 rounded-3xl">
          <MdChair className="text-2xl" />
          <p>FIRST CLASS</p>
        </div>
        <div className="flex justify-center gap-4 items-center bg-yellow-600 text-white w-[20%] py-2 px-5 rounded-3xl">
          <p>SEARCH</p>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
