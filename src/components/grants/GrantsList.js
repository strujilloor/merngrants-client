import React, { Fragment } from 'react';
import Grant from './Grant';

const GrantsList = () => {

    const grants = [
        {title: 'Leaders for Change-Virtual Exchange Program', number: 'S-DR860-20-NOFO-005', agencyCode: 'DOS-DOM', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},

        {title: 'Increasing Public Awareness and Provider Education About Primary Immun...',  number: 'CDC-RFA-OE17-17020401SUPP20', agencyCode: 'HHS-CDC-CSELS', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},

        {title: 'Mitigating Violent Extremism in Masaka Region',  number: 'DOS-UG-PAS-FY20-1', agencyCode: 'DOS-UGA', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'}
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

            {/* PAGINATION HERE */}
        </Fragment>
    );
};

export default GrantsList;
