import { createSlice } from "@reduxjs/toolkit";
import { scanQRCode } from "../actions/qr";




const initialState = []
const manageNavSlice = createSlice({
    name:'qr',
    initialState,
    reducers:{
    }

})


export default manageNavSlice.reducer