import { configureStore, createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { expression: "", result: "" },
  reducers: {
    append: (state, action) => { state.expression += action.payload; },
    clear: (state) => { state.expression = ""; state.result = ""; },
    calculate: (state) => {
      try { state.result = eval(state.expression).toString(); } 
      catch { state.result = "Error"; }
    },
  },
});

export const { append, clear, calculate } = calculatorSlice.actions;
const store = configureStore({ reducer: { calculator: calculatorSlice.reducer } });

export default store;
