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
        grants: [
            {id: 1, title: 'Leaders for Change-Virtual Exchange Program', number: 'S-DR860-20-NOFO-005', agencyCode: 'DOS-DOM', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},
    
            {id: 2, title: 'Increasing Public Awareness and Provider Education About Primary Immun...',  number: 'CDC-RFA-OE17-17020401SUPP20', agencyCode: 'HHS-CDC-CSELS', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},
    
            {id: 3, title: 'Mitigating Violent Extremism in Masaka Region',  number: 'DOS-UG-PAS-FY20-1', agencyCode: 'DOS-UGA', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'}
        ],
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
                grants: state.grants,
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
