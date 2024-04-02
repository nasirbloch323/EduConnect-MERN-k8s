import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getRequest, getSuccess, getFailed, getError } from "./annSlice"
import { toast } from "react-toastify"

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const productsFetch = createAsyncThunk(
  "/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


export const getAllAnn = () => async (dispatch) => {
	dispatch(getRequest())
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/products`
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
export const productsCreate = createAsyncThunk(
  "/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/products`,
        values,

      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const deletAnn = (id) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/products/${id}`
    )
    if (result.data.success === false) {
      dispatch(getFailed(result.data.message))
    } else {
      toast.warning("Post Deleted")
      dispatch(productsFetch())
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
      `${process.env.REACT_APP_BASE_URL}/products/${id}`,
      fields
    )
    if (result.data.status === false) {
      dispatch(getFailed(result.data.message))
    } else {
      toast.success("Post Updated")
      dispatch(productsFetch())
    }
  } catch (error) {
    dispatch(getError(error))
  }
}


const productsSlice = createSlice({
  name: "products",
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
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Product Created!");
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
