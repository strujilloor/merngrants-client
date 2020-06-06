import React, { Fragment, useContext } from 'react';
import grantContext from '../../context/grants/grantContext';

const UpdateGrant = () => {

    // Getting loadingUpdateData state
    const grantsContext = useContext( grantContext );
    const {
        loadingUpdateData, // state
        dataUpdated,

        updateData
    } = grantsContext ;

    const updateGrants =  () => updateData();

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
                dataUpdated ? <p>{ dataUpdated.msg }</p> : null
            }
        </Fragment>
    );
};

export default UpdateGrant;
