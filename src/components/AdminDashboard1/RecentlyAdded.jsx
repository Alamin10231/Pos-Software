import React, { useEffect, useState } from "react";

const RecentlyAdded = () => {
  const [added, setAdded] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setAdded(data.products));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto rounded-lg   py-20 ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Product Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
             
           
             
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {added.map((p) => (
              <tr key={added.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {p.number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {p.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${p.price.toFixed(2)}
                </td>
               
                
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentlyAdded;
