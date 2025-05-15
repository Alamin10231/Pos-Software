import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import Sidebars from "./components/Sidebars/Sidebars";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <div className="absolute left-0 w-full ">
        <BrowserRouter basename="/">
          <Routes className="" >
             <Route path={`/`} element={<Login></Login>} />
             <Route path={`/home`} element={<Home></Home>} />
            <Route path={`/dashboard/*`} element={<Layout />} />
            <Route  path={`/login`} element={<Login></Login>} />
            <Route path={`/SignUp`} element={<SignUp></SignUp>} />
            <Route path={`/sidebars`} element={<Sidebars></Sidebars>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
