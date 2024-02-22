import {Outlet} from "react-router-dom";
import React from "react";
import {Header} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};