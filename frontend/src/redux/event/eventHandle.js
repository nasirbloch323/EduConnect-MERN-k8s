import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getRequest, getSuccess, getFailed, getError } from "./eventSlice"
import { toast } from "react-toastify"
const initialState = {
	events: [],
	status: null,
	createStatus: null,
}

export const eventsFetch = createAsyncThunk("getEvents", async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/events`)
		console.log(response.data)
		return response.data
	} catch (error) {
		console.log(error)
	}
})

export const eventsCreate = createAsyncThunk("eventsCreate", async (values) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/events`,
			values
		)

		return response.data
	} catch (error) {
		console.log(error)
		toast.error(error.response?.data)
	}
})

export const getAllEvent = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/events`)
		if (result.data.message) {
			dispatch(getFailed(result.data.message))
		} else {
			dispatch(getSuccess(result.data))
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

const eventsSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true
		},
		getSuccess: (state, action) => {
			state.events = action.payload
			state.loading = false
			state.error = null
			state.response = null
		},
		getFailed: (state, action) => {
			state.response = action.payload
			state.loading = false
			state.error = null
		},
		getError: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
	extraReducers: {
		[eventsFetch.pending]: (state) => {
			state.status = "pending"
		},
		[eventsFetch.fulfilled]: (state, action) => {
			state.events = action.payload
			state.status = "success"
		},
		[eventsFetch.rejected]: (state, action) => {
			state.status = "rejected"
		},
		[eventsCreate.pending]: (state, action) => {
			state.createStatus = "pending"
		},
		[eventsCreate.fulfilled]: (state, action) => {
			state.events.push(action.payload)
			state.createStatus = "success"
			toast.success("Product Created!")
		},
		[eventsCreate.rejected]: (state, action) => {
			state.createStatus = "rejected"
		},
	},
})

export default eventsSlice.reducer
