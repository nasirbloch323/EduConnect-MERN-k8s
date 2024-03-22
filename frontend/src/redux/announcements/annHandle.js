import axios from "axios"
import { getRequest, getSuccess, getFailed, getError } from "./annSlice"
import { toast } from "react-toastify"

export const getAllAnn = () => async (dispatch) => {
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
export const createAnn = (fields) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/announcements`,
			fields
		)
		if (result.data.message) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Post Created")
			dispatch(getAllAnn())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const deletAnn = (id) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/announcements/${id}`
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.warning("Post Deleted")
			dispatch(getAllAnn())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const updateAnn = (fields, id) => async (dispatch) => {
	// console.log(id)
	dispatch(getRequest())
	try {
		const result = await axios.put(
			`${process.env.REACT_APP_BASE_URL}/announcements/${id}`,
			fields
		)
		if (result.data.status === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Post Updated")
			dispatch(getAllAnn())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
