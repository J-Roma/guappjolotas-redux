import { types } from "../types/types";

const initialState = {
    dbProducts: []
}

export const dbProductReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.dbProductos:
            return {
                ...state,
                dbProducts: action.payload,
            };

        default:
            return state;
    }
}
