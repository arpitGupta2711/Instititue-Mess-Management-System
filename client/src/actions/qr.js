import * as api from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const scanQRCode = async (dataf) => {
  try {
    console.log("this is username : ", dataf);
    const data = await api.scanQr({ username: dataf });
    console.log("status is ", data);
    if (data.data.status === 200) {
      alert("User is Permitted");
      // return data;
    } else {
      alert(data.data.message);
    }
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
};
