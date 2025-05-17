import React from "react";
import { FaUsers, FaChartLine } from "react-icons/fa";

import MetricsCard2 from "../../components/AdminDashboard2/Matrixcard2";
import AnalyticsSummaryTiles from "../../components/AdminDashboard2/AnalyticsSummaryTiles";
import { PurchaseSales } from "../../components/AdminDashboard2/PurchaseSales";
import ExpiredProduct from "../../components/AdminDashboard2/ExpiredProduct";
import { TwolevelPiechart } from "../../components/AdminDashboard2/TwolevelPIechart";
// import { PurchaseSales } from "../../components/AdminDashboard2/PurchaseSales";
const AdminDashboard2 = () => {
  return (
    <div>
      {/* <SalesReport /> */}

      <div>
        <AnalyticsSummaryTiles />
      </div>
      <div>
        <MetricsCard2 />
      </div>

  
   <div className="grid grid-cols-12 gap-5 py-5 items-center">
      <div className="col-span-8 bg-white py-8 ">
       {/* <ExpiredProduct /> */}
         <PurchaseSales />
     </div>
     <div className="col-span-4 bg-white py-8">
      <TwolevelPiechart />
     </div>
     
   </div>
   <div>
      <ExpiredProduct />
     </div>
    </div>
  );
};

export default AdminDashboard2;
