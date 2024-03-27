import axios from "axios"
import { doneSuccess, getError, getRequest } from "./adminSlice"

export const getAllAdmins = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/admins`)
		if (result.data) {
			console.log(result.data)
			dispatch(doneSuccess(result.data))
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
