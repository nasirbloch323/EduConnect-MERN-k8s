import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	contactList: [],
	loading: false,
	error: null,
	response: null,
	status: false,
}

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true
		},
		getSuccess: (state, action) => {
			state.contactList = action.payload
			state.loading = false
			state.error = null
			state.response = null
		},
		getStatus: (state, action) => {
			state.status = action.payload
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
})

export const { getRequest, getStatus, getSuccess, getFailed, getError } =
	contactSlice.actions

export const contactReducer = contactSlice.reducer
