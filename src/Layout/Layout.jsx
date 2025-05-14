// src/Layout/Layout.jsx
import React, { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebars from "../components/Sidebars/Sidebars";
import { dashboardRoutes } from "../Data/Admindata1";
import { GradientRingLoadingSpinner } from "../Ui/Loader";

const Layout = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hideNavbar = ["/login", "/SignUp"].includes(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full absolute left-0 ">
      {!hideNavbar && (
        <div className="flex w-full">
          {/* Sidebar */}
          <div
            className={`transition-all duration-300  ${
              isCollapsed ? "w-28" : "w-72"
            } ${isMobile ? "fixed z-30 inset-y-0 left-0" : ""}`}
          >
            <Sidebars
              isCollapsed={isCollapsed}
              toggleCollapse={() => setIsCollapsed(!isCollapsed)}
            />
          </div>

          {/* Overlay */}
          {isMobile && !isCollapsed && (
            <div
              onClick={() => setIsCollapsed(true)}
              className="fixed inset-0  opacity-50 z-20 md:hidden"
            />
          )}

          {/* Main Content */}
          <div className="flex-1 min-h-screen flex flex-col">
            <Navbar isCollapsed={isCollapsed} />
            <div className="bg-gray-100 p-4 flex-1 overflow-auto">
              <Suspense fallback={<GradientRingLoadingSpinner />}>
                <Routes>
                  {dashboardRoutes.map(({ path, element }) => (
                    <Route
                      key={path}
                      path={path.replace("/dashboard", "")}
                      element={element}
                    />
                  ))}

                  <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                  />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      )}

      {/* For login or SignUp pages */}
      {hideNavbar && <Outlet />}
    </div>
  );
};

export default Layout;
