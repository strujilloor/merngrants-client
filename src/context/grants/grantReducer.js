import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR,

    GET_GRANTS,
    START_LOADING_GRANTS,
    LOADING_GRANTS_SUCCESS,
    LOADING_GRANTS_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case START_LOADING_UPDATE_DATA:
            return {
                ...state,
                loadingUpdateData: true,
                dataUpdated: false
            }
        case LOADING_UPDATE_DATA_SUCCESS:
        case LOADING_UPDATE_DATA_ERROR:
            return {
                ...state,
                loadingUpdateData: false,
                dataUpdated: {
                    msg: action.payload.msg
                }
            }
        case GET_GRANTS:
            return {
                ...state,
                grants: action.payload
            }
        case START_LOADING_GRANTS:
            return {
                ...state,
                loading: true
            }
        case LOADING_GRANTS_SUCCESS:
        case LOADING_GRANTS_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
} 