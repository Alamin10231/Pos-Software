import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Sidebars = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
                    
      .then((data) => setData(data));
  }, []);
  console.log(data)
  return (
    <div className="">
   
      {data.map((item) => (
        <Sidebar key={item.id} item={item}></Sidebar>
      ))}
    </div>
  );
};

export default Sidebars;
