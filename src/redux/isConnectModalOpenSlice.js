import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
  },
};

export const isOpenSlice = createSlice({
  name: "isConnectModalOpen",
  initialState,
  reducers: {
    setConnectModalIsOpen: (state, action) => {
      state.value.isOpen = action.payload;
    },
  },
});

export const { setConnectModalIsOpen } = isOpenSlice.actions;

export const selectConnectModalIsOpen = (state) =>
  state.isConnectModalOpen.value.isOpen;

export default isOpenSlice.reducer;
