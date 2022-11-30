import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";

const LoginLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;