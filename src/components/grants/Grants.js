import React, 
// eslint-disable-next-line
    { Fragment, useContext, useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import GrantsList from './GrantsList';
import Bar from '../layout/Bar';
import Pagination from '../Pagination';
import grantContext from '../../context/grants/grantContext';

const Grants = () => {

    // Getting grants state
    const grantsContext = useContext( grantContext );
    const { grants, getGrants, loading } = grantsContext ;

    // Component State
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ grantsPerPage ] = useState( 2 );
    
    // Get grants when component load
    useEffect(() => {
        getGrants();
        // eslint-disable-next-line
    }, []);

    // Get current grants
    const indexOfLastGrant = currentPage * grantsPerPage;
    const indexOfFirstGrant = indexOfLastGrant - grantsPerPage;
    const currentGrants = grants.slice( indexOfFirstGrant, indexOfLastGrant ); // change to api request

    // change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">

                <Bar />

                <main>
                    <div className="contenedor-tareas">
                        <h2>Grants List</h2>
                        <GrantsList 
                            grants={ currentGrants }
                            loading={ loading } 
                        />
                        <Pagination 
                            grantsPerPage={ grantsPerPage }
                            totalGrants={ grants.length }
                            paginate={ paginate }
                            currentPage = { currentPage }
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Grants;
