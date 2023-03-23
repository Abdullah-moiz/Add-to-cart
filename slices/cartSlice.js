import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [],
    total : 0,
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    
  },
})

export const {  } = cartSlice.actions

export const  cartReducer =  cartSlice.reducer;