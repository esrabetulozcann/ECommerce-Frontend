import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from '../redux/slices/productSlice'
import favoriteReducer from '../redux/slices/favoriteSlice';
import basketReducer from '../redux/slices/basketSlice';
import userReducer from '../redux/slices/userSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    favorite: favoriteReducer,
    basket: basketReducer,
    user: userReducer,
  },
})