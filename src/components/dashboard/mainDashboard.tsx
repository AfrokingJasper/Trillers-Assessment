import React from "react";
import MainTop from "./mainTop";
import MainCenter from "./mainCenter";
import MainBottom from "./mainBottom";

const MainDashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-5 bg-[#dee2e6] p-10 ">
      <MainTop />
      <MainCenter />
      <MainBottom />
    </div>
  );
};

export default MainDashboard;
