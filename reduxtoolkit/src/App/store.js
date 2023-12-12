import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feachers/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})