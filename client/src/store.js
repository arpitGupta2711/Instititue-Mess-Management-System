import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../src/features/manageNavSlice'
import qr from './features/qr'
export const store = configureStore({
    reducer:{
       navbar:navReducer,
        qr:qr
    }
})