// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// const Recenttransaction = () => {
//                      const [transactions, setTransactions] = useState({});

//                      useEffect(()=>{
//                                         fetch('/Recenttransition.json')
//                                         .then(res => res.json())
//                                         .then(data=> setTransactions(data))
//                      },[])
//   return (
//   <div className=" py-10 my-20">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold mb-4 text-center mx-auto">Recent Transactions</h2>
//         <Link to="/home"><h2 className="text-md  mb-4 ">View all</h2></Link>
//       </div>

//       <Tabs>
//         <TabList className="space-x-4">
//           {Object.keys(transactions).map((type) => (
//             <Tab key={type} className="react-tabs__tab">
//               {type}
//             </Tab>
//           ))}
//         </TabList>

//         {Object.entries(transactions).map(([type, items]) => (
//           <TabPanel key={type}>
//             <div className="overflow-x-auto mt-4">
//               <table className="min-w-full">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-2 text-left">Sale</th>
//                     <th className="px-4 py-2 text-left">Customer</th>
//                     <th className="px-4 py-2 text-left">Status</th>
//                     <th className="px-4 py-2 text-left">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items.map((transaction) => (
//                     <tr key={transaction.id} className="border-t">
//                       <td className="px-4 py-2 text-left">{transaction.date}</td>
//                       <td className="px-4 py-2 text-left">{transaction.customer}</td>
//                       <td className="px-4 py-2 text-left">
//                         <span
//                           className={`px-2 py-1 rounded text-left ${
//                             transaction.status === "Completed"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {transaction.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-2 text-left">${transaction.total}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </TabPanel>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default Recenttransaction;
import React, { useState } from "react";
import Sale from "./Trnasactions/Sale";
import Purchase from "./Trnasactions/Purchase";
import Quotation from "./Trnasactions/Quotation";
import Expenses from "./Trnasactions/Expenses";
import Invocies from "./Trnasactions/Invocies";

const Recenttransaction = () => {
  const [activeTab, setActiveTab] = useState("Sale");

  return (
    <div>
      <div className="flex  space-x-1 justify-between items-center ">
        {[
          { id: "Sale", level: "Sale" },
          { id: "Purchase", level: "Purchase" },
          { id: "Quotation", level: "Quotation" },
          { id: "Expenses", level: "Expenses" },
          { id: "Invoices", level: "Invoices" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` px-4 py-2 text-[15px] font-semibold transition-colors duration-300 rounded-none
              ${
                activeTab === tab.id
                  ? "text-gray-900 border-b-2 border-[#126DFE] "
                  : "text-[#252830] hover:text-gray-800 hover:border-gray-300"
              }
              
              
              `}
          >
            {tab.level}
          </button>
        ))}
      </div>
      <div className="transition-all duration-300">
        {activeTab === "Sale" && (
          <div>
            <Sale />
          </div>
        )}
      </div>
      <div >{activeTab === "Purchase" && <Purchase />}</div>
      <div>{activeTab === "Quotation" && <Quotation />}</div>
      <div>{activeTab === "Expenses" && <Expenses />}</div>
      <div>{activeTab === "Invoices" && <Invocies />}</div>
    </div>
  );
};

export default Recenttransaction;
