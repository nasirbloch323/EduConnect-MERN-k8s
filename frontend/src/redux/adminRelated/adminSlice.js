import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	status: "idle",
	adminDetails: [],
	loading: false,
	error: null,
	response: null,
}

const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		doneSuccess: (state, action) => {
			state.adminDetails = action.payload
			state.loading = false
			state.error = null
			state.response = null
		},
		getError: (state, action) => {
			state.loading = false
			state.error = action.payload
		},

		getRequest: (state) => {
			state.loading = true
		},
	},
})

export const { doneSuccess, getRequest, getError } = adminSlice.actions

export const adminReducer = adminSlice.reducer
