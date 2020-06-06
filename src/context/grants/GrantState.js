import React, { useReducer } from 'react';

import grantContext from './grantContext';
import grantReducer from './grantReducer';

import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR
} from '../../types';

const GrantState = (props) => {
    const initialState = {
        loadingUpdateData : false // TODO: maybe change to only loading
    };

    // dispatch to execute actions
    const [ state, dispatch ] = useReducer( grantReducer, initialState );

    // Functions Series that shoot state loading data update
    const startLoadingUpdateDateFn = () => {
        dispatch({
            type: START_LOADING_UPDATE_DATA
        })
    }
    const loadingUpdateDateSuccessFn = () => {
        dispatch({
            type: LOADING_UPDATE_DATA_SUCCESS
        })
    }
    const loadingUpdateDateErrorFn = () => {
        dispatch({
            type: LOADING_UPDATE_DATA_ERROR
        })
    }

    
    return (
        <grantContext.Provider
            value={{
                loadingUpdateData: state.loadingUpdateData,
                startLoadingUpdateDateFn,
                loadingUpdateDateSuccessFn,
                loadingUpdateDateErrorFn
            }}
        >{ props.children }
        </grantContext.Provider>
    );
};

export default GrantState;
