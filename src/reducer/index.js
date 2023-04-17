import * as initialData from '../data/data'
import * as actionType from '../constants/constants'

let initialStateData = { data: initialData.initialTasks, loading: false, error: "" };
let initialStateRegistration = { data: initialData.initialRegistration, loading: false, error: "" };

export const productReducer = (state = initialStateData, action) => {
    switch (action.type) {
        //FATCH TASK
        case actionType.FETCH_TASKS_REQUEST:
            return { data: [], loading: true, error: "" };

        case actionType.FETCH_TASKS_SUCCESS:
            return { data: action.payload, loading: false, error: "" };

        case actionType.FETCH_TASKS_ERROR:
            return { data: state, loading: false, error: action.payload };

        //CREATE TASK
        case actionType.CREATE_TASK_REQUEST:
            return { data: state.data, loading: true, error: "" };

        case actionType.CREATE_TASK_SUCCESS:
            return { data: [...state.data, action.payload], loading: false, error: "" };

        case actionType.CREATE_TASK_ERROR:
            return { data: state.data, loading: false, error: action.payload };

        //DELETE TASK
        case actionType.DELETE_TASK_REQUEST:
            return { data: state.data, loading: true, error: "" };

        case actionType.DELETE_TASK_SUCCESS:
            return { data: state.data.filter(task => task.id !== action.payload), loading: false, error: "" };

        case actionType.DELETE_TASK_ERROR:
            return { data: state.data, loading: false, error: action.payload };

        //SINGLE DATA
        case actionType.SINGLE_REQUEST:
            return { data: [], loading: true, error: "" };

        case actionType.SINGLE_SUCCESS:
            return { data: action.payload, loading: false, error: "" };

        case actionType.SINGLE_ERROR:
            return { data: state, loading: false, error: action.payload };

        // UPDATE TASK
        case actionType.UPDATE_TASK_REQUEST:
            return { data: state.data, loading: true, error: "" };

        case actionType.UPDATE_TASK_SUCCESS:
            return { data: state.data, loading: false, error: "" };

        case actionType.UPDATE_TASK_ERROR:
            return { data: state.data, loading: false, error: action.payload };

        default:
            return state;
    }
}

export const RegistrationReducer = (state = initialStateRegistration, action) => {
    switch (action.type) {
        case actionType.REGISTRATION_REQUEST:
            return { data: [], loading: true, error: "" };

        case actionType.REGISTRATION_SUCCESS:
            return { data: action.payload, loading: false, error: "" };

        case actionType.REGISTRATION_ERROR:
            return { data: state, loading: false, error: action.payload };

        default:
            return state;
    }
}