import React from "react";
import Dashboard from "./Dashboard";
import PurchaseOrder from "./PurchaseOrder";
import Invoice from "./Invoice";
import FileUpload from "./FileUpload";

function ContentArea({ active }) {
  return (
     <div className="flex justify-center items-center my-[5%]">
    <div className=" ">
      {active === "purchase" && <PurchaseOrder />}
      {active === "invoice" && <Invoice />}
      {active === "upload" && <FileUpload />}
    </div>
    </div>
  );
}

export default ContentArea;
