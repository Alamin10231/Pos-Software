
import invoicesData from '../../../public/Invoices.json';

const Table = () => {
  // Status styling configuration
  const statusStyles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Completed: 'bg-green-100 text-green-800',
    Processing: 'bg-blue-100 text-blue-800',
    Shipped: 'bg-purple-100 text-purple-800',
    Delivered: 'bg-gray-100 text-gray-800'
  };

  // Payment status styling configuration
  const paymentStatusStyles = {
    Paid: 'bg-green-100 text-green-800',
    Unpaid: 'bg-red-100 text-red-800',
    Partial: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference No.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-left">
          {invoicesData.invoices.map((invoice, index) => (
            <tr key={index}>
              <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-900">{invoice.date}</td>
              <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-900">{invoice.referenceNo}</td>
              <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-900">{invoice.customer}</td>
              <td className="px-6 py-6 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[invoice.status]}`}>
                  {invoice.status}
                </span>
              </td>
              <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-900">${invoice.total.toFixed(2)}</td>
              <td className="px-6 py-6 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${paymentStatusStyles[invoice.paymentStatus]}`}>
                  {invoice.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-900">${invoice.paid.toFixed(2)}</td>
              <td className="px-6 py-6 whitespace-nowrap text-md text-gray-900">${invoice.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;