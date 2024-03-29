import React, { useState } from "react";
import Image from "next/image";
import { SiEmirates } from "react-icons/si";
import { SiQatarairways } from "react-icons/si";
import { SiLufthansa } from "react-icons/si";
import routes from "../../../public/route.jpg";
import styles from "./main.module.css";

const MainBottom = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="flex gap-10 text-[#053828a8]">
      {/* bottom left */}
      <div className="w-[60%]">
        <div className="flex justify-between items-center bg-white rounded-2xl p-5">
          <div className="flex flex-col items-center justify-center w-20 h-20">
            <SiEmirates className="text-4xl" />
            <p className="font-bold">Emirates</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-semibold">JFK</p>
            <p className="text-sm">13:00</p>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <p className="text-sm font-semibold">EMIRATES</p>
            <p className="text-yellow-600 font-bold">11HR 20MIN</p>
            <p>NON-STOP</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="text-lg font-semibold">BOM</p>
            <p className="text-sm">14:20</p>
          </div>
          <div className="flex flex-col gap-1 items-end ">
            <p className="text-lg font-semibold">$1,572</p>
            <button className="bg-yellow-600 px-5 py-2 rounded-3xl text-sm text-white">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center -mt-5 w-[105%] self-center -ml-5">
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
          <div className=" border-dashed border-b-[1px] w-[110%] border-b-gray-600"></div>
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
        </div>

        {/* item 2 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-5 -mt-5">
          <div className="flex gap-1 items-center justify-center w-20 h-20">
            <p className="font-bold">QATAR</p>
            <SiQatarairways className="text-4xl" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-semibold">JFK</p>
            <p className="text-sm">13:00</p>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <p className="text-sm font-semibold">QATAR AIRWAYS</p>
            <p className="text-yellow-600 font-bold">11HR 20MIN</p>
            <p>NON-STOP</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="text-lg font-semibold">BOM</p>
            <p className="text-sm">14:20</p>
          </div>
          <div className="flex flex-col gap-1 items-end ">
            <p className="text-lg font-semibold">$1,572</p>
            <button className="bg-yellow-600 px-5 py-2 rounded-3xl text-sm text-white">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center -mt-5 w-[105%] self-center -ml-5">
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
          <div className=" border-dashed border-b-[1px] w-[110%] border-b-gray-600"></div>
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
        </div>

        {/* item 3 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-5 -mt-5">
          <div className="flex flex-col items-center justify-center w-20 h-20">
            <SiLufthansa className="text-4xl" />
            <p className="font-bold">Lufthansa</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-semibold">JFK</p>
            <p className="text-sm">13:00</p>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <p className="text-sm font-semibold">LUFTHANSA</p>
            <p className="text-yellow-600 font-bold">11HR 20MIN</p>
            <p>NON-STOP</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="text-lg font-semibold">BOM</p>
            <p className="text-sm">14:20</p>
          </div>
          <div className="flex flex-col gap-1 items-end ">
            <p className="text-lg font-semibold">$1,872</p>
            <button className="bg-yellow-600 px-5 py-2 rounded-3xl text-sm text-white">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center -mt-5 w-[105%] self-center -ml-5">
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
          <div className=" border-dashed border-b-[1px] w-[110%] border-b-gray-600"></div>
          <div className="w-10 h-10 rounded-full bg-[#dee2e6]"></div>
        </div>

        {/* item 4 */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-5 -mt-5">
          <div className="flex flex-col items-center justify-center w-20 h-20">
            <SiEmirates className="text-4xl" />
            <p className="font-bold">Emirates</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-semibold">JFK</p>
            <p className="text-sm">13:00</p>
          </div>
          <div className="flex flex-col gap-[1px] items-center">
            <p className="text-sm font-semibold">EMIRATES</p>
            <p className="text-yellow-600 font-bold">11HR 20MIN</p>
            <p>NON-STOP</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="text-lg font-semibold">BOM</p>
            <p className="text-sm">14:20</p>
          </div>
          <div className="flex flex-col gap-1 items-end ">
            <p className="text-lg font-semibold">$1,872</p>
            <button className="bg-yellow-600 px-5 py-2 rounded-3xl text-sm text-white">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      {/* bottom right */}
      <div className="flex flex-col gap-5 bg-[#053828a8] w-[35%] rounded-3xl text-white p-10">
        <div className="flex flex-col">
          <div className="flex justify-between text-sm">
            <p>FROM</p>
            <p>TO</p>
          </div>
          <div className="flex justify-between text-lg items-center">
            <p className="font-bold">JFK</p>
            <p className="text-sm">NON-STOP</p>
            <p className="font-bold">BOM</p>
          </div>
        </div>
        <div>
          <Image className="w-full h-52 rounded-md" src={routes} alt="routes" />
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <button
              onClick={() => setActiveButton(1)}
              className={`${
                activeButton === 1 ? "bg-yellow-600" : ""
              } px-4 rounded-3xl py-2`}
            >
              NON-STOP
            </button>
            <button
              onClick={() => setActiveButton(2)}
              className={`${
                activeButton === 2 ? "bg-yellow-600" : ""
              } px-4 rounded-3xl py-2`}
            >
              ONE-STOP
            </button>

            <button
              onClick={() => setActiveButton(3)}
              className={`${
                activeButton === 3 ? "bg-yellow-600" : ""
              } px-4 rounded-3xl py-2`}
            >
              MORE-STOP
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <p>PRICE</p>
            <div className="relative w-full ">
              <div className=" w-full h-[1px] bg-gray-300"></div>
              <div className="absolute -top-2 left-[20%] h-4 w-4 rounded-full bg-[#f59f00]"></div>
              <div className={styles.dividero}></div>
              <div className="absolute top-[25px] left-[20%] -translate-x-[40%]  rounded-full bg-[#f59f00] px-4 py-1">
                $500
              </div>
              <div className={styles.dividert}></div>
              <div className="absolute top-[25px] left-[70%] -translate-x-[40%]  rounded-full bg-[#f59f00] px-4 py-1">
                $2500
              </div>
              <div className="absolute -top-2 left-[70%] h-4 w-4 rounded-full bg-[#f59f00]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
