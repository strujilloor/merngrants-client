import React, { Fragment, useState, useContext } from 'react';
import grantContext from '../../context/grants/grantContext';

const UpdateGrant = () => {

    // Getting loadingUpdateData state
    const grantsContext = useContext( grantContext );
    const { loadingUpdateData } = grantsContext ;

    const [ loading, setLoading ] = useState(false);
    const [ updated, setUpdated ] = useState(false);

    const updateGrants =  async () => {
        const url = 'https://merngrants-server.herokuapp.com/api/grants/update';

        try {
            setUpdated(false);
            setLoading(true); // loading...
            let response = await fetch(url);
            let data = await response.json();
            setLoading(false);
            setUpdated(true); // success
            console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setUpdated(false);
        }
        
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ updateGrants }
            >Update DB</button>
            {
                loadingUpdateData ? <p>Loading...</p>: null
            }

            {
                updated ? <p>DB Updated ✔</p> : null
            }
        </Fragment>
    );
};

export default UpdateGrant;
