import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
  },
};

export const isOpenSlice = createSlice({
  name: "isFriendModalOpen",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.value.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = isOpenSlice.actions;

export const selectIsOpen = (state) => state.isFriendModalOpen.value.isOpen;

export default isOpenSlice.reducer;
