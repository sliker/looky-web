/* import { Actions } from './config.actions';
import {
    initialConfig
} from './config.action-types';
import { ConfigState } from './config.model';

export const initialState: ConfigState = {
    lang: 'en'
};

export const configReducer = (state = initialState, action: Actions)  => {
    switch (action.type) {
        case initialConfig:
            return Object.assign({}, state , action.payload);
        default:
            return state;
    }
};

export const getLang = (state: ConfigState) => state.lang; */
