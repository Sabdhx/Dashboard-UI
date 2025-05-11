import React from "react";

function SideBar({ active, setActive }) {
  const sideBarData = [
    { name: "Purchase Order", key: "purchase" },
    { name: "Invoice", key: "invoice" },
    { name: "File Upload", key: "upload" },
  ];

  return (
    <div className="flex flex-col gap-4 mt-10 px-6 text-lg">
      {sideBarData.map((item) => (
        <>
       
        <div
          key={item.key}
          onClick={() => setActive(item.key)}
          className={`px-4 py-2 rounded-md transition-all duration-200 cursor-pointer 
            ${
              active === item.key
                ? "bg-blue-100 text-gray-600 font-semibold shadow-sm"
                : "text-gray-700 hover:bg-gray-100 "
            }`}
        >
          {item.name}
        </div>
        
        </>
      ))}
    </div>
  );
}

export default SideBar;
