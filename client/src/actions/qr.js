
import * as api from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const scanQRCode = async (data)=>{
  try {
    const status = await api.scanQr(data);
    if (status === 200) {
      alert('User is Permitted')
      // return data;
    } else {
      alert("Not registered for this meal");
    }
  } catch (err) {
    console.log(err);
  }

}
 