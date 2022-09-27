import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "./Routes";

const AppRouter = () => {
    return (
        <Routes>
            {
                authRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element/>}/>
                ))
            }
            {
                publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element/>}/>
                ))
            }
        </Routes>
    );
};

export default AppRouter;