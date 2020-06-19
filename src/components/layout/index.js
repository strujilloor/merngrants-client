import React from "react";
import Bar from "./Bar";
import Sidebar from "./Sidebar";

const index = ({ children }) => {
    return (
    <>
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <div className="contenedor-grants">
                        { children }  
                    </div>
                </main>
            </div>
        </div>
    </>
    );
};

export default index;
