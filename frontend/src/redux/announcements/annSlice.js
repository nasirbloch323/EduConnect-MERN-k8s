import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	annList: [],
	loading: false,
	error: null,
	response: null,
}

const annSlice = createSlice({
	name: "notice",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true
		},
		getSuccess: (state, action) => {
			state.annList = action.payload
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

export const { getRequest, getSuccess, getFailed, getError } = annSlice.actions

export const annReducer = annSlice.reducer
