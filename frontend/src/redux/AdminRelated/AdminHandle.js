import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    postDone,
    doneSuccess
} from './AdminSlice';

export const getAllAdmins = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Admins/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getAdminDetails = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Admin/${id}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

// export const updateAdminSubject = (teacherId, teachSubject) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         await axios.put(`${process.env.REACT_APP_BASE_URL}/AdminSubject`, { teacherId, teachSubject }, {
//             headers: { 'Content-Type': 'application/json' },
//         });
//         dispatch(postDone());
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }