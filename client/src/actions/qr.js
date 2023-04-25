
import * as api from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const scanQRCode = async (dataf)=>{
  try {
    console.log("this is username : ",dataf)
    const data = await api.scanQr({"username":dataf});
    console.log('status is ',data);
    if (data.data.status === 200) {
      alert('User is Permitted')
      // return data;
    } else {
      alert("Not registered for this meal");
    }
  } catch (err) {
    console.log(err);
  }

}
 