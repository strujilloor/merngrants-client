import React, { useReducer } from 'react';

import grantContext from './grantContext';
import grantReducer from './grantReducer';

const GrantState = (props) => {
    const initialState = {
        loadingUpdateData : false
    };

    // dispatch to execute actions
    const [ state, dispatch ] = useReducer( grantReducer, initialState );
    
    return (
        <grantContext.Provider
            value={{ loadingUpdateData: state.loadingUpdateData }}
        >{ props.children }
        </grantContext.Provider>
    );
};

export default GrantState;
