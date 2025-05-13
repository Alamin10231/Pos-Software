import React from "react";
import { FaUsers, FaChartLine } from "react-icons/fa";
const AdminDashboard2 = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded shadow-md space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        {/* Paragraph */}
        <p className="text-gray-600">
          Welcome to your admin panel. Here you can view reports, analytics, and
          manage everything.
        </p>

        {/* Icons */}
        <div className="flex space-x-6 text-blue-600 text-3xl">
          <FaUsers title="Users" />
          <FaChartLine title="Analytics" />
        </div>

        {/* Card style content */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Users22222</h2>
            <p>2,345 active</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Sales</h2>
            <p>$45,230 this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard2;
