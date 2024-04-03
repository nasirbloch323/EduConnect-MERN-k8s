import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { getRequest, getSuccess, getFailed, getError } from "./researchSlice"
import { toast } from "react-toastify"

const initialState = {
	researchs: [],
	status: null,
	researchStatus: null,
}

export const researchsFetch = createAsyncThunk("/researchsFetch", async () => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/researchs`
		)

		return response.data
	} catch (error) {
		console.log(error)
	}
})

export const getAllResearch = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/researchs`
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
export const researchsCreate = createAsyncThunk(
	"researchs Create",
	async (values) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/researchs`,
				values
			)

			return response.data
		} catch (error) {
			console.log(error)
			toast.error(error.response?.data)
		}
	}
)

export const deletResearch = (id) => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/researchs/${id}`
		)
		if (result.data.success === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.warning("Post Deleted")
			dispatch(getAllResearch())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}
export const updateResearch = (fields, id) => async (dispatch) => {
	// console.log(id)
	dispatch(getRequest())
	try {
		const result = await axios.put(
			`${process.env.REACT_APP_BASE_URL}/researchs/${id}`,
			fields
		)
		if (result.data.status === false) {
			dispatch(getFailed(result.data.message))
		} else {
			toast.success("Post Updated")
			dispatch(getAllResearch())
		}
	} catch (error) {
		dispatch(getError(error))
	}
}

const researchsSlice = createSlice({
	name: "researchs",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true
		},
		getSuccess: (state, action) => {
			state.researchs = action.payload
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
		[researchsFetch.pending]: (state) => {
			state.status = "pending"
		},
		[researchsFetch.fulfilled]: (state, action) => {
			state.researchs = action.payload
			state.status = "success"
		},
		[researchsFetch.rejected]: (state, action) => {
			state.status = "rejected"
		},
		[researchsCreate.pending]: (state, action) => {
			state.createStatus = "pending"
		},
		[researchsCreate.fulfilled]: (state, action) => {
			state.researchs.push(action.payload)
			state.createStatus = "success"
			toast.success("Product Created!")
		},
		[researchsCreate.rejected]: (state, action) => {
			state.createStatus = "rejected"
		},
	},
})

export default researchsSlice.reducer
