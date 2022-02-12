import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const authInitialState = { isAuthenicated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    true(state) {
      state.isAuthenicated = true;
    },
    false(state) {
      state.isAuthenicated = false;
    },
    reverse(state) {
      state.isAuthenicated = !state.isAuthenicated;
    },
  },
});
const paragraphSlice = createSlice({
  name: "paragraph",
  initialState: "",
  reducers: {
    set(state, action){
      return  state = action.payload.value
    }
  }
})
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer, paragraph: paragraphSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions
export const paragraphActions = paragraphSlice.actions
export default store;
