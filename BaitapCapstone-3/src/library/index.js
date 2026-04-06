import { configureStore } from '@reduxjs/toolkit'
import { auth } from '../store/auth.slice'

export const store = configureStore({
    reducer: {
        auth
    },
})
