import { 
    START_LOADING_UPDATE_DATA,
    LOADING_UPDATE_DATA_SUCCESS,
    LOADING_UPDATE_DATA_ERROR
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
        default:
            return state;
    }
} 