import { data } from "autoprefixer";
import  { useEffect, useState } from "react";

const Purchase = () => {
                 
                   const [purchase, setpurchase] = useState([]);
                   useEffect(() => {
                     fetch("/Recenttransition.json")
                       .then((res) => res.json())
                       .then((data) => setpurchase(data.Purchase));
                      console.log(data)
                   }, []);
                 
                   return (
                     <div>
                      
                         <div className="p-4">
                           <table className="min-w-full border border-gray-300 text-left">
                             <thead className="bg-gray-100">
                               <tr>
                                 <th className="border px-4 py-2">ID</th>
                                 <th className="border px-4 py-2">Date</th>
                                 <th className="border px-4 py-2">Supplier</th>
                                 <th className="border px-4 py-2">Status</th>
                                 <th className="border px-4 py-2">Total</th>
                               </tr>
                             </thead>
                             <tbody>
                               {purchase.map((order) => (
                                 <tr key={order.id} className="hover:bg-gray-50">
                                   <td className="border px-4 py-2">{order.id}</td>
                                   <td className="border px-4 py-2">{order.date}</td>
                                   <td className="border px-4 py-2">{order.customer}</td>
                                   <td className="border px-4 py-2">{order.status}</td>
                                   <td className="border px-4 py-2">{order.total}</td>
                                 </tr>
                               ))}
                             </tbody>
                           </table>
                         </div>
                 
                     </div>
                   );
                 };


export default Purchase;