import { combineReducers } from "@reduxjs/toolkit";
import * as Reducer from '../reducer/index'

const allReducer = combineReducers({
    product: Reducer.productReducer,
    registration: Reducer.RegistrationReducer
});

export default allReducer;