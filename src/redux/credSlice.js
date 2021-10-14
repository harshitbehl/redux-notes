import { createSlice } from "@reduxjs/toolkit";

export const credSlice = createSlice({
  name: "credentials", // This will be same as mentioned in store
  initialState: {
    name: "Harshit",
    email: "harshit.behl.96@gmail.com",
  },
  reducers: {
    // Actions
    // Every action takes in 2 parameters state and action
    // state is initialState object and action is action.payload which will be the new state value that is dispatched from other components
    // When we dispatch from component we send action.payload which is an object 
    update: (state, action) => {
      state.name = action.payload.name; // action.payload.name means it will update the state.name
      state.email = action.payload.email;
    },
  },
});

// Exporting actions

export const { update } = credSlice.actions;

// Exporting reducer
export default credSlice.reducer;