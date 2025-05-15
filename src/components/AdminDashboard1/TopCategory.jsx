import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28DFF",
  "#FF6666",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
//   index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{
        fontSize: "12px",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TopCategory = () => {
  // Sample data - replace with your actual data
  const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Fashion", value: 300 },
    { name: "Home & Living", value: 300 },
    { name: "Beauty", value: 200 },
  ];

  return (
    <div className="top-category-chart mt-5 " style={{ width: "100%", height: 200 }}>
    <h2 className="text-left text-xl">Customers Overview</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            innerRadius={50}
            paddingAngle={2}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell className="text-left bg-black"
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#ffffff"
                strokeWidth={2}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopCategory;
