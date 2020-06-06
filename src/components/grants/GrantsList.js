import React, { Fragment, useContext } from 'react';
import Grant from './Grant';
import grantContext from '../../context/grants/grantContext';

const GrantsList = () => {

    // Getting grants state
    const grantsContext = useContext( grantContext );
    const { grants } = grantsContext ;

    // Check if grants have content
    if ( grants.length === 0 ) return null;

    return (
        <Fragment>
            <h2>Grants List</h2>
            <ul className="listado-tareas">
                {
                    grants.length === 0 
                    ? (<li className="tarea"><p>There are no Grants</p></li>) 
                    : grants.map( (grant) => (
                        <Grant
                        grant={ grant }
                        />
                    ))
                }
            </ul>

            {/* PAGINATION HERE */}
        </Fragment>
    );
};

export default GrantsList;
