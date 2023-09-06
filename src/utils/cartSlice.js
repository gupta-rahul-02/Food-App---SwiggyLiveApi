import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    totalQuantity: 0,
    cartValue: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
        state.totalQuantity++;
        state.cartValue += Math.ceil(action.payload.price/100)
        
      } else {
  
        state.items.push(action.payload);
        state.totalQuantity++;
        state.cartValue += Math.ceil(action.payload.price/100)
       
      }
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0
      state.cartValue=0
    },
    addQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
        state.totalQuantity++;
        state.cartValue += Math.ceil(action.payload.price/100)
      }
    },
    removeQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.count === 1) {
          state.items = state.items.filter((obj) => {
            state.totalQuantity--;
            state.cartValue -= Math.ceil(action.payload.price/100)
            return obj.id !== item.id;
          });
        } else {
          state.totalQuantity--;
          state.cartValue -= Math.ceil(action.payload.price/100)
          item.count--;
        }
      }
    },
    getItemCount:(state,action) => {
        const item = state.items.find((item) => item.id === action.payload.id)
        if(item){
            return item.count
        }
    }
  },
});

export const { addItem, removeItem, clearCart, addQuantity, removeQuantity , getItemCount} =
  cartSlice.actions;
export default cartSlice.reducer;
