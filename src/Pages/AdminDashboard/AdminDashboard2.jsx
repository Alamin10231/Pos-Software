import React from "react";
import { FaUsers, FaChartLine } from "react-icons/fa";

import MetricsCard2 from "../../components/AdminDashboard2/Matrixcard2";
import AnalyticsSummaryTiles from "../../components/AdminDashboard2/AnalyticsSummaryTiles";
const AdminDashboard2 = () => {
  return (
    <div>
      {/* <SalesReport /> */}
  
   <div>
    
    <AnalyticsSummaryTiles />
   </div>
   <MetricsCard2 />
    </div>
  );
};

export default AdminDashboard2;
