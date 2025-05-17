// import ApexCharts from "apexcharts";

// import Home from "../Pages/Home/Home";

// export const Admindashboard1 = [
//   {
//     id: 1,
//     name: "Total Transaction",
//     value: "$18,900",
//     trend: "+1.5%",
//     chart: [
//       {
//         stroke: {
//           curve: "smooth",
//         },
//       },
//     ],
//   },
//   {
//   id: 2,
//   name: "Monthly Sales",
//   value: "$45,230",
//   trend: "+3.2%",
//   chart: [
//     {
//       stroke: {
//         curve: "smooth",
//       },
//     },
//   ],
// },
// {
//   id: 3,
//   name: "Active Users",
//   value: "2,345",
//   trend: "-0.8%",
//   chart: [
//     {
//       stroke: {
//         curve: "smooth",
//       },
//     },
//   ],
// },
// {
//   id: 4,
//   name: "Conversion Rate",
//   value: "4.7%",
//   trend: "+2.1%",
//   chart: [
//     {
//       stroke: {
//         curve: "smooth",
//       },
//     },
//   ],
// }
// ];

// src/Data/Admindata1.js
import AdminDashboard1 from "../Pages/AdminDashboard/AdminDashboard1";
import AdminDashboard2 from "../Pages/AdminDashboard/AdminDashboard2";
import SalesDashboard from "../Pages/AdminDashboard/SalesDashboard";
import Home from "../Pages/Home/Home";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/dashboard/AdminDashboard1",
    element: <AdminDashboard1></AdminDashboard1>,
    name: "admin Dashboard",
  },
  {
    path: "/dashboard/AdminDashboard2",
    element: <AdminDashboard2></AdminDashboard2>,
    name: "admin Dashboard 2",
  },
  {
    path: "/dashboard/SalesDashboard",
    element: <SalesDashboard></SalesDashboard>,
    name: "admin Dashboard 2",
  },
];

export const AdmindashboardCards = [
  {
    id: 1,
    name: "Total Transaction",
    value: "$18,900",
    trend: "+1.5%",
  },
  {
    id: 2,
    name: "Monthly Sales",
    value: "$45,230",
    trend: "+3.2%",
  },
  {
    id: 3,
    name: "Active Users",
    value: "2,345",
    trend: "-0.8%",
  },
  {
    id: 4,
    name: "Conversion Rate",
    value: "4.7%",
    trend: "+2.1%",
  },
];
