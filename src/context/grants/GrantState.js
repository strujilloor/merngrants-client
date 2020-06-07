import React, { useReducer } from 'react';

import grantContext from './grantContext';
import grantReducer from './grantReducer';

import axiosClient from '../../config/axios';

import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR,

    GET_GRANTS,
    START_LOADING_GRANTS,
    LOADING_GRANTS_SUCCESS,
    LOADING_GRANTS_ERROR
} from '../../types';


const GrantState = (props) => {

    const initialState = {
        grants: [],
        loadingUpdateData : false, // TODO: maybe change to only loading
        dataUpdated: null,
        loading: false // Loading pages
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

            await getGrants();
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

        dispatch({
            type: START_LOADING_GRANTS
        });

        try {
            const response = await axiosClient.get('/api/grants?page=1&pagination=1000');
            const grants = response.data.grants;
            console.log( grants );
    
            dispatch({
                type: GET_GRANTS,
                payload: grants
            });
            dispatch({
                type: LOADING_GRANTS_SUCCESS
            });
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOADING_GRANTS_ERROR
            });
        }

    }
    
    return (
        <grantContext.Provider
            value={{
                grants: state.grants,
                loadingUpdateData: state.loadingUpdateData,
                dataUpdated: state.dataUpdated,
                loading: state.loading,

                updateData,
                getGrants
            }}
        >{ props.children }
        </grantContext.Provider>
    );
};

export default GrantState;
