import axios from "axios"
import { getRequest, getSuccess, getFailed, getError } from "./eventSlice"
import { toast } from "react-toastify"

export const getAllEvent = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/events`
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
export const createEvent = (fields) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/events`,
			fields
		)
		if (result.data.message) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Post Created")
			dispatch(getAllEvent())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const deletEvent = (id) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/events/${id}`
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.warning("Post Deleted")
			dispatch(getAllEvent())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const updateEvent = (fields, id) => async (dispatch) => {
	// console.log(id)
	dispatch(getRequest())
	try {
		const result = await axios.put(
			`${process.env.REACT_APP_BASE_URL}/events/${id}`,
			fields
		)
		if (result.data.status === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Post Updated")
			dispatch(getAllEvent())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
