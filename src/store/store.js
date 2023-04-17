import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducer from "../reducer/combinereducer";

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;