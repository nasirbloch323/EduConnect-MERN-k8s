import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	researchsList: [],
	loading: false,
	error: null,
	response: null,
}

const researchSlice = createSlice({
	name: "researchs",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true
		},
		getSuccess: (state, action) => {
			state.researchsList = action.payload
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

export const { getRequest, getSuccess, getFailed, getError } =
	researchSlice.actions

export const researchReducer = researchSlice.reducer
