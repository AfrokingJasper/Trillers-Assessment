import React, { useState } from "react";

const MainCenter = () => {
  const [ticket, setTicket] = useState("TICKET OF CLASS");

  return (
    <div className="flex justify-between p-4 text-[#093a2a94] font-bold">
      <div>
        <p className="text-lg font-bold text-[#093a2a94]">RESULTS (25)</p>
      </div>
      <div className="flex gap-3">
        <div className="bg-white rounded-3xl px-10 py-2">
          <p>FILTER</p>
        </div>
        <div>
          <select
            className="bg-white rounded-3xl px-10 py-2"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          >
            <option value="TICKET OF CLASS">TICKET OF CLASS</option>
            <option value="FIRST CLASS">FIRST CLASSS</option>
            <option value="ECONOMY">ECONOMY</option>
            <option value="BUSINESS CLASS">BUSINESS CLASS</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MainCenter;
