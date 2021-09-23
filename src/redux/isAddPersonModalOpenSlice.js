import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
  },
};

export const isOpenSlice = createSlice({
  name: "isAddPersonModalOpen",
  initialState,
  reducers: {
    setAddModalIsOpen: (state, action) => {
      state.value.isOpen = action.payload;
    },
  },
});

export const { setAddModalIsOpen } = isOpenSlice.actions;

export const selectAddModalIsOpen = (state) =>
  state.isAddPersonModalOpen.value.isOpen;

export default isOpenSlice.reducer;
