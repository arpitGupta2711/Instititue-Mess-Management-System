import * as api from "../api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const getPosts = () => async (dispatch) => {
//   try {
//     // dispatch({ type: START_LOADING });
//     const { data } = await api.fetchMenu();
//     console.log(data);
//     // dispatch({ type: FETCH_ALL, payload: data });
//     // dispatch(getReducer())
//     // dispatch({ type: END_LOADING });
//   } catch (err) {
//     console.log(err.message);
//   }
// }; 


export const getMenu     = createAsyncThunk(
  //action type string
  'posts/getPosts',
  // callback function
  async (thunkAPI) => {
    const res = await api.fetchMenu().then(
    (data) => data.json()
  )
  return res
})
