import * as actionType from '../constants/constants'
import axios from 'axios';

export const fetchProduct = () => async (dispatch) => {
    dispatch({ type: actionType.FETCH_TASKS_REQUEST });
    try {
        let responce = await axios.get("http://localhost:3004/vagProduct");
        console.log(responce);

        dispatch({
            type: actionType.FETCH_TASKS_SUCCESS,
            payload: responce.data
        })
    }
    catch (err) {
        dispatch({
            type: actionType.FETCH_TASKS_ERROR,
            payload: err
        })
    }
}

export const createProduct = (data) => async (dispatch) => {
    dispatch({ type: actionType.CREATE_TASK_REQUEST });
    try {
        let responce = await axios.post("http://localhost:3004/vagProduct", data);
        console.log(responce);

        dispatch({
            type: actionType.CREATE_TASK_SUCCESS,
            payload: responce.data
        })
    }
    catch (err) {
        dispatch({
            type: actionType.CREATE_TASK_ERROR,
            payload: err
        })
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: actionType.DELETE_TASK_REQUEST });
    try {
        let responce = await axios.delete(`http://localhost:3004/vagProduct/${id}`);
        console.log(responce);

        dispatch({
            type: actionType.DELETE_TASK_SUCCESS,
            payload: responce.data
        })
        dispatch(fetchProduct());
    }
    catch (err) {
        dispatch({
            type: actionType.DELETE_TASK_ERROR,
            payload: id
        })
    }
}

export const singleProduct = (id) => async (dispatch) => {
    console.log(id);
    dispatch({ type: actionType.SINGLE_REQUEST });
    try {
        let responce = await axios.get(`http://localhost:3004/vagProduct/${id}`);
        console.log(responce);

        dispatch({
            type: actionType.SINGLE_SUCCESS,
            payload: responce.data
        })
    }
    catch (err) {
        dispatch({
            type: actionType.SINGLE_ERROR,
            payload: id
        })
    }
}

export const updateProduct = (data, id) => async (dispatch) => {
    console.log(data, id);
    dispatch({ type: actionType.UPDATE_TASK_REQUEST });
    try {
        console.log(data);
        let responce = await axios.put(`http://localhost:3004/vagProduct/${id}`, data);
        console.log(responce.data);

        dispatch({
            type: actionType.UPDATE_TASK_SUCCESS,
            payload: responce.data
        })
        dispatch(fetchProduct());
    }
    catch (err) {
        dispatch({
            type: actionType.UPDATE_TASK_ERROR,
            payload: err
        })
    }
}

export const createRegistration = (data) => async (dispatch) => {
    console.log(data);
    dispatch({ type: actionType.REGISTRATION_REQUEST });
    try {
        console.log(data);
        let responce = await axios.post("http://localhost:3004/Registration", data);
        console.log(responce);

        dispatch({
            type: actionType.REGISTRATION_SUCCESS,
            payload: responce.data
        })
    }
    catch (err) {
        dispatch({
            type: actionType.REGISTRATION_ERROR,
            payload: err
        })
    }
}