import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../src/features/manageNavSlice'
import qr from './features/qr'
import authReducer from './features/authSlice'
export const store = configureStore({
    reducer:{
       navbar:navReducer,
        qr:qr,
        authReducer:authReducer
    }
})