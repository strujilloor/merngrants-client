import React, 
    { Fragment } from 'react';
import Grant from './Grant';

const GrantsList = ({ grants, loading }) => {

    // Check if grants have content
    // if ( grants.length === 0 ) return null;

    return (
        <Fragment>
            
            <ul className="listado-tareas">
                {
                    loading ? <p>Loading...</p> : null
                }
                {
                    grants.length === 0 
                    ? (<li className="tarea"><p>There are no Grants</p></li>) 
                    : grants.map( (grant) => (
                        <Grant
                            key={ grant.id }
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
