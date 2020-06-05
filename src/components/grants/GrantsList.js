import React from 'react';
import Grant from './Grant';

const GrantsList = () => {

    const grants = [
        {title: 'Leaders for Change-Virtual Exchange Program'},
        {title: 'Increasing Public Awareness and Provider Education About Primary Immun...'},
        {title: 'Mitigating Violent Extremism in Masaka Region'}
    ]

    return (
        <ul className="listado-proyectos">
            {grants.map(grant => (
                <Grant 
                    grant={grant}
                />
            ))}
        </ul>
    );
};

export default GrantsList;
