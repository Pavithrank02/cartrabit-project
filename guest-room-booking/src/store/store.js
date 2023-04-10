import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../../src/utills/apiSlice';


let reducer = {
  api: apiSlice
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;