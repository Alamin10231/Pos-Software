import React, { useEffect, useState } from "react";
// import productsData from "./products.json";

const ProductTable = () => {

  const [product,setProduct] = useState([])
  useEffect(() => {
    fetch("/Products.json")
    .then( res => res.json())
    .then(data => setProduct(data.products))
  }, []);
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm py-32">
     
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Manufacture Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {product.map((p) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                {p.number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left ">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-left ">
                {p.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left ">
                ${p.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left ">
                {p.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">
                {p.manufactureDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2 text-left">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
 

        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
