
import * as api from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const viewTokens = async (data)=>{
  try {
    const tokens = await api.viewTokens(data);
      return tokens
  } catch (err) {
    console.log(err);
  }

}
 



