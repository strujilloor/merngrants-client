import React from 'react';
import { useParams } from 'react-router-dom';

const GrantDetail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            Prueba from grant detail
        </div>
    );
};

export default GrantDetail;
