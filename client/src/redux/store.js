import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from '../store/features/auth/authSlice'

export const store = configureStore({
    reducer:{
        auth: authSlice,
    }
})