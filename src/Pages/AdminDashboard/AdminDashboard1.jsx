import React from "react";
// icons
import SalesReport from "../../components/AdminDashboard1/MetricsCards";
import Charts from "../../components/AdminDashboard1/Charts";
import Charts2 from "../../components/AdminDashboard1/Charts2";
import SalesChart from "../../components/AdminDashboard1/SalesChart";
import Statsdata from "../../components/AdminDashboard1/Statsdata";
import TopCategory from "../../components/AdminDashboard1/TopCategory";
import Table from "../../components/AdminDashboard1/Table.jsx";
import { Achivement } from "../../components/AdminDashboard1/Achivement.jsx";
import ProductTable from "../../components/AdminDashboard1/ProductTable.jsx";
import RecentlyAdded from "../../components/AdminDashboard1/RecentlyAdded.jsx";
// put your image here

const AdminDashboard1 = () => {
  return (
    <div>
      <SalesReport />
      <div className="flex gap-4">
        <Charts />

        <Charts2 />
      </div>
      <div className="flex gap-4">
        <SalesChart />
        <div>
          <Statsdata />
          <TopCategory />
        </div>
      </div>
      <div className="py-20">
        <Table></Table>
      </div>
      <div className="grid grid-cols-12  gap-10 items-center ">
       
         <div className="col-span-7">
           <Achivement  />
         </div>
       
          <div className="col-span-5">
            <RecentlyAdded />
          </div>
     
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default AdminDashboard1;
