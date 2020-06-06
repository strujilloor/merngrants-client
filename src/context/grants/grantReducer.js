import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR,

    GET_GRANTS
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case START_LOADING_UPDATE_DATA:
            return {
                ...state,
                loadingUpdateData: true
            }
        case LOADING_UPDATE_DATA_SUCCESS:
        case LOADING_UPDATE_DATA_ERROR:
            return {
                ...state,
                loadingUpdateData: false
            }
        case GET_GRANTS:
            return {
                ...state,
                grants: action.payload
            }
        default:
            return state;
    }
} 