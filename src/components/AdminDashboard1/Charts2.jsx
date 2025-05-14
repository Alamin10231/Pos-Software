import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  
];

const Charts2 = () => {
  return (
    <div className="h-[500px] w-1/2 bg-[#FFFFFF] rounded-md py-10">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Legend />
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="30%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx="70%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts2;
