import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UpdateMenu:false,
    UpdateFee:false,
    Admin:false,
    AccountIcon:false,
    Login:false,
    SignUp:false,
}

const manageNavSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{
        manageHomePageNavbar:(state)=>{
              state.Admin = true
              state.AccountIcon = true
              state.Login = true
              state.SignUp = true
              state.UpdateMenu = false
              state.UpdateFee = false
        },
        manageAdminPageNavbar:(state)=>{
              state.Admin = true
              state.AccountIcon = true
              state.Login = false
              state.SignUp = false
              state.UpdateMenu = true
              state.UpdateFee = true
        }
    }
})

export const {manageHomePageNavbar,manageAdminPageNavbar} = manageNavSlice.actions
export default manageNavSlice.reducer