import React, { useState } from "react";
import Image from "next/image";
import profile1 from "../../../public/profile-1.jpg";
import profile2 from "../../../public/profile-2.jpg";
import profile3 from "../../../public/profile-3.jpg";
import profile4 from "../../../public/profile-4.jpg";
import profile5 from "../../../public/profile-5.jpg";
import routes from "../../../public/route.jpg";
import { FaHome, FaWallet } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { LuPieChart } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

const Navigations = () => {
  const [activeNav, setActivenav] = useState(2);
  const navs = [
    {
      type: "Dashboard",
      image: <FaHome />,
    },
    {
      type: "Flight",
      image: <MdFlight />,
    },
    {
      type: "Wallet",
      image: <FaWallet />,
    },
    {
      type: "Report",
      image: <GoReport />,
    },
    {
      type: "Statistics",
      image: <LuPieChart />,
    },
    {
      type: "Settings",
      image: <IoSettingsOutline />,
    },
  ];

  return (
    <div className="flex flex-col w-[18%]  min-h-[100vh] rounded-r-3xl overflow-hidden text-white">
      {/* profile */}
      <div className="flex flex-col gap-1 items-center justify-center bg-[#09382aa8] h-[30%]">
        <div className="h-14 w-14   overflow-hidden -ml-3 border-[#fcc419] border-l-[#fff3bf] border-b-[#ffec99] border-2 rounded-full">
          <Image
            className="object-cover h-full w-full"
            src={profile1}
            alt="users profile"
            height={100}
            width={100}
          />
        </div>
        {/* </div> */}
        <p className="text-lg">ALEX JOHNSON</p>
        <p className="text-sm">alex.johnson@gmail.com</p>
      </div>

      {/* navs */}
      <div className="flex flex-col justify-between flex-1 bg-[#0e4e3aa8] pl-4">
        {navs.map((item, index) => (
          <div
            onClick={() => setActivenav(index)}
            className={`bg-[#dee2e6] ${
              index === activeNav ? "rounded-3xl" : ""
            } flex-1`}
            key={index}
          >
            <div className={` h-full overflow-hidden`}>
              <div
                className={`flex px-10 items-center gap-2 text-yellow-400  py-2  h-full ${
                  index === activeNav
                    ? "bg-[#dee2e6]  rounded-l-3xl"
                    : "bg-[#0e4e3aa8]"
                } ${
                  index === activeNav - 1 ? "rounded-br-3xl" : "rounded-none"
                } ${
                  index === activeNav + 1 ? "rounded-tr-3xl" : "rounded-none"
                } `}
              >
                <p className="text-2xl">{item.image}</p>
                <p
                  className={`text-lg  uppercase ${
                    index === activeNav ? "text-black" : "text-white"
                  }`}
                >
                  {item.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* active users */}
      <div className="flex flex-col gap-4 bg-[#0e4e3aa8] h-[35%] px-10 py-5">
        <p className="text-yellow-400 uppercase">active user</p>

        {/* user images */}
        <div className="flex items-center mx-5">
          <div className="h-10 w-10 rounded-full border-2 border-[#0e4e3aa8] overflow-hidden -ml-3">
            <Image
              className="object-cover h-full w-full"
              src={profile2}
              alt="users profile"
            />
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[#0e4e3aa8] overflow-hidden -ml-3">
            <Image
              className="object-cover h-full w-full"
              src={profile3}
              alt="users profile"
            />
          </div>

          <div className="h-10 w-10 rounded-full border-2 border-[#0e4e3aa8] overflow-hidden -ml-3">
            <Image
              className="object-cover h-full w-full"
              src={profile4}
              alt="users profile"
            />
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[#0e4e3aa8] overflow-hidden -ml-3">
            <Image
              className="object-cover h-full w-full"
              src={profile5}
              alt="users profile"
            />
          </div>

          <div className="flex items-center justify-center bg-yellow-400 text-white h-10 w-10 rounded-full border-2 border-[#0e4e3aa8] -ml-3">
            <p className="text-center">70+</p>
          </div>
        </div>

        {/* route */}
        <div>
          <Image className="h-32 w-full rounded-md" src={routes} alt="routes" />
        </div>
      </div>
    </div>
  );
};

export default Navigations;
