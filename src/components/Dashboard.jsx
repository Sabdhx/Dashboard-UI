import React, { useState } from "react"
import ContentArea from "./ContentArea";
import SideBar from "./SideBar";


function Dashboard() {
    const [active, setActive] = useState("");

  return (
    <div className="w-full flex justify-between h-screen ">
      <div className=" w-[25%] bg-gray-200 ">
      <SideBar active={active} setActive={setActive} />
      </div>
      <div className=" w-[75%]">
      <ContentArea active={active} />
      </div>
    </div>
  );
}

export default Dashboard;
