import React from "react";
import Dashboard from "./Dashboard";
import PurchaseOrder from "./PurchaseOrder";
import Invoice from "./Invoice";
import FileUpload from "./FileUpload";
import TodoList from "./todoList";

function ContentArea({ active }) {
  return (
     <div className="flex justify-center items-center my-[5%]">
    <div className=" ">
      {active === "purchase" && <PurchaseOrder />}
      {active === "invoice" && <Invoice />}
      {active === "upload" && <FileUpload />}
            {active === "todoList" && <TodoList />}

    </div>
    </div>
  );
}

export default ContentArea;
