
import { BiPurchaseTag } from "react-icons/bi";
import {  FaRegListAlt } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
const MetricsCards = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded shadow-md space-y-6 my-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        {/* Paragraph */}
        <p className="text-gray-600">
          Welcome to your admin panel. Here you can view reports, analytics, and
          manage everything.
        </p>

        {/* Icons */}
        <div className="flex space-x-6 text-blue-600 text-3xl">
          {/* <FaUsers title="Users" />
          <FaChartLine title="Analytics" /> */}
        </div>
        {/* Card style content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Card 1 */}
  <div className="bg-gradient-to-r from-rose-100 to-amber-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex gap-4 items-center">
    <div className="bg-white text-pink-600 p-4 rounded-full shadow-md">
      <FaRegListAlt className="text-3xl" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800">Total Sales</h2>
      <p className="text-2xl font-semibold text-pink-700 text-left">$2,345</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-r from-blue-100 to-green-200 p-6 rounded-xl shadow-lg flex gap-4 items-center">
    <div className="bg-white text-blue-600 p-4 rounded-full shadow-md">
      <BiPurchaseTag className="text-3xl" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800">Total Purchases</h2>
      <p className="text-2xl font-semibold text-blue-800 text-left">$1,678</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-r from-purple-100 to-indigo-200 p-6 rounded-xl shadow-lg flex gap-4 items-center">
    <div className="bg-white text-purple-600 p-4 rounded-full shadow-md">
      <GiProfit className="text-3xl" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800">Profit</h2>
      <p className="text-2xl font-semibold text-purple-800 text-left">$980</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-gradient-to-r from-teal-100 to-cyan-200 p-6 rounded-xl shadow-lg flex gap-4 items-center">
    <div className="bg-white text-teal-600 p-4 rounded-full shadow-md">
      <GoPeople className="text-3xl" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800">Customers</h2>
      <p className="text-2xl font-semibold text-teal-800 text-left">652</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default MetricsCards;
