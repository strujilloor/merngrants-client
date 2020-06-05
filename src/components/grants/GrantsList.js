import React, { Fragment } from 'react';
import Grant from './Grant';

const GrantsList = () => {

    const grants = [
        {title: 'Leaders for Change-Virtual Exchange Program'},
        {title: 'Increasing Public Awareness and Provider Education About Primary Immun...'},
        {title: 'Mitigating Violent Extremism in Masaka Region'}
    ]

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
        </Fragment>
    );
};

export default GrantsList;
