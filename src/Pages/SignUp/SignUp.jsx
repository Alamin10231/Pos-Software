import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bglogin from "../../assets/Login/bg-login.jpg";

const SignUp = () => {
  return (
    <div className="min-h-screen w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row min-h-screen py-20">
        {/* Left Section - SignUp Form */}
        <div className="w-full md:w-1/2 flex flex-1 justify-center items-center bg-[#f7fbfe] p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Post Software
              </h1>
            </div>

            <form className="w-full bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                  Sign Up
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-md text-left text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md text-left  text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-md text-left py-1 text-gray-700 font-medium mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full   border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex items-center text-sm mb-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors"
              >
                Sign Up
              </button>

              <p className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign In
                </Link>
              </p>

              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors">
                  <FaGoogle className="text-blue-600" />
                  <span>Continue with Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors">
                  <FaApple className="text-blue-600" />
                  <span>Continue with Apple</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors">
                  <FaFacebook className="text-blue-600" />
                  <span>Continue with Facebook</span>
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                © 2025 PosSoftware
              </p>
            </form>
          </div>
        </div>

        {/* Right Section - Welcome Content */}
        <div className="w-full md:w-1/2 flex-1 flex justify-center rounded-lg items-center bg-[#4070ee] p-4 md:p-8 lg:p-12">
          <div className="max-w-xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Welcome back to{" "}
              <span className="underline decoration-white/30">Pos Software</span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              sapiente sit deleniti alias corrupti esse ex nihil aliquam
              laudantium vitae.
            </p>

            <img
              src={bglogin}
              alt="Login Illustration"
              className="rounded-xl w-full h-64 md:h-96 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;