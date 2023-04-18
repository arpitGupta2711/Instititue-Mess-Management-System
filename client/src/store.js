import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../src/features/manageNavSlice'
export const store = configureStore({
    reducer:{
       navbar:navReducer        
    }
})