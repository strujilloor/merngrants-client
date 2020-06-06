import React, { useReducer } from 'react';

import grantContext from './grantContext';
import grantReducer from './grantReducer';

import axiosClient from '../../config/axios';

import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR,

    GET_GRANTS
} from '../../types';


const GrantState = (props) => {
    const grants = [
        {id: 1, title: 'Leaders for Change-Virtual Exchange Program', number: 'S-DR860-20-NOFO-005', agencyCode: 'DOS-DOM', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},
        
        {id: 2, title: 'Increasing Public Awareness and Provider Education About Primary Immun...',  number: 'CDC-RFA-OE17-17020401SUPP20', agencyCode: 'HHS-CDC-CSELS', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'},
    
        {id: 3, title: 'Mitigating Violent Extremism in Masaka Region',  number: 'DOS-UG-PAS-FY20-1', agencyCode: 'DOS-UGA', oppStatus: 'posted', openDate: '2020-06-05T00:00:00.000+00:00', closeDate: '2020-07-07T00:00:00.000+00:00'}
    ];


    const initialState = {
        grants: [],
        loadingUpdateData : false, // TODO: maybe change to only loading
        dataUpdated: null
    };

    // dispatch to execute actions
    const [ state, dispatch ] = useReducer( grantReducer, initialState );

    // Functions Series that shoot state loading data update
    const updateData =  async () => {
        try {
            dispatch({
                type: START_LOADING_UPDATE_DATA
            });

            const response = await axiosClient.get('/api/grants/update');
            console.log( response );

            dispatch({
                type: LOADING_UPDATE_DATA_SUCCESS,
                payload: {
                    msg: 'Database Updated ✔'
                }
            });
        } catch (error) {
            console.log( error );
            dispatch({
                type: LOADING_UPDATE_DATA_ERROR,
                payload: {
                    msg: 'Database not updated ✖'
                }
            });
        }
    }

    // Get grants
    const getGrants = () => {
        dispatch({
            type: GET_GRANTS,
            payload: grants
        });
    }

    
    return (
        <grantContext.Provider
            value={{
                grants: state.grants,
                loadingUpdateData: state.loadingUpdateData,
                dataUpdated: state.dataUpdated,

                updateData,
                getGrants
            }}
        >{ props.children }
        </grantContext.Provider>
    );
};

export default GrantState;
