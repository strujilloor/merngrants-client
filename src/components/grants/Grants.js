import React from 'react';
import Sidebar from '../layout/Sidebar';
import GrantsList from './GrantsList';
import Bar from '../layout/Bar';

const Grants = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">

                <Bar />

                <main>
                    <div className="contenedor-tareas">
                        <GrantsList />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Grants;
