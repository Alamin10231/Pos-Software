import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
const Home = () => {
  return (
    <div className="w-full bg-white flex">
      <div className="w-[20%]"></div>

      <div className="w-[80%] bg-white">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Home;
