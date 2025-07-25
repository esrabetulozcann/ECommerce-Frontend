import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products: [],
    images: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "http://localhost:5067";
//http://localhost:5067/
//http://localhost:5067/api/Product/GetAllProduct
//https://fakestoreapi.com

export const getAllProducts = createAsyncThunk("getAllProducts", async()=>{
   const response = await axios.get(`${BASE_URL}/api/Product/GetAllProduct`);
   return response.data;
})

export const getAllProductImages = createAsyncThunk("getAllProductImages", async () => {
  const response = await axios.get(`${BASE_URL}/api/ProductImage/GetAllProductImage`);
  return response.data;
});


export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setSelectedProduct : (state, action)=>{
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                console.error("Ürünler alınamadı:", action.error.message);
            })

            .addCase(getAllProductImages.fulfilled, (state, action) => {
                state.images = action.payload;
            })
            .addCase(getAllProductImages.rejected, (state, action) => {
                console.error("Ürün görselleri alınamadı:", action.error.message);
            });
    }
})

export const { setSelectedProduct} = productSlice.actions

export default productSlice.reducer