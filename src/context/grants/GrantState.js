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

            getGrants();
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
    const getGrants = async () => {

        const response = await axiosClient.get('/api/grants?page=1&pagination=10');
        const grants = response.data.grants;
        console.log( grants );

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
