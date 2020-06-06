import React, { Fragment, useState, useContext } from 'react';
import grantContext from '../../context/grants/grantContext';

const UpdateGrant = () => {

    // Getting loadingUpdateData state
    const grantsContext = useContext( grantContext );
    const {
        loadingUpdateData, // state
        startLoadingUpdateDateFn, // dispatch start loading
        loadingUpdateDateSuccessFn,  // dispatch success loading
        loadingUpdateDateErrorFn // dispatch error loading
    } = grantsContext ;

    const [ updated, setUpdated ] = useState(false);

    const updateGrants =  async () => {
        const url = 'https://merngrants-server.herokuapp.com/api/grants/update';

        try {
            setUpdated(false);
            startLoadingUpdateDateFn(); // Loading
            let response = await fetch(url);
            let data = await response.json();
            loadingUpdateDateSuccessFn(); // Success
            setUpdated(true);
            console.log(data);
        } catch (error) {
            console.log(error);
            loadingUpdateDateErrorFn(); // Error
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
