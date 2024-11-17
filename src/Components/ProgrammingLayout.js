import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const PropgrammingLayout = () => {
    return (
        <div className="page propgramming-layout d-flex ">
           <Sidebar/> 
           <Outlet/> 
        </div>
    )
}

export default PropgrammingLayout