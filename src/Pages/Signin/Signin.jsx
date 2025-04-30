import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import bglogin from "../../assets/Login/bg-login.jpg";

const Signin = () => {
  return (
    <div className="bg-[#f7fbfe]">
      <div className=" flex flex-col md:flex-row px-4 md:px-10 py-6 min-h-screen w-[80%] m-auto  ">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#f7fbfe] p-4 md:p-6">
          <div className="text-center mb-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Post Software
            </h1>
          </div>

          <form className="w-full max-w-sm bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <h2 className="text-md md:text-lg font-semibold text-gray-700">
                Sign in
              </h2>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Welcome back! Please enter your details.
              </p>
            </div>

            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full border px-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-between items-center text-xs mb-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-blue-600 scale-75" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-md text-sm font-semibold transition"
            >
              Sign In
            </button>

            <p className="mt-3 text-center text-xs">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </p>

            <div className="text-center py-3 text-xs">-- OR --</div>

            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-3 mb-4">
              <button className="flex items-center justify-center gap-1 px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-100">
                <FaGoogle className="text-sm" /> Google
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-100">
                <FaApple className="text-sm" /> Apple
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-100">
                <FaFacebook className="text-sm" /> Facebook
              </button>
            </div>

            <p className="text-center text-xs text-gray-500">
              © 2025 PosSoftware
            </p>
          </form>
        </div>

        <div className="max-w-2xl md:w-1/2 flex flex-col justify-center items-center bg-[#4070ee] p-4 md:p-6 rounded-lg mt-4 md:mt-0 ">
          <div className="text-center max-w-xl ">
            <h2 className="text-xl md:text-3xl lg:text-5xl text-white font-semibold mb-3  pb-10 leading-tight">
              Welcome back! Please sign in to your{" "}
              <span className="underline ">Pos Software</span> account
            </h2>
            <p className="text-white text-xs md:text-lg mb-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              sapiente sit deleniti alias corrupti esse ex nihil aliquam
              laudantium vitae.
            </p>
            <img
              src={bglogin}
              alt="Login Illustration"
              className="rounded-xl w-full max-h-[200px] md:max-h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
