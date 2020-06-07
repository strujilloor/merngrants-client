import React, 
// eslint-disable-next-line
    { Fragment, useContext, useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import GrantsList from './GrantsList';
import Bar from '../layout/Bar';
// import Pagination from '../Pagination';
import grantContext from '../../context/grants/grantContext';
import Pagination from "react-js-pagination";

const Grants = () => {

    // Getting grants state
    const grantsContext = useContext( grantContext );
    const { grants, getGrants, loading } = grantsContext ;

    // Component State
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ grantsPerPage ] = useState( 20 );
    
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
                            activePage={ currentPage }
                            itemsCountPerPage={ grantsPerPage }
                            totalItemsCount={ grants.length }
                            pageRangeDisplayed={ 5 } // range of pages numbers to show
                            onChange={ paginate }
                            hideDisabled={ true }

                            prevPageText="Prev"
                            // firstPageText="First"
                            // lastPageText="Last"
                            nextPageText="Next"
                            innerClass="pagination" // ul
                            itemClass="page-item"   // li
                            linkClass="page-link"   // a
                            activeLinkClass="active"
                            
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Grants;
