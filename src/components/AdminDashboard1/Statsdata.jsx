// import { FaUser, FaDollar, FaShoppingCart } from "react-icons/fa";

import { FaDollarSign, FaShoppingCart, FaUser } from "react-icons/fa";

// Define statsData
const statsData = [
  {
    title: "Total Users",
    value: "2,542",
    icon: <FaUser />,
    color: "bg-blue-500",
  },
  {
    title: "Total Revenue",
    value: "$45,234",
    icon: <FaDollarSign />,
    color: "bg-green-500",
  },
  {
    title: "Total Sales",
    value: "1,234",
    icon: <FaShoppingCart />,
    color: "bg-yellow-200",
  },
];

const Statsdata = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  max-w-6xl mx-auto p-4">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="group bg-white p-6 rounded-xl h-[200px] flex shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className=" items-center space-x-5 relative z-10">
           <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full ${stat.bgColor} bg-opacity-15`}>
        <div className={`text-3xl ${stat.iconColor}`}>
          {stat.icon}
        </div>
      </div> 

            {/* Text content */}
            <div className="flex flex-col ">
              <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1 text-left uppercase tracking-wide">
                {stat.title}
              </h3>
              </div>
              <div>
                    <p className="text-2xl font-bold text-gray-800 text-left">{stat.value}</p>

              </div>
              {/* Optional status indicator */}
              {stat.trend && (
                <div className="flex items-center mt-2 text-sm">
                  <span className={`${stat.trendColor} flex items-center`}>
                    {stat.trend > 0 ? (
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(stat.trend)}%
                  </span>
                  <span className="text-gray-400 ml-2">vs last month</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statsdata;
