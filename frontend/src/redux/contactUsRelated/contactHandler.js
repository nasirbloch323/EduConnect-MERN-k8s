import axios from "axios"
import {
	getRequest,
	getSuccess,
	getFailed,
	getError,
	getStatus,
} from "./contactSlice"
import { toast } from "react-toastify"

export const getAllContacts = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/allcontact`
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			dispatch(getSuccess(result.data))
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const getContactById = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/announcements`
		)
		if (result.data.message) {
			dispatch(getFailed(result.data.message))
		} else {
			dispatch(getSuccess(result.data))
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const createContact = (fields) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/contact`,
			fields
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Form is submitted")
			dispatch(getStatus(result.data.success))
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const deletContact = (id) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/contact/${id}`
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.warning("Form Deleted")
			dispatch(getAllContacts())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
