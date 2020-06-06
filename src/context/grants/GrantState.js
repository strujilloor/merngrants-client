import React, { useReducer } from 'react';

import grantContext from './grantContext';
import grantReducer from './grantReducer';

const GrantState = (props) => {
    const initialState = {
        loadingUpdatedata : false
    };

    // dispatch to execute actions
    const [ state, dispatch ] = useReducer( grantReducer, initialState );
    
    return (
        <grantContext.Provider
            value={{ loadingUpdatedata: state.loadingUpdatedata }}
        >{ props.children }
        </grantContext.Provider>
    );
};

export default GrantState;
