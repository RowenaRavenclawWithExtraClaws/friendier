import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
  },
};

export const isOpenSlice = createSlice({
  name: "isFindModalOpen",
  initialState,
  reducers: {
    setFindModalIsOpen: (state, action) => {
      state.value.isOpen = action.payload;
    },
  },
});

export const { setFindModalIsOpen } = isOpenSlice.actions;

export const selectFindModalIsOpen = (state) =>
  state.isFindModalOpen.value.isOpen;

export default isOpenSlice.reducer;
