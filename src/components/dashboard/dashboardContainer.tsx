"use client";
import React from "react";
import Navigations from "./navgations";
import MainDashboard from "./mainDashboard";

const DashboardContainer = () => {
  return (
    <div className="flex gap-5">
      <Navigations />
      <MainDashboard />
    </div>
  );
};

export default DashboardContainer;
